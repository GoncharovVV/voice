import { IPartnerKey } from '../utils/authTypes';
import { ApiMethods } from '../utils/types';
import { postTermsUrl, apiHeaderJson } from '../utils/constants/apiUrls';

export default class TermsService {
  postTerms = async (data: IPartnerKey): Promise<any> => {
    const url = `${postTermsUrl}`;
    const settings = { 
      method: ApiMethods.POST,
      body: JSON.stringify(data),
      headers: apiHeaderJson
    };
    const res = await fetch(url, settings);
    const result = await res.json();
    if (!res.ok && res.status === 400) {
      result.error = true;
      return result;
    }
    if (!res.ok) throw new Error(`Could not get data, received ${res.status}`);
    return result;
  };
}
