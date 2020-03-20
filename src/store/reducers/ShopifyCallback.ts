import {
  GET_SHOPIFY_CALLBACK_REQUEST,
  GET_SHOPIFY_CALLBACK_ERROR,
  GET_SHOPIFY_CALLBACK_SUCCESS
} from '../../utils/constants/authActions';

const updateShopifyCallback = (state: any, action: any): any => {
  if (!state) {
    return {
      data: null,
      // data:{ numOfCategories: 20,
      // numOfProducts: 30 },
      isLoading: false,
      error: false
    };
  }
  switch (action.type) {
    case GET_SHOPIFY_CALLBACK_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: false
      };
    case GET_SHOPIFY_CALLBACK_REQUEST:
      return {
        data: null,
        isLoading: true,
        error: false
      };
    case GET_SHOPIFY_CALLBACK_ERROR:
      return {
        data: null,
        isLoading: false,
        error: true
      };
    default:
      return state.shopifyCallback;
  }
};

export default updateShopifyCallback;
