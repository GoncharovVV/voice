import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, filter, map, mergeMap, switchMap, take, pluck } from 'rxjs/operators';
import { apiHeaderJson, getAmazonPayModalOrderUrl } from '../../utils/constants/apiUrls';
import { ApiMethods } from '../../utils/types';
import { GET_AMAZON_MODAL_ORDER_REQUEST } from '../../utils/constants/mainActions';
import {
  updateAmazonPayModalOrderAction,
  onErrorGetAmazonPayModalOrderAction
} from '../../store/actions/amazonPayModalOrderActions';
import { onLogoutAction } from '../../store/actions/authActions';

const getAmazonPayModalOrder = (action$: any) => {
  return action$.pipe(
    ofType(GET_AMAZON_MODAL_ORDER_REQUEST),
    take(1),
    filter(({ payload }) => {
      console.log(payload);
      return typeof payload === 'string'
    }),
    switchMap(({ payload }): any => {
      const _url = `${getAmazonPayModalOrderUrl.replace(':partnerKey', payload)}`;
      return concat(
        fromFetch(_url, {
          method: ApiMethods.GET,
          credentials: 'include',
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
          pluck('line'),
          map((x: any) => {
            console.log(x);
            return updateAmazonPayModalOrderAction(x);
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorGetAmazonPayModalOrderAction(true));
          })
        )
      );
    })
  );
};
export default getAmazonPayModalOrder;
