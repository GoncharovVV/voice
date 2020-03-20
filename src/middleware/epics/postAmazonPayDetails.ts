import { ofType } from 'redux-observable';
import { concat, Observable, of, throwError, from } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, filter, map, mergeMap, switchMap, debounceTime } from 'rxjs/operators';
import {
  updateAmazonPayDetailsAction,
  onErrorPostAmazonPayDetailsAction
} from '../../store/actions/amazonPayDetailsActions';
import { apiHeaderJson, postAmazonPayDetailsUrl } from '../../utils/constants/apiUrls';
import { POST_AMAZON_PAY_DETAILS_REQUEST } from '../../utils/constants/mainActions';
import { ApiMethods } from '../../utils/types';
import { onLogoutAction } from '../../store/actions/authActions';

const postAmazonPayDetails = (action$: Observable<any>) => {
  return action$.pipe(
    ofType(POST_AMAZON_PAY_DETAILS_REQUEST),
    debounceTime(500),
    filter(({ payload }) => typeof payload === 'object'),
    switchMap(({ payload }): any => {
      const { body, partnerKey } = payload;
      const _url = `${postAmazonPayDetailsUrl.replace(':partnerKey', partnerKey)}`;
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
            // console.log(x);
            return updateAmazonPayDetailsAction(x);
          }),
          catchError((err:any) => {
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorPostAmazonPayDetailsAction(true));
          })
        )
      );
    })
  );
};
export default postAmazonPayDetails;
