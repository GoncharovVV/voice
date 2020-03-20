import { ofType } from 'redux-observable';
import { concat, from, of, throwError } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, mergeMap, switchMap, pluck, takeUntil, withLatestFrom } from 'rxjs/operators';
import { apiHeaderJson, getConversationToolsUrl } from '../../utils/constants/apiUrls';
import { ApiMethods } from '../../utils/types';
import { GET_CONVERSATION_TOOLS_REQUEST, CANCEL_CONVERSATION_TOOLS_REQUEST } from '../../utils/constants/mainActions';
import { onLogoutAction } from '../../store/actions/authActions';
import { updateConversationToolsAction, onErrorGetConversationToolsAction } from '../../store/actions/conversationToolsActions';
import { transformSelectedArr, transformAvaliableArr } from '../../utils/helpers';

const getConversationTools = (action$: any, state$: any) => {
  return action$.pipe(
    ofType(GET_CONVERSATION_TOOLS_REQUEST),
    withLatestFrom(state$.pipe(pluck('loginDetails', 'details', 'partnerKey'))),
    switchMap(([, partnerKey]): any => {
      const _url = `${getConversationToolsUrl.replace(':partnerKey', partnerKey)}`;
      return concat(
        fromFetch(_url, {
          method: ApiMethods.GET,
          credentials: 'include',
          headers: apiHeaderJson
        }).pipe(
          takeUntil(action$.pipe(ofType(CANCEL_CONVERSATION_TOOLS_REQUEST))),
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
            const selected = transformSelectedArr(x.selected);
            const available = transformAvaliableArr(x.available);
            return updateConversationToolsAction({selected, available, ...x});
          }),
          catchError((err: any) => {
            console.log(err);
            if (err === 'logout') return of(onLogoutAction());
            return of(onErrorGetConversationToolsAction(true));
          })
        )
      );
    })
  );
};
export default getConversationTools;
