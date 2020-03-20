import { IAction } from '../../utils/authTypes';
import {
  UPDATE_CURRENT_TOOL,
} from '../../utils/constants/mainActions';

const updateCurrentTool = (state: any, action: IAction): any => {
  if (!state) {
    return {
      value: '',
      selected: false
    };
  }
  switch (action.type) {
    case UPDATE_CURRENT_TOOL:
      return action.payload;
    default:
      return state.toolType;
  }
};

export default updateCurrentTool;
