import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, mergeMap, pluck, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';

import { postGeneralUploadLogoUrl } from '../../utils/constants/apiUrls';
import { CANCEL_POST_GENERAL_UPLOAD_LOGO_REQUEST, POST_GENERAL_UPLOAD_LOGO_REQUEST } from '../../utils/constants/mainActions';
import { ApiMethods } from '../../utils/types';
import { onLogoutAction } from '../../store/actions/authActions';
import { updateSettingsGeneralAction, onErrorSettingsGeneralAction } from '../../store/actions/generalSettingsActions';

const postGeneralUploadLogo = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(POST_GENERAL_UPLOAD_LOGO_REQUEST),
    withLatestFrom(state$.pipe(pluck('loginDetails', 'details', 'partnerKey'))),
    switchMap(([data, partnerKey]): any => {
      const _url = `${postGeneralUploadLogoUrl.replace(':partnerKey', partnerKey)}`;
      const formData = new FormData();
      formData.append('picture', data.payload);
      return concat(
        fromFetch(_url, {
          method: ApiMethods.POST,
          credentials: 'include',
          body: formData,
        }).pipe(
          takeUntil(action$.pipe(ofType(CANCEL_POST_GENERAL_UPLOAD_LOGO_REQUEST))),
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
            const prefix = new Date().getTime();
            return updateSettingsGeneralAction({ ...x, logoUrl: `${x.logoUrl}?${prefix}`});
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorSettingsGeneralAction(true));
          })
        )
      );
    })
  );
};
export default postGeneralUploadLogo;
