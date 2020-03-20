import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, filter, map, mergeMap, switchMap, take } from 'rxjs/operators';
import { onErrorShopifyCallbackAction, updateShopifyCallbackAction } from '../../store/actions/shopifyCallbackActions';
import { apiHeaderJson, getInstallCallbackUrl } from '../../utils/constants/apiUrls';
import { GET_SHOPIFY_CALLBACK_REQUEST } from '../../utils/constants/authActions';
import { ApiMethods } from '../../utils/types';
import { onLogoutAction } from '../../store/actions/authActions';

const getShopifyCallback = (action$: any) => {
  return action$.pipe(
    ofType(GET_SHOPIFY_CALLBACK_REQUEST),
    take(1),
    filter(({ payload }) => {
      return typeof payload === 'object';
    }),
    switchMap(({ payload }): any => {
      console.log(payload);
      const _url = `${getInstallCallbackUrl.replace(':partnerKey', payload.partnerKey)}${
        payload.query
      }`;
      console.log(_url);
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
          map((x: any) => {
            console.log(x);
            return updateShopifyCallbackAction(x);
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorShopifyCallbackAction(true));
          })
        )
      );
    })
  );
};
export default getShopifyCallback;
