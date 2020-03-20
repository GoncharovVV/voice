import { IResponseLogin, ILogin } from "../../utils/authTypes";

export interface IPartnerKeyAction {
  type: string;
  payload: string;
}

export interface ISetPartnerKey {
  (key:string):IPartnerKeyAction
}

export interface IUpdateUserData {
  type: string;
  payload: IResponseLogin;
}

export interface ILoginAction {
  type: string;
  payload: ILogin
}

export interface IPostLogin {
  (details:ILogin):ILoginAction
}