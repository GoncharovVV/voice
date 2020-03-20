import {
  GET_GENERAL_SETTINGS_REQUEST,
  CANCEL_GENERAL_SETTINGS_REQUEST,
  GET_GENERAL_SETTINGS_ERROR,
  POST_GENERAL_SETTINGS_REQUEST,
  POST_GENERAL_SETTINGS_ERROR,
  GET_GENERAL_SETTINGS_SUCCESS,
  CLEAR_GENERALSETTINGS
} from '../../utils/constants/mainActions';

export const getSettingsGeneralAction: any = () => ({
  type: GET_GENERAL_SETTINGS_REQUEST
});

export const onCancelGetSettingsGeneralAction: any = () => ({
  type: CANCEL_GENERAL_SETTINGS_REQUEST
});

export const onClearSettingsGeneralAction: any = () => ({
  type: CLEAR_GENERALSETTINGS
});

export const onErrorSettingsGeneralAction: any = (details: any) => ({
  type: GET_GENERAL_SETTINGS_ERROR,
  payload: details
});

export const postSettingsGeneralAction: any = (details: any) => ({
  type: POST_GENERAL_SETTINGS_REQUEST,
  payload: details
});

export const onErrorPostSettingsGeneralAction: any = (details: any) => ({
  type: POST_GENERAL_SETTINGS_ERROR,
  payload: details
});

export const updateSettingsGeneralAction: any = (details: any) => ({
  type: GET_GENERAL_SETTINGS_SUCCESS,
  payload: details
});
