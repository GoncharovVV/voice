import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, filter, map, mergeMap, switchMap, take } from 'rxjs/operators';
import {
  onErrorGetUserDetailsAction,
  updateLoginDetailsAction,
  onLogoutAction
} from '../../store/actions/authActions';
import { apiHeaderJson, getUserDetailsUrl } from '../../utils/constants/apiUrls';
import { GET_USER_DETAILS_REQUEST } from '../../utils/constants/authActions';
import { ApiMethods } from '../../utils/types';

const getUserDetails = (action$: any) => {
  return action$.pipe(
    ofType(GET_USER_DETAILS_REQUEST),
    take(1),
    filter(({ payload }) => {
      return typeof payload === 'string';
    }),
    switchMap(({ payload }): any => {
      const _url = `${getUserDetailsUrl.replace(':partnerKey', payload)}`;
      return concat(
        fromFetch(_url, {
          method: ApiMethods.GET,
          credentials: 'include',
          headers: apiHeaderJson
        }).pipe(
          mergeMap((res: any) => {
            if(res.status === 401 || res.status === 400) {
              return throwError('logout');
            }
            if (!res.ok) {
              return throwError('error');
            }
            return from(res.json());
          }),
          map((x: any) => {
            return updateLoginDetailsAction(x);
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorGetUserDetailsAction());
          })
        )
      );
    })
  );
};
export default getUserDetails;
