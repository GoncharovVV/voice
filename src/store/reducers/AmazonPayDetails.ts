import { IAction } from '../../utils/authTypes';
import { GET_AMAZON_PAY_DETAILS_ERROR, GET_AMAZON_PAY_DETAILS_REQUEST, GET_AMAZON_PAY_DETAILS_SUCCESS, POST_AMAZON_PAY_DETAILS_ERROR } from '../../utils/constants/mainActions';
const amazonDetailsDefault = {
  details: null,
  isLoading: false,
  error: false
};
const updateAmazonPayDetails = (state: any, action: IAction): any => {
  if (!state) {
    return amazonDetailsDefault;
  }
  switch (action.type) {
    case GET_AMAZON_PAY_DETAILS_SUCCESS:
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case GET_AMAZON_PAY_DETAILS_REQUEST:
      return {
        details: null,
        isLoading: true,
        error: false
      };
    case GET_AMAZON_PAY_DETAILS_ERROR:
      return {
        details: null,
        isLoading: false,
        error: action.payload
      };
    case POST_AMAZON_PAY_DETAILS_ERROR:
      return {
        details: null,
        isLoading: false,
        error: action.payload
      };
    default:
      return state.amazonPayDetails;
  }
};

export default updateAmazonPayDetails;
