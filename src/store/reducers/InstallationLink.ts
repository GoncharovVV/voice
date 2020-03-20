import {
  GET_SHOPIFY_INSTALL_LINK_REQUEST,
  GET_SHOPIFY_INSTALL_LINK_ERROR,
  GET_SHOPIFY_INSTALL_LINK_SUCCESS
} from '../../utils/constants/authActions';

const updateInstallationLink = (state: any, action: any): any => {
  if (!state) {
    return {
      link: '',
      isLoading: false,
      error: {
        isError: false,
        errorText: ''
      }
    };
  }
  switch (action.type) {
    case GET_SHOPIFY_INSTALL_LINK_SUCCESS:
      return {
        link: action.payload,
        isLoading: false,
        error: {
          isError: false,
          errorText: ''
        }
      };
    case GET_SHOPIFY_INSTALL_LINK_REQUEST:
      return {
        link: '',
        isLoading: true,
        error: {
          isError: false,
          errorText: ''
        }
      };
    case GET_SHOPIFY_INSTALL_LINK_ERROR:
      return {
        link: '',
        isLoading: false,
        error: action.payload
      };
    default:
      return state.installationLink;
  }
};

export default updateInstallationLink;
