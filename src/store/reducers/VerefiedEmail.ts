import {
  GET_VERIFY_EMAIL_SUCCESS,
  GET_VERIFY_EMAIL_ERROR,
  GET_VERIFY_EMAIL_REQUEST
} from '../../utils/constants/authActions';

const updateVerifiedEmail = (state: any, action: any): any => {

  if (!state) {
    return {
      result: {
        email: '',
        status: ''
      },
      isLoading: false,
      error: false
    };
  }
  switch (action.type) {
    case GET_VERIFY_EMAIL_SUCCESS:
      return {
        result: action.payload,
        isLoading: false,
        error:  false,
      };
    case GET_VERIFY_EMAIL_REQUEST:
      return {
        result: {
          email: '',
          status: ''
        },
        isLoading: true,
        error: false
      };
    case GET_VERIFY_EMAIL_ERROR:
      return {
        result: {
          email: '',
          status: ''
        },
        isLoading: false,
        error: true
      };
    default:
      return state.verefiedEmail;
  }
};

export default updateVerifiedEmail;
