import { combineEpics, createEpicMiddleware } from 'redux-observable';
import getAmazonPayDetails from './epics/getAmazonPayDetails';
import getAmazonPayModalOrder from './epics/getAmazonPayModalOrder';
import getBasicDialogueMessage from './epics/getBasicDialogueMessages';
import getShopifyCallback from './epics/getShopifyCallback';
import getShopifyInstallLink from './epics/getShopifyInstallLink';
import getUserDetails from './epics/getUserDetails';
import getVerifyEmail from './epics/getVerifyEmail';
import postAmazonPayDetails from './epics/postAmazonPayDetails';
import postUpdateMessage from './epics/postUpdateMessage';
import getHomeScreenDetails from './epics/getHomeScreen';
import getVioces from './epics/getVioces';
import postUpdateVoice from './epics/postChangeVoice';
import getConversationTools from './epics/getConversationTools';
import getEditTool from './epics/getEditTool';
import postToolToggle from './epics/postToolToggle';
import postGeneralUploadLogo from './epics/postGeneralUploadLogo';
import getGeneralSettings from './epics/getGeneralSettings';
import postGeneralSettings from './epics/postGeneralSettings';
// import postLoginEpic from './epics/postLogin';
// import postAuthDetailsEpic from './epics/postAuthDetails';

export const rootEpic = combineEpics(
  getShopifyInstallLink,
  getShopifyCallback,
  getUserDetails,
  getVerifyEmail,
  getAmazonPayDetails,
  postAmazonPayDetails,
  getAmazonPayModalOrder,
  getBasicDialogueMessage,
  postUpdateMessage,
  getHomeScreenDetails,
  getVioces,
  postUpdateVoice,
  getConversationTools,
  getEditTool,
  postToolToggle,
  postGeneralUploadLogo,
  getGeneralSettings,
  postGeneralSettings
);
const epicMiddleware = createEpicMiddleware();

export default epicMiddleware;
