import { IAction } from '../../utils/authTypes';
import { GET_VOICES_ERROR, GET_VOICES_REQUEST, GET_VOICES_SUCCESS } from '../../utils/constants/mainActions';
const voicesDefault = {
  details: null,
  isLoading: false,
  error: false
};
const updateVoices = (state: any, action: IAction): any => {
  if (!state) {
    return voicesDefault;
  }
  switch (action.type) {
    case GET_VOICES_SUCCESS:
      return {
        details: action.payload,
        isLoading: false,
        error: false
      };
    case GET_VOICES_REQUEST:
      return {
        details: null,
        isLoading: true,
        error: false
      };
    case GET_VOICES_ERROR:
      return {
        details: null,
        isLoading: false,
        error: action.payload
      };
    default:
      return state.voices;
  }
};

export default updateVoices;
