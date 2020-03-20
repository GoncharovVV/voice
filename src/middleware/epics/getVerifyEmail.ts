import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, filter, map, mergeMap, switchMap, take } from 'rxjs/operators';
import {
  onErrorVerifyEmailAction,
  updateVerifyEmailAction,

} from '../../store/actions/authActions';
import { apiHeaderJson, getVerifyEmailUrl } from '../../utils/constants/apiUrls';
import { GET_VERIFY_EMAIL_REQUEST } from '../../utils/constants/authActions';
import { ApiMethods } from '../../utils/types';

const getVerifyEmail = (action$: any) => {
  return action$.pipe(
    ofType(GET_VERIFY_EMAIL_REQUEST),
    take(1),
    filter(({ payload }) => {
      console.log(payload);
      return typeof payload === 'string';
    }),
    switchMap(({ payload }): any => {
      console.log(payload);
      const _url = `${getVerifyEmailUrl}${payload}`;

      console.log(_url);
      return concat(
        fromFetch(_url, {
          method: ApiMethods.GET,
          headers: apiHeaderJson
        }).pipe(
          mergeMap((res: any) => {
            console.log(res);
            if (!res.ok) {
              return throwError('error');
            }
            return from(res.json());
          }),
          map((x: any) => {
            console.log(x);
            return updateVerifyEmailAction(x);
          }),
          catchError((err: any) => {
            console.log(err);
            return of(onErrorVerifyEmailAction());
          })
        )
      );
    })
  );
};
export default getVerifyEmail;
