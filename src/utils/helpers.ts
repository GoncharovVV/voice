import { marketingSurveyData } from './constants/authDetails';
import { ImarketingSurveyAnswer } from './authTypes';
import { IMessages } from './types';

export const transformMarketingSurvey = (
  marketingSurvey: number,
  marketingSurveyAnswer: ImarketingSurveyAnswer,
  marketingSurveyOther: string | undefined
): string => {
  let surveyString = '';
  if (typeof marketingSurvey === 'number') {
    surveyString = marketingSurveyData[marketingSurvey].label;
  }
  if (Array.isArray(marketingSurveyAnswer)) {
    const filtered = marketingSurveyAnswer.filter((item: string) => item !== 'Other');
    if (filtered.length > 0) {
      surveyString = `${surveyString}; ${filtered.join('; ')}`;
    }
  } else {
    surveyString = `${surveyString}; ${marketingSurveyAnswer}`;
  }
  if (marketingSurveyOther) {
    surveyString = `${surveyString}; ${marketingSurveyOther}`;
  }
  return surveyString;
};

export const getApiUrl = (): string | undefined => {
  let _apiUrl = process.env['REACT_APP_API_URL'];
  if (window.location.href.indexOf('app.voicefront.ai') > -1)
    _apiUrl = process.env['REACT_APP_PROD_API_URL'];
  return _apiUrl;
};

export const transformShopify = (shop: string): string | undefined => {
  return shop.replace('.myshopify.com', '');
};

export const handleUpdateMessages = (
  messages: IMessages[],
  newItem: { responseType: string; message: string }
): IMessages[] => {
  console.log(messages, newItem);
  // const newArrMessages = [...messages];
  // newArrMessages.forEach((item: IMessages) => {
  //   if (item.responseType === newItem.responseType) {
  //     item.message = newItem.message;
  //   }
  // });
  // console.log(newArrMessages);
  return messages;
};

export const checkHomePageOnLoad = (): boolean => {
  return window.location.pathname.length === 1;
};
export const transformSelectedArr = (arr: any[]) => {
  return arr.map((item: any) => {
    item.selected = true;
    return item;
  });
};
export const transformAvaliableArr = (arr: any[]) => {
  return arr.map((item: any) => {
    item.selected = false;
    return item;
  });
};
export const getBase64 = (file: any, cb:(result: any) => void) => {
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function() {
    cb(reader.result)
  };
};
