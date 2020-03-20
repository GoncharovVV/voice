import { GET_SHOPIFY_CALLBACK_REQUEST, GET_SHOPIFY_CALLBACK_ERROR, GET_SHOPIFY_CALLBACK_SUCCESS } from "../../utils/constants/authActions";

export const getShopifyCallbackAction: any = (details: any) => ({
  type: GET_SHOPIFY_CALLBACK_REQUEST,
  payload: details
});

export const onErrorShopifyCallbackAction: any = (details: any) => ({
  type: GET_SHOPIFY_CALLBACK_ERROR,
  payload: details
});

export const updateShopifyCallbackAction: any = (details: any) => ({
  type: GET_SHOPIFY_CALLBACK_SUCCESS,
  payload: details
});
