import {
  GET_EDIT_TOOL_REQUEST,
  GET_EDIT_TOOL_ERROR,
  CANCEL_GET_EDIT_TOOL_REQUEST,
  GET_EDIT_TOOL_SUCCESS,
  POST_EDIT_TOOL_TOOLS
} from '../../utils/constants/mainActions';

export const getEditToolAction: any = () => ({
  type: GET_EDIT_TOOL_REQUEST
});

export const postEditToolAction: any = () => ({
  type: POST_EDIT_TOOL_TOOLS
});

export const onErrorGetEditToolAction: any = (details: any) => ({
  type: GET_EDIT_TOOL_ERROR,
  payload: details
});

export const updateEditToolAction: any = (details: any) => ({
  type: GET_EDIT_TOOL_SUCCESS,
  payload: details
});

export const onCancelGetEditToolAction: any = () => ({
  type: CANCEL_GET_EDIT_TOOL_REQUEST
});
