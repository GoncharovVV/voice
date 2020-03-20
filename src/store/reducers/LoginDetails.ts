import {
  POST_LOGIN_REQUEST,
  POST_LOGIN_ERROR,
  POST_LOGIN_SUCCESS,
  GET_USER_DETAILS_REQUEST,
  GET_LOGOUT
} from '../../utils/constants/authActions';
const defaultLoginDetails = {
  details: {},
  isLoading: true,
  error: false
};
const updateLoginDetails = (state: any, action: any): any => {
  if (!state) {
    return defaultLoginDetails;
  }
  switch (action.type) {
    case POST_LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case POST_LOGIN_REQUEST:
      return {
        isLoading: true,
        details: {},
        error: false
      };
    case GET_USER_DETAILS_REQUEST:
      return {
        isLoading: true,
        details: {},
        error: false
      };
    case POST_LOGIN_ERROR:
      return {
        isLoading: false,
        details: action.payload,
        error: true
      };
    case GET_LOGOUT:
      return {
        isLoading: false,
        details: {},
        error: false
      };
    default:
      return state.loginDetails;
  }
};

export default updateLoginDetails;
