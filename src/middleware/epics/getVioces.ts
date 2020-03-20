import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, mergeMap, pluck, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';

import { apiHeaderJson, getVoicesUrl } from '../../utils/constants/apiUrls';
import { CANCEL_VOICES_REQUEST, GET_VOICES_REQUEST } from '../../utils/constants/mainActions';
import { ApiMethods } from '../../utils/types';
import { onLogoutAction } from '../../store/actions/authActions';
import { updateVoicesAction, onErrorGetVoicesAction } from '../../store/actions/voicesActions';

const getVioces = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(GET_VOICES_REQUEST),
    withLatestFrom(state$.pipe(pluck('loginDetails', 'details', 'partnerKey'))),
    switchMap(([, partnerKey]): any => {
      const _url = `${getVoicesUrl.replace(':partnerKey', partnerKey)}`;
      return concat(
        fromFetch(_url, {
          method: ApiMethods.GET,
          credentials: 'include',
          headers: apiHeaderJson
        }).pipe(
          takeUntil(action$.pipe(ofType(CANCEL_VOICES_REQUEST))),
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
          pluck('voiceTypes'),
          map((x: any) => {
            return updateVoicesAction(x);
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorGetVoicesAction(true));
          })
        )
      );
    })
  );
};
export default getVioces;
