export interface IPartnerKey {
  partnerKey: string;
}

export interface ISignupRes {
  partnerKey?: string;
  message?: string;
  error?: boolean;
}

export interface ISignupForm {
  storeName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface IEcomercePlatform {
  type: string;
  label: string;
}

export interface IEPlatformRes {
  result?: Array<IEcomercePlatform>;
  message?: string;
  error?: boolean;
}

export interface IDetailsFirst {
  storeUrl: string;
  name: string;
  phone?: string;
  eCommerecePlatformType: string;
  otherECommercePlatformType?: string;
}

export interface IDetailsGroup {
  title: string;
  name: string;
  options: any[];
}

export type ImarketingSurveyAnswer = string | string[] | undefined;

export interface IDetailsSecond {
  partnerKey?: string;
  marketingSurvey?: string;
  annualRevenue?: string;
  mainUse?: string;
  isDeveloper?: boolean;
}

export interface IHandleDetailsStep {
  (step: DetailsStep): void;
}

export interface IAction {
  type: string;
  payload: any;
}

export type IMarketingSurveySelect = 'YES' | 'NOT' | 'JUST' | '';

export interface IMarketingSurveyData {
  multiple: boolean,
  label: string;
  value: any;
  // value: IMarketingSurveySelect;
  options: any;
}

export enum DetailsStep {
  One,
  Two,
  Skip,
  Done
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IResponseLogin {
  userName: string;
  userEmail: string;
  pic: string | undefined | null;
  partnerKey: string;
  accountStatus: string;
  invocationLine: string | undefined | null;
  evaluationDaysLeft: string | undefined | null;
  displayPublishButton: boolean;
  navigateToScreen: string;
  completedSignUpSteps: [];
  unreadNotifications: number;
}
