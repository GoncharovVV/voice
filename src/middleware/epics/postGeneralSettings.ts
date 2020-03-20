import { ofType } from 'redux-observable';
import { concat, Observable, of, throwError, from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, mergeMap, switchMap,  takeUntil, withLatestFrom, pluck, debounceTime } from 'rxjs/operators';
import { apiHeaderJson, postGeneralSettingsUrl } from '../../utils/constants/apiUrls';
import { POST_GENERAL_SETTINGS_REQUEST, CANCEL_GENERAL_SETTINGS_REQUEST } from '../../utils/constants/mainActions';
import { ApiMethods } from '../../utils/types';
import { onLogoutAction } from '../../store/actions/authActions';
import { updateSettingsGeneralAction, onErrorSettingsGeneralAction } from '../../store/actions/generalSettingsActions';

const postGeneralSettings = (action$: Observable<any>, state$: any) => {
  return action$.pipe(
    ofType(POST_GENERAL_SETTINGS_REQUEST),
    debounceTime(500),
    withLatestFrom(state$.pipe(pluck('loginDetails', 'details', 'partnerKey'))),
    switchMap(([data, partnerKey]): any => {
      const _url = `${postGeneralSettingsUrl.replace(':partnerKey', (partnerKey as string))}`;
      const { navTo = null, ...body } = data.payload;
      return concat(
        fromFetch(_url, {
          method: ApiMethods.POST,
          credentials: 'include',
          body: JSON.stringify(body),
          headers: apiHeaderJson
        }).pipe(
          takeUntil(action$.pipe(ofType(CANCEL_GENERAL_SETTINGS_REQUEST))),
          mergeMap((res: any) => {
            console.log(res);
            if(res.status === 401) {
              return throwError('logout');
            }
            if(res.status === 400) {
              return from(res.json());
            }
            if (!res.ok) {
              return throwError('error');
            }
            return from(res.json());
          }),
          map((x: any) => {
            console.log(x);
            if (x.message) return onErrorSettingsGeneralAction(x);
            if (navTo) return updateSettingsGeneralAction({...x, navTo});
            return updateSettingsGeneralAction(x);
          }),
          catchError((err:any) => {
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorSettingsGeneralAction(true));
          })
        )
      );
    })
  );
};
export default postGeneralSettings;
