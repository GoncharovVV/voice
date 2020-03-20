import { GET_AMAZON_PAY_DETAILS_REQUEST, GET_AMAZON_PAY_DETAILS_ERROR, GET_AMAZON_PAY_DETAILS_SUCCESS, POST_AMAZON_PAY_DETAILS_REQUEST, POST_AMAZON_PAY_DETAILS_ERROR, CANCEL_AMAZON_PAY_DETAILS_REQUEST } from "../../utils/constants/mainActions";

export const getAmazonPayDetailsAction: any = () => ({
  type: GET_AMAZON_PAY_DETAILS_REQUEST,
});

export const onCancelGetAmazonPayDetailsAction: any = () => ({
  type: CANCEL_AMAZON_PAY_DETAILS_REQUEST,
});

export const onErrorGetAmazonPayDetailsAction: any = (details: any) => ({
  type: GET_AMAZON_PAY_DETAILS_ERROR,
  payload: details
});

export const postAmazonPayDetailsAction: any = (details:any) => ({
  type: POST_AMAZON_PAY_DETAILS_REQUEST,
  payload: details
});

export const onErrorPostAmazonPayDetailsAction: any = (details: any) => ({
  type: POST_AMAZON_PAY_DETAILS_ERROR,
  payload: details
});

export const updateAmazonPayDetailsAction: any = (details: any) => ({
  type: GET_AMAZON_PAY_DETAILS_SUCCESS,
  payload: details
});