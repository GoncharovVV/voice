import { PARTNER_KEY_UPDATED } from '../../utils/constants/authActions';
import { IAction } from '../../utils/authTypes';

const updatePartnerKey = (state: any, action: IAction): any => {
  if (!state) {
    return '';
  }
  switch (action.type) {
    case PARTNER_KEY_UPDATED:
      return action.payload;
    default:
      return state.partnerKey;
  }
};

export default updatePartnerKey;
