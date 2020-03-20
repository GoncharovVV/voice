import {
  GET_HOME_SCREEN_REQUEST,
  GET_HOME_SCREEN_SUCCESS,
  GET_HOME_SCREEN_ERROR,
  CANCEL_HOME_SCREEN_REQUEST
} from '../../utils/constants/mainActions';

export const getHomeScreenDetailsAction = () => ({
  type: GET_HOME_SCREEN_REQUEST
});

export const onCancelGetHomeScreenDetailsAction:any = () => ({
  type: CANCEL_HOME_SCREEN_REQUEST
});

export const onErrorGetHomeScreenDetailsAction = (details: any) => ({
  type: GET_HOME_SCREEN_ERROR,
  payload: details
});

export const updateHomeScreenDetailsAction = (details: any) => ({
  type: GET_HOME_SCREEN_SUCCESS,
  payload: details
});
