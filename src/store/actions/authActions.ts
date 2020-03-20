import {
  PARTNER_KEY_UPDATED,
  // POST_LOGIN_REQUEST,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_ERROR,
  GET_SHOPIFY_INSTALL_LINK_REQUEST,
  GET_SHOPIFY_INSTALL_LINK_ERROR,
  GET_SHOPIFY_INSTALL_LINK_SUCCESS,
  GET_USER_DETAILS_REQUEST,
  GET_VERIFY_EMAIL_REQUEST,
  GET_VERIFY_EMAIL_ERROR,
  GET_VERIFY_EMAIL_SUCCESS,
  GET_LOGOUT
} from '../../utils/constants/authActions';
import {
  ISetPartnerKey
  // IPostLogin
} from './types';
// import { ILogin } from '../../utils/authTypes';

export const setPartnerKeyAction: ISetPartnerKey = (key: string) => ({
  type: PARTNER_KEY_UPDATED,
  payload: key
});

// export const postLogin: IPostLogin = (details: ILogin) => ({
//   type: POST_LOGIN_REQUEST,
//   payload: details
// });

export const onErrorLoginAction: any = () => ({
  type: POST_LOGIN_ERROR,
  payload: {}
});

export const onLogoutAction: any = () => ({
  type: GET_LOGOUT,
});

export const updateLoginDetailsAction: any = (details: any) => ({
  type: POST_LOGIN_SUCCESS,
  payload: details
});

export const getUserDetailsAction: any = (details: any) => ({
  type: GET_USER_DETAILS_REQUEST,
  payload: details
});

export const onErrorGetUserDetailsAction: any = () => ({
  type: POST_LOGIN_ERROR,
  payload: {}
});


export const getShopifyInstallLinkAction: any = (details: any) => ({
  type: GET_SHOPIFY_INSTALL_LINK_REQUEST,
  payload: details
});

export const onErrorShopifyInstallLinkAction: any = (details: any) => ({
  type: GET_SHOPIFY_INSTALL_LINK_ERROR,
  payload: details
});

export const updateShopifyInstallLinkAction: any = (details: string) => ({
  type: GET_SHOPIFY_INSTALL_LINK_SUCCESS,
  payload: details
});

export const getVerifyEmailAction: any = (details: any) => ({
  type: GET_VERIFY_EMAIL_REQUEST,
  payload: details
});

export const onErrorVerifyEmailAction: any = () => ({
  type: GET_VERIFY_EMAIL_ERROR,
  payload: ''
});

export const updateVerifyEmailAction: any = (details: string) => ({
  type: GET_VERIFY_EMAIL_SUCCESS,
  payload: details
});
