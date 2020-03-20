import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, filter, map, mergeMap, switchMap } from 'rxjs/operators';
import {
  onErrorShopifyInstallLinkAction,
  updateShopifyInstallLinkAction,
  onLogoutAction
} from '../../store/actions/authActions';
import { apiHeaderJson, getShopifyInstallLinkUrl } from '../../utils/constants/apiUrls';
import { GET_SHOPIFY_INSTALL_LINK_REQUEST } from '../../utils/constants/authActions';
import { ApiMethods } from '../../utils/types';
import { resInstallLinkErrors } from '../../utils/constants/errors';

const getShopifyInstallLink = (action$: any) => {
  return action$.pipe(
    ofType(GET_SHOPIFY_INSTALL_LINK_REQUEST),
    filter(({ payload }) => {
      return typeof payload === 'object';
    }),
    switchMap(({ payload }): any => {
      console.log(payload);
      const _url = `${getShopifyInstallLinkUrl.replace(':partnerKey', payload.partnerKey)}?shop=${
        payload.shop
      }&callback=${payload.callback}`;
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
            if (resInstallLinkErrors[res.status]) {
              return throwError(resInstallLinkErrors[res.status]);
            }
            return from(res.json());
          }),
          map((x: any) => {
            console.log(x);
            return updateShopifyInstallLinkAction(x.installationLink);
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(
              onErrorShopifyInstallLinkAction({
                isError: true,
                errorText: err
              })
            );
          })
        )
      );
    })
  );
};
export default getShopifyInstallLink;
