import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, mergeMap, pluck, switchMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import { onErrorGetAmazonPayDetailsAction, updateAmazonPayDetailsAction } from '../../store/actions/amazonPayDetailsActions';
import { apiHeaderJson, getAmazonPayDetailsUrl } from '../../utils/constants/apiUrls';
import { CANCEL_AMAZON_PAY_DETAILS_REQUEST, GET_AMAZON_PAY_DETAILS_REQUEST } from '../../utils/constants/mainActions';
import { ApiMethods } from '../../utils/types';
import { onLogoutAction } from '../../store/actions/authActions';

const getAmazonPayDetails = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(GET_AMAZON_PAY_DETAILS_REQUEST),
    withLatestFrom(state$.pipe(pluck('loginDetails', 'details', 'partnerKey'))),
    switchMap(([, partnerKey]): any => {
      const _url = `${getAmazonPayDetailsUrl.replace(':partnerKey', partnerKey)}`;
      return concat(
        fromFetch(_url, {
          method: ApiMethods.GET,
          credentials: 'include',
          headers: apiHeaderJson
        }).pipe(
          takeUntil(action$.pipe(ofType(CANCEL_AMAZON_PAY_DETAILS_REQUEST))),
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
            return updateAmazonPayDetailsAction(x);
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorGetAmazonPayDetailsAction(true));
          })
        )
      );
    })
  );
};
export default getAmazonPayDetails;
