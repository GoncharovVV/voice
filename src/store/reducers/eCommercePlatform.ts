import { E_COMERCE_SUPORTED_UPDATED } from '../../utils/constants/authActions';
import { IAction } from '../../utils/authTypes';

const updateECommercePlatform = (state: any, action: IAction): any => {
  if (!state) {
    return {
      suported: false,
      platform: {}
    };
  }
  switch (action.type) {
    case E_COMERCE_SUPORTED_UPDATED:
      return action.payload;
    default:
      return state.eCommercePlatform;
  }
};
 
export default updateECommercePlatform;
