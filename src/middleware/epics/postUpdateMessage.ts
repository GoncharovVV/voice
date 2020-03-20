import { ofType } from 'redux-observable';
import { concat, from, Observable, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, filter, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  onErrorPostUpdateMessageAction,
  updateUpdateMessageAction
} from '../../store/actions/updateMessageActions';
import { apiHeaderJson, postUpdateMessageUrl } from '../../utils/constants/apiUrls';
import { POST_UPDATE_MESSAGE_REQUEST } from '../../utils/constants/mainActions';
import { ApiMethods } from '../../utils/types';
import { onLogoutAction } from '../../store/actions/authActions';

const postUpdateMessage = (action$: Observable<any>) => {
  return action$.pipe(
    ofType(POST_UPDATE_MESSAGE_REQUEST),
    filter(({ payload }) => typeof payload === 'object'),
    switchMap(({ payload }): any => {
      const { partnerKey, ...body } = payload;
      const _url = `${postUpdateMessageUrl.replace(':partnerKey', partnerKey)}`;
      return concat(
        fromFetch(_url, {
          method: ApiMethods.POST,
          credentials: 'include',
          body: JSON.stringify(body),
          headers: apiHeaderJson
        }).pipe(
          mergeMap((res: any) => {
            console.log(res);
            if(res.status === 401 || res.status === 400) {
              return throwError('logout');
            }
            if (!res.ok) {
              return throwError('error');
            }
            return from(res.json());
          }),
          map((x: any) => {
            return updateUpdateMessageAction(x);
          }),
          catchError((err:any) => {
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorPostUpdateMessageAction(true));
          })
        )
      );
    })
  );
};
export default postUpdateMessage;
