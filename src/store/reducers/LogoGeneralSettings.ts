import { POST_GENERAL_UPLOAD_LOGO_SUCCESS, POST_GENERAL_UPLOAD_LOGO_REQUEST, POST_GENERAL_UPLOAD_LOGO_ERROR } from "../../utils/constants/mainActions";

const defaultLogoDetails = {
  logo: null,
  isLoading: true,
  error: false
};
const updateLogoGeneralSettings = (state: any, action: any): any => {
  if (!state) {
    return defaultLogoDetails;
  }
  switch (action.type) {
    case POST_GENERAL_UPLOAD_LOGO_SUCCESS:
      return {
        logo: action.payload,
        isLoading: false,
        error: false
      };
    case POST_GENERAL_UPLOAD_LOGO_REQUEST:
      return {
        isLoading: true,
        logo: null,
        error: false
      };
    case POST_GENERAL_UPLOAD_LOGO_ERROR:
      return {
        isLoading: false,
        logo: null,
        error: true
      };
    default:
      return state.logoGeneralSettings;
  }
};

export default updateLogoGeneralSettings;
