import { IAction } from '../../utils/authTypes';
import { GET_GENERAL_SETTINGS_ERROR, GET_GENERAL_SETTINGS_REQUEST, GET_GENERAL_SETTINGS_SUCCESS, POST_GENERAL_SETTINGS_ERROR, CLEAR_GENERALSETTINGS, POST_GENERAL_UPLOAD_LOGO_REQUEST } from '../../utils/constants/mainActions';
const generalSettingsDefault = {
  details: null,
  isLoading: false,
  error: false
};
const updateGeneralSettings = (state: any, action: IAction): any => {
  if (!state) {
    return generalSettingsDefault;
  }
  switch (action.type) {
    case GET_GENERAL_SETTINGS_SUCCESS:
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case GET_GENERAL_SETTINGS_REQUEST:
      return {
        details: null,
        isLoading: true,
        error: false
      };
    case POST_GENERAL_UPLOAD_LOGO_REQUEST:
      return {
        ...state.generalSettings,
        isLoading: true,
      };
    case GET_GENERAL_SETTINGS_ERROR:
      return {
        details: {...state.generalSettings.details},
        isLoading: false,
        error: action.payload
      };
    case POST_GENERAL_SETTINGS_ERROR:
      return {
        details: null,
        isLoading: false,
        error: action.payload
      };
    case CLEAR_GENERALSETTINGS:
      return generalSettingsDefault
    default:
      return state.generalSettings;
  }
};

export default updateGeneralSettings;
