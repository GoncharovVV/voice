import { USER_MENU_TOGGLE, ASIDE_MENU_TOGGLE, DROP_USER_MENU_TOGGLE, MENU_CLOSE, TOOL_MENU_TOGGLE } from "../../utils/constants/mainActions";

export const toggleUserMenuAction: any = () => ({
  type: USER_MENU_TOGGLE,
});

export const toggleAsideMenuAction: any = () => ({
  type: ASIDE_MENU_TOGGLE,
});

export const toggleDropUserMenuAction: any = () => ({
  type: DROP_USER_MENU_TOGGLE,
});

export const toggleToolMenuAction: any = () => ({
  type: TOOL_MENU_TOGGLE,
});

export const closeMenuAction: any = () => ({
  type: MENU_CLOSE,
});