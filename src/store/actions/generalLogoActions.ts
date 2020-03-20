import {
  POST_GENERAL_UPLOAD_LOGO_REQUEST,
  POST_GENERAL_UPLOAD_LOGO_ERROR,
  POST_GENERAL_UPLOAD_LOGO_SUCCESS,
  CANCEL_POST_GENERAL_UPLOAD_LOGO_REQUEST
} from '../../utils/constants/mainActions';

export const postGeneralUploadLogoAction: any = (details: any) => ({
  type: POST_GENERAL_UPLOAD_LOGO_REQUEST,
  payload: details
}); 

export const onErrorPostGeneralUploadLogoAction: any = () => ({
  type: POST_GENERAL_UPLOAD_LOGO_ERROR
});

export const updateGeneralUploadLogoAction: any = (details: any) => ({
  type: POST_GENERAL_UPLOAD_LOGO_SUCCESS,
  payload: details
});

export const onCancelPostGeneralUploadLogoAction: any = () => ({
  type: CANCEL_POST_GENERAL_UPLOAD_LOGO_REQUEST
});
