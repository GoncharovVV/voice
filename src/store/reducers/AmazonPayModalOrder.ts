import { IAction } from '../../utils/authTypes';
import { GET_AMAZON_MODAL_ORDER_ERROR, GET_AMAZON_MODAL_ORDER_REQUEST, GET_AMAZON_MODAL_ORDER_SUCCESS } from '../../utils/constants/mainActions';
const amazonDetailsDefault = {
  details: null,
  isLoading: false,
  error: false
};
const updateAmazonPayModalOrder = (state: any, action: IAction): any => {
  if (!state) {
    return amazonDetailsDefault;
  }
  switch (action.type) {
    case GET_AMAZON_MODAL_ORDER_SUCCESS:
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case GET_AMAZON_MODAL_ORDER_REQUEST:
      return {
        details: null,
        isLoading: true,
        error: false
      };
    case GET_AMAZON_MODAL_ORDER_ERROR:
      return {
        details: null,
        isLoading: false,
        error: action.payload
      };
    default:
      return state.amazonPayModalOrder;
  }
};

export default updateAmazonPayModalOrder;
