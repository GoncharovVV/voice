import { concat, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  catchError,
  // debounceTime,
  filter,
  take,
  map,
  mergeMap,
  switchMap
  // takeUntil
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { POST_LOGIN_REQUEST } from '../../utils/constants/authActions';
import { postLoginUrl, apiHeaderJson } from '../../utils/constants/apiUrls';
import { ApiMethods } from '../../utils/types';
import { updateLoginDetailsAction, onErrorLoginAction } from '../../store/actions/authActions';

const postLoginEpic = (action$: any) => {
  return action$.pipe(
    ofType(POST_LOGIN_REQUEST),
    take(1),
    filter(({ payload }) => {
      console.log(payload);
      return typeof payload === 'object'
    }),
    switchMap(({ payload }): any => {
      return concat(
        ajax({
          url: `${postLoginUrl}`,
          method: ApiMethods.POST,
          body: JSON.stringify(payload),
          headers: apiHeaderJson
        }).pipe(
          mergeMap((res: any) => {
            console.log(res);
            return of(res.response);
          }),
          map((x: any) => updateLoginDetailsAction(x)),
          catchError((err: any) => {
            console.log(err)
            return of(onErrorLoginAction());
          })
        )
      );
    })
  );
};
export default postLoginEpic;
