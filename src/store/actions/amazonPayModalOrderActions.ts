import {
  GET_AMAZON_MODAL_ORDER_REQUEST,
  GET_AMAZON_MODAL_ORDER_ERROR,
  GET_AMAZON_MODAL_ORDER_SUCCESS
} from '../../utils/constants/mainActions';

export const getAmazonPayModalOrderAction: any = (details: any) => ({
  type: GET_AMAZON_MODAL_ORDER_REQUEST,
  payload: details
});

export const onErrorGetAmazonPayModalOrderAction: any = (details: any) => ({
  type: GET_AMAZON_MODAL_ORDER_ERROR,
  payload: details
});

export const updateAmazonPayModalOrderAction: any = (details: any) => ({
  type: GET_AMAZON_MODAL_ORDER_SUCCESS,
  payload: details
});
