import { DETAILS_UPDATED } from '../../utils/constants/authActions';
import { IAction } from '../../utils/authTypes';

const updateDetailsAuth = (state: any, action: IAction): any => {
  if (!state) {
    return {
      storeUrl: '',
      name: '',
      phone: '',
      eCommerecePlatformType: '',
      otherECommercePlatformType: ''
    };
  }
  switch (action.type) {
    case DETAILS_UPDATED:
      return action.payload;
    default:
      return state.detailsAuth;
  }
};

export default updateDetailsAuth;
