import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, mergeMap, switchMap, pluck, takeUntil, withLatestFrom } from 'rxjs/operators';
import { apiHeaderJson, getBasicDialogueMessageUrl } from '../../utils/constants/apiUrls';
import { ApiMethods } from '../../utils/types';
import { GET_BASIC_DIALOGUE_MESSAGES_REQUEST, CANCEL_BASIC_DIALOGUE_MESSAGES_REQUEST } from '../../utils/constants/mainActions';
import {
  updateBasicDialogueMessagesAction,
  onErrorGetBasicDialogueMessagesAction
} from '../../store/actions/basicDialogueMessagesActions';
import { onLogoutAction } from '../../store/actions/authActions';

const getBasicDialogueMessage = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(GET_BASIC_DIALOGUE_MESSAGES_REQUEST),
    withLatestFrom(state$.pipe(pluck('loginDetails', 'details', 'partnerKey'))),
    switchMap(([, partnerKey]): any => {
      const _url = `${getBasicDialogueMessageUrl.replace(':partnerKey', partnerKey)}`;
      return concat(
        fromFetch(_url, {
          method: ApiMethods.GET,
          credentials: 'include',
          headers: apiHeaderJson
        }).pipe(
          takeUntil(action$.pipe(ofType(CANCEL_BASIC_DIALOGUE_MESSAGES_REQUEST))),
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
          pluck('messages'),
          map((x: any) => {
            console.log(x);
            return updateBasicDialogueMessagesAction(x);
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorGetBasicDialogueMessagesAction(true));
          })
        )
      );
    })
  );
};
export default getBasicDialogueMessage;
