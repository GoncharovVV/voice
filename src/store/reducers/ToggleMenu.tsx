import { IMenuState } from '../../utils/types';
import {
  USER_MENU_TOGGLE,
  ASIDE_MENU_TOGGLE,
  DROP_USER_MENU_TOGGLE,
  MENU_CLOSE,
  TOOL_MENU_TOGGLE
} from '../../utils/constants/mainActions';

const defaultMenu: IMenuState = {
  isAsideOpen: false,
  isUserOpen: false,
  isDropUserOpen: false,
  isToolOpen: false
};
const updateToddleMenu = (state: any, action: any): any => {
  if (!state) {
    return defaultMenu;
  }
  switch (action.type) {
    case USER_MENU_TOGGLE:
      console.log(!state.toggleMenu.isUserOpen);
      return {
        isAsideOpen: false,
        isUserOpen: !state.toggleMenu.isUserOpen,
        isDropUserOpen: false,
        isToolOpen: false
      };
    case ASIDE_MENU_TOGGLE:
      return {
        isAsideOpen: !state.toggleMenu.isAsideOpen,
        isUserOpen: false,
        isDropUserOpen: false,
        isToolOpen: false
      };
    case DROP_USER_MENU_TOGGLE:
      return {
        isAsideOpen: false,
        isUserOpen: true,
        isDropUserOpen: !state.toggleMenu.isDropUserOpen,
        isToolOpen: false
      };
    case TOOL_MENU_TOGGLE:
      return {
        isAsideOpen: false,
        isUserOpen: false,
        isDropUserOpen: false,
        isToolOpen: true,
      };
    case MENU_CLOSE:
      return defaultMenu;
    default:
      return state.toggleMenu;
  }
};

export default updateToddleMenu;
