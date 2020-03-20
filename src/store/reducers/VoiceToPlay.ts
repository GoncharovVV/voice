import { IAction } from '../../utils/authTypes';
import { VOICE_PLAY, VOICE_STOP } from '../../utils/constants/mainActions';
const voiceToPlayDefault = {
  playUrl: '',
  type: '',
  isPlaying: false
};
const updateVoiceToPlay = (state: any, action: IAction): any => {
  if (!state) {
    return voiceToPlayDefault;
  }
  switch (action.type) {
    case VOICE_PLAY:
      return {
        ...action.payload,
        isPlaying: true
      };
    case VOICE_STOP:
      return {
        ...voiceToPlayDefault
      };
    default:
      return state.vioceToPlay;
  }
};

export default updateVoiceToPlay;
