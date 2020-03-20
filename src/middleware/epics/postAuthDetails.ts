import { Observable, concat, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  catchError,
  // debounceTime,
  filter,
  take,
  // map,
  mergeMap,
  switchMap
  // takeUntil
} from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { POST_DETAILS_FIRST_REQUEST } from '../../utils/constants/authActions';
import { postDetailsFirstUrl, apiHeaderJson } from '../../utils/constants/apiUrls';
import { ApiMethods } from '../../utils/types';

const postAuthDetailsEpic = (action$: Observable<any>) => {
  return action$.pipe(
    ofType(POST_DETAILS_FIRST_REQUEST),
    take(1),
    filter(({ payload }) => typeof payload === 'object'),
    switchMap(({ payload }): any => {
      return concat(
        ajax({
          url: `${postDetailsFirstUrl}`,
          method: ApiMethods.POST,
          body: JSON.stringify(payload),
          headers: apiHeaderJson
        }).pipe(
          mergeMap((val: any) => {
            console.log(val);
            return of(val);
          }),
          catchError(() => {
            return of({ error: true });
          })
        )
      );
    })
  );
};
export default postAuthDetailsEpic;
