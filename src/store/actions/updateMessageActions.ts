import {
  POST_UPDATE_MESSAGE_SUCCESS,
  POST_UPDATE_MESSAGE_ERROR,
  POST_UPDATE_MESSAGE_REQUEST
} from '../../utils/constants/mainActions';

export const postUpdateMessageAction: any = (details: any) => ({
  type: POST_UPDATE_MESSAGE_REQUEST,
  payload: details
});

export const onErrorPostUpdateMessageAction: any = (details: any) => ({
  type: POST_UPDATE_MESSAGE_ERROR,
  payload: details
});

export const updateUpdateMessageAction: any = (details: any) => ({
  type: POST_UPDATE_MESSAGE_SUCCESS,
  payload: details
});
