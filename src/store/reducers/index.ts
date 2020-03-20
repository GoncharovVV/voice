import updatePartnerKey from './PartnerKey';
import updateDetailsAuth from './DetailsAuth';
import updateECommercePlatform from './eCommercePlatform';
import updateLoginDetails from './LoginDetails';
import updateInstallationLink from './InstallationLink';
import updateShopifyCallback from './ShopifyCallback';
import updateVerifiedEmail from './VerefiedEmail';
import updateAmazonPayDetails from './AmazonPayDetails';
import updateAmazonPayModalOrder from './AmazonPayModalOrder';
import updateBasicDialogueMessages from './BasicDialogueMessages';
import updateHomeScreenDetails from './HomeScreenDetails';
import updateVoices from './Voices';
import updateToddleMenu from './ToggleMenu';
import updateVoiceToPlay from './VoiceToPlay';
import updateConversationTools from './ConversationToolsReducer';
import updateEditTool from './EditTool';
import updateCurrentTool from './CurrentTool';
import updateGeneralSettings from './GeneralSettingsDetails';

const reducer = (state: any, action: any) => ({
  partnerKey: updatePartnerKey(state, action),
  detailsAuth: updateDetailsAuth(state, action),
  eCommercePlatform: updateECommercePlatform(state, action),
  loginDetails: updateLoginDetails(state, action),
  installationLink: updateInstallationLink(state, action),
  shopifyCallback: updateShopifyCallback(state, action),
  verefiedEmail: updateVerifiedEmail(state, action),
  amazonPayDetails: updateAmazonPayDetails(state, action),
  amazonPayModalOrder: updateAmazonPayModalOrder(state, action),
  basicDialogueMessages: updateBasicDialogueMessages(state, action),
  homeScreenDetails: updateHomeScreenDetails(state, action),
  voices: updateVoices(state, action),
  toggleMenu: updateToddleMenu(state, action),
  vioceToPlay: updateVoiceToPlay(state, action),
  conversationTools: updateConversationTools(state, action),
  editTool: updateEditTool(state, action),
  toolType: updateCurrentTool(state, action),
  generalSettings: updateGeneralSettings(state, action),
});
export default reducer;
