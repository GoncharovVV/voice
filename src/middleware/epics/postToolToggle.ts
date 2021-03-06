import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import {
  catchError,
  map,
  mergeMap,
  switchMap,
  takeUntil,
  withLatestFrom
} from 'rxjs/operators';

import { apiHeaderJson, postToolToggleUrl } from '../../utils/constants/apiUrls';
import { POST_TOGGLE_CONVERSATION_TOOLS, CANCEL_CONVERSATION_TOOLS_REQUEST } from '../../utils/constants/mainActions';
import { ApiMethods } from '../../utils/types';
import { onLogoutAction } from '../../store/actions/authActions';
import { updateConversationToolsAction, onErrorGetConversationToolsAction } from '../../store/actions/conversationToolsActions';
import { transformSelectedArr, transformAvaliableArr } from '../../utils/helpers';

const postToolToggle = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(POST_TOGGLE_CONVERSATION_TOOLS),
    withLatestFrom(state$),
    switchMap(([data, state]): any => {
      const { loginDetails, toolType } = state;
      let value = '';
      let selected = '';
      if (data && data.payload) {
        value = data.payload.value;
        selected = data.payload.selected;
      }
      else {
        value = toolType.value;
        selected = toolType.selected;
      }
      const _url = `${postToolToggleUrl.replace(':partnerKey', loginDetails.details.partnerKey)}`;
      return concat(
        fromFetch(_url, {
          method: ApiMethods.POST,
          credentials: 'include',
          body: JSON.stringify({ type: value, enabled: !selected }),
          headers: apiHeaderJson
        }).pipe(
          takeUntil(action$.pipe(ofType(CANCEL_CONVERSATION_TOOLS_REQUEST))),
          mergeMap((res: any) => {
            // console.log(res);
            if (res.status === 401 || res.status === 400) {
              return throwError('logout');
            }
            if (!res.ok) {
              return throwError('error');
            }
            return from(res.json());
          }),
          map((x: any) => {
            // console.log(x);
            const selected = transformSelectedArr(x.selected);
            const available = transformAvaliableArr(x.available);
            return updateConversationToolsAction({selected, available, ...x});
          }),
          catchError((err: any) => {
            // console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorGetConversationToolsAction(true));
          })
        )
      );
    })
  );
};
export default postToolToggle;
