import {
  GET_VOICES_REQUEST,
  GET_VOICES_SUCCESS,
  GET_VOICES_ERROR,
  CANCEL_VOICES_REQUEST,
  POST_VOICES_REQUEST,
  CANCEL_POST_VOICES_REQUEST
} from '../../utils/constants/mainActions';

export const getVoicesAction = () => ({
  type: GET_VOICES_REQUEST
});

export const onCancelGetVoicesAction:any = () => ({
  type: CANCEL_VOICES_REQUEST
});

export const onErrorGetVoicesAction = (details: any) => ({
  type: GET_VOICES_ERROR,
  payload: details
});

export const updateVoicesAction = (details: any) => ({
  type: GET_VOICES_SUCCESS,
  payload: details
});

export const postVoicesAction = (details: any) => ({
  type: POST_VOICES_REQUEST,
  payload: details
});

export const onCancelPostVoicesAction:any = () => ({
  type: CANCEL_POST_VOICES_REQUEST
});