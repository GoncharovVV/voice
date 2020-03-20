import {
  GET_CONVERSATION_TOOLS_REQUEST,
  GET_CONVERSATION_TOOLS_ERROR,
  GET_CONVERSATION_TOOLS_SUCCESS,
  CANCEL_CONVERSATION_TOOLS_REQUEST,
  POST_TOGGLE_CONVERSATION_TOOLS,
  UPDATE_CURRENT_TOOL
} from '../../utils/constants/mainActions';
import { IConversationTools } from '../../utils/types';

export const getConversationToolsAction: any = () => ({
  type: GET_CONVERSATION_TOOLS_REQUEST
});

export const postToggleConversationToolAction: any = (details: any = null) => ({
  type: POST_TOGGLE_CONVERSATION_TOOLS,
  payload: details
});

export const onErrorGetConversationToolsAction: any = (details: any) => ({
  type: GET_CONVERSATION_TOOLS_ERROR,
  payload: details
});

export const updateConversationToolsAction: any = (details: IConversationTools) => ({
  type: GET_CONVERSATION_TOOLS_SUCCESS,
  payload: details
});

export const onCancelGetConversationToolsAction: any = () => ({
  type: CANCEL_CONVERSATION_TOOLS_REQUEST
});

export const onUpdateCurrentToolAction: any = (toolType: any) => ({
  type: UPDATE_CURRENT_TOOL,
  payload: toolType
});

