import {
  GET_BASIC_DIALOGUE_MESSAGES_REQUEST,
  GET_BASIC_DIALOGUE_MESSAGES_ERROR,
  GET_BASIC_DIALOGUE_MESSAGES_SUCCESS,
  CANCEL_BASIC_DIALOGUE_MESSAGES_REQUEST
} from '../../utils/constants/mainActions';

export const getBasicDialogueMessagesAction: any = () => ({
  type: GET_BASIC_DIALOGUE_MESSAGES_REQUEST,
});

export const onErrorGetBasicDialogueMessagesAction: any = (details: any) => ({
  type: GET_BASIC_DIALOGUE_MESSAGES_ERROR,
  payload: details
});

export const updateBasicDialogueMessagesAction: any = (details: any) => ({
  type: GET_BASIC_DIALOGUE_MESSAGES_SUCCESS,
  payload: details
});
export const onCancelGetBasicDialogueMessagesAction: any = () => ({
  type: CANCEL_BASIC_DIALOGUE_MESSAGES_REQUEST,
});