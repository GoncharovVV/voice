import { IEPlatformRes, ISignupForm, ISignupRes } from '../utils/authTypes';
import {
  apiHeaderJson,
  getEComerceUrl,
  postDetailsFirstUrl,
  postDetailsSecondUrl,
  postLoginUrl,
  postSignupUrl,
  getMyPasswordUrl,
  getLogoutUrl
} from '../utils/constants/apiUrls';
import { formErrors } from '../utils/constants/errors';
import { ApiMethods } from '../utils/types';

export interface ISettings {
  body?: BodyInit | null;
  credentials?: RequestCredentials;
  headers: HeadersInit;
  method: string;
}

export default class AuthService {
  postSignUp = async (data: ISignupForm): Promise<ISignupRes> => {
    const url = `${postSignupUrl}`;
    const settings: ISettings = {
      method: ApiMethods.POST,
      body: JSON.stringify(data),
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    const result = await res.json();
    console.log(result);
    if (!res.ok && res.status === 400) {
      result.error = true;
      return result;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return result;
  };

  postLogin = async (data: any): Promise<any> => {
    const url = `${postLoginUrl}`;
    const settings: ISettings = {
      body: JSON.stringify(data),
      credentials: 'include',
      headers: apiHeaderJson,
      method: ApiMethods.POST
    };
    const res = await fetch(url, settings);
    if (!res.ok && res.status === 401) {
      const errorResponse = {
        error: true,
        text: formErrors.wrongCredentials
      };
      return errorResponse;
    }
    if (!res.ok && res.status === 400) {
      const result = await res.json();

      const errorResponse = {
        error: true,
        notActive: true,
        text: result.message
      };
      return errorResponse;
    }

    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    const result = await res.json();
    return result;
  };

  postDetailsFirst = async (data: any): Promise<any> => {
    const url = `${postDetailsFirstUrl}`;
    const settings: ISettings = {
      method: ApiMethods.POST,
      body: JSON.stringify(data),
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    const result = await res.json();
    console.log(result);
    if (!res.ok && res.status === 400) {
      result.error = true;
      return result;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return result;
  };

  postDetailsSecond = async (data: any): Promise<any> => {
    console.log(data);
    const url = `${postDetailsSecondUrl}`;
    const settings = {
      method: ApiMethods.POST,
      body: JSON.stringify(data),
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    const result = await res.json();
    console.log(result);
    if (!res.ok && res.status === 400) {
      result.error = true;
      return result;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return result;
  };

  getEcomercePlatforms = async (): Promise<IEPlatformRes> => {
    const url = `${getEComerceUrl}`;
    const settings = {
      method: ApiMethods.GET,
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    const data = await res.json();
    if (!res.ok && res.status === 400) {
      data.error = true;
      return data;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return { result: data };
  };

  getMyPassword = async (email: string): Promise<any> => {
    const url = `${getMyPasswordUrl}${email}`;
    const settings = {
      method: ApiMethods.GET,
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return true;
  };
  getLogout = async (): Promise<any> => {
    const url = `${getLogoutUrl}`;
    const settings: ISettings = {
      method: ApiMethods.GET,
      credentials: 'include',
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    console.log(res);
    if(res.status === 401 || res.status === 400) {
      return true;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return true;
  };
}
