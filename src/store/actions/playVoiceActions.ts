import { VOICE_PLAY, VOICE_STOP } from "../../utils/constants/mainActions";

export const playVoiceAction: any = (details: any) => ({
  type: VOICE_PLAY,
  payload: details
});

export const stopPlayingAction: any = () => ({
  type: VOICE_STOP,
});