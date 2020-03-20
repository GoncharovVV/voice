import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  // pluck,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';
import { apiHeaderJson, getEditToolUrl } from '../../utils/constants/apiUrls';
import { ApiMethods } from '../../utils/types';
import {
  GET_EDIT_TOOL_REQUEST,
  CANCEL_GET_EDIT_TOOL_REQUEST
} from '../../utils/constants/mainActions';
import { onLogoutAction } from '../../store/actions/authActions';
import {
  updateEditToolAction,
  onErrorGetEditToolAction
} from '../../store/actions/editToolActions';

const getEditTool = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(GET_EDIT_TOOL_REQUEST),
    withLatestFrom(state$),
    switchMap(([, state]): any => {
      const { loginDetails, toolType } = state;
      let _url = `${getEditToolUrl.replace(':partnerKey', loginDetails.details.partnerKey)}`;
      _url = _url.replace(':toolName', toolType.value);
      return concat(
        fromFetch(_url, {
          method: ApiMethods.GET,
          credentials: 'include',
          headers: apiHeaderJson
        }).pipe(
          takeUntil(action$.pipe(ofType(CANCEL_GET_EDIT_TOOL_REQUEST))),
          mergeMap((res: any) => {
            console.log(res);
            if (res.status === 401) {
              return throwError('logout');
            }
            else if (res.status === 400) {
              return from(res.json());
            }
            if (!res.ok) {
              return throwError('error');
            }
            return from(res.json());
          }),
          map((x: any) => {
            console.log(x);
            if (x.message) {
              return onErrorGetEditToolAction(x.message);
            }
            return updateEditToolAction(x);
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorGetEditToolAction(true));
          })
        )
      );
    })
  );
};
export default getEditTool;
