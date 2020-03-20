export enum Urls {
  HOME = '/',
  AUTH = '/auth',
  SIGNUP = '/auth/signup',
  DETAILS = '/auth/details',
  LOGIN = '/auth/login',
  SHOPIFY_INTEGRATION = '/auth/add-shopify',
  ADD_STORE = '/store',
  SETTINGS = '/settings',
  GENERAL_SETTINGS = '/settings/general',
  SEO = '/settings/seo',
  TEST_AND_PLAY = '/settings/test-play',
  GETTING_PAID = '/settings/getting-paid',
  VOICE = '/voice',
  CHOOSE_YOUR_VOICE = '/voice/choose-voice',
  CONVERSATION_TOOLS = '/voice/conversation-tools',
  BRAND_LANGUAGE = '/voice/brand-language',
  ORDERS_MADE = '/orders-made',
  ACCEPT_TERMS = '/terms',
  CHOOSE_PLAN = '/choose-plan',
  ANALYTICS = '/analytics',
  INSIGHTS = '/insights',
  USER = '/user',
  REFERRALS = '/referrals',
  BILLING = '/billing',
  DISCOUNTS = '/discounts',
  SWITCH = '/switch-store'
}
export type IMessageSide = 'RIGHT' | 'LEFT';
export type IDropDownType = 'settings' | 'voice';
export interface IMenuState {
  isUserOpen: boolean;
  isDropUserOpen: boolean;
  isAsideOpen: boolean;
  isToolOpen: boolean;
}
export type IButtonTypes = 'button' | 'submit' | 'reset' | undefined;

export interface IClearFn {
  (): void;
}
export type IStoreStep = '00' | '01' | '02' | '03' | '04' | '05' | 'done';

export type ICardType = 'voice' | 'tools';

export type IMenuType =
  | 'voice'
  | 'insights'
  | 'settings'
  | 'user-plus'
  | 'discount'
  | 'orders-made'
  | 'analytics'
  | 'profile'
  | 'billing'
  | 'switch'
  | 'home';
export type IToolType = 'SUGGEST_LAST_ORDER' | 'BROWSE_STORE' | 'STORE_PROMOTIONS' | 'BEST_SELLERS';
export interface IDropdownMenuItem {
  title: string;
  linkTo: string;
}

export interface IMenuItem {
  type: IMenuType;
  dropDownItems?: IDropdownMenuItem[];
  linkTo?: any;
  title: string;
  dropDownType?: IDropDownType;
}

export interface ISToreSteps {
  step: IStoreStep;
  stepLabel: string;
  stepValue: string;
  toReplace: boolean | string;
  replaceValue: boolean | string;
}
export interface ILink {
  linkTitle: string;
  linkUrl: string;
}

export enum ApiMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

export interface IMessages {
  title: string;
  side: IMessageSide;
  responseType: string;
  message: string;
}

export interface ICompleteSteps {
  title: string;
  message?: string;
  buttonLabel: string;
  buttonRedirectTo: string;
}

export interface IVoice {
  type: string;
  label: string;
  playUrl: string;
  photoUrl: string;
  selected: boolean;
}

export interface ITool {
  type: string;
  label: string;
  description: string;
}

export interface IConversationTools {
  toolsForSelection: number;
  selected?: ITool[];
  available?: ITool[];
}

export interface IToolsSteps {
  completed: {
    title: string;
    value: number;
  };
  needed: {
    title: string;
    value: number;
  };
}

export interface ISettingStep {
  id: string;
  label: string;
  url: Urls;
}