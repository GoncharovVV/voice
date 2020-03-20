import { IAction } from '../../utils/authTypes';
import {
  GET_HOME_SCREEN_SUCCESS,
  GET_HOME_SCREEN_REQUEST,
  GET_HOME_SCREEN_ERROR
} from '../../utils/constants/mainActions';

const homeDetailsDefault = {
  details: null,
  isLoading: false,
  error: false
};
const updateHomeScreenDetails = (state: any, action: IAction): any => {
  if (!state) {
    return homeDetailsDefault;
  }
  switch (action.type) {
    case GET_HOME_SCREEN_SUCCESS:
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case GET_HOME_SCREEN_REQUEST:
      return {
        details: null,
        isLoading: true,
        error: false
      };
    case GET_HOME_SCREEN_ERROR:
      return {
        details: null,
        isLoading: false,
        error: action.payload
      };
    default:
      return state.homeScreenDetails;
  }
};

export default updateHomeScreenDetails;
