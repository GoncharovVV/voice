import { IAction } from '../../utils/authTypes';
import {
  GET_EDIT_TOOL_SUCCESS,
  GET_EDIT_TOOL_REQUEST,
  GET_EDIT_TOOL_ERROR
} from '../../utils/constants/mainActions';
const defaultTool = {
  details: null,
  isLoading: false,
  error: false
};
const updateEditTool = (state: any, action: IAction): any => {
  if (!state) {
    return defaultTool;
  }
  switch (action.type) {
    case GET_EDIT_TOOL_SUCCESS:
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case GET_EDIT_TOOL_REQUEST:
      return {
        details: null,
        isLoading: true,
        error: false
      };
    case GET_EDIT_TOOL_ERROR:
      return {
        details: null,
        isLoading: false,
        error: action.payload
      };
    default:
      return state.editTool;
  }
};

export default updateEditTool;
