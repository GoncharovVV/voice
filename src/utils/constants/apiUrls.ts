import { getApiUrl } from '../helpers';

export const apiHeaderJson = { 'Content-Type': 'application/json' };

export const postTermsUrl: string = `${getApiUrl()}/partner/signup/terms`;
export const postSignupUrl: string = `${getApiUrl()}/partner/signup`;
export const postDetailsFirstUrl: string = `${getApiUrl()}/partner/signup/2`;
export const postDetailsSecondUrl: string = `${getApiUrl()}/partner/signup/3`;
export const postLoginUrl: string = `${getApiUrl()}/partner/login`;
export const postAmazonPayDetailsUrl = `${getApiUrl()}/partner/:partnerKey/settings/amazonpay`;
export const postUpdateMessageUrl = `${getApiUrl()}/partner/:partnerKey/dialogue/message`;
export const postChangeVoicesUrl = `${getApiUrl()}/partner/:partnerKey/customization/voice`;
export const postToolToggleUrl = `${getApiUrl()}/partner/:partnerKey/tools`;
export const postGeneralUploadLogoUrl = `${getApiUrl()}/partner/:partnerKey/settings/general/logo`;
export const postGeneralSettingsUrl = `${getApiUrl()}/partner/:partnerKey/settings/general`;

export const getEComerceUrl: string = `${getApiUrl()}/partner/consts/platforms`;
export const getShopifyInstallLinkUrl = `${getApiUrl()}/partner/:partnerKey/signup/shopify`;
export const getInstallCallbackUrl = `${getApiUrl()}/partner/:partnerKey/signup/shopify/callback`;
export const getAmazonPayDetailsUrl = `${getApiUrl()}/partner/:partnerKey/settings/amazonpay`;
export const getAmazonPayModalOrderUrl = `${getApiUrl()}/partner/:partnerKey/instructions/alexa/order`;
export const getBasicDialogueMessageUrl = `${getApiUrl()}/partner/:partnerKey/dialogue/basic`;
export const getHomeScreenDetailsUrl = `${getApiUrl()}/partner/:partnerKey/home`;
export const getVoicesUrl = `${getApiUrl()}/partner/:partnerKey/customization/voice`;
export const getUserDetailsUrl = `${getApiUrl()}/partner/:partnerKey/self `;
export const getVerifyEmailUrl = `${getApiUrl()}/partner/signup/verifyemail?userId=`;
export const getMyPasswordUrl = `${getApiUrl()}/partner/login/password/reset?email=`;
export const getLogoutUrl = `${getApiUrl()}/partner/logout`;
export const getConversationToolsUrl = `${getApiUrl()}/partner/:partnerKey/tools`;
export const getEditToolUrl = `${getApiUrl()}/partner/:partnerKey/tools/edit?tool=:toolName`;
export const getGeneralSettingsUrl = `${getApiUrl()}/partner/:partnerKey/settings/general`