import { formErrors } from "./errors";

export const passwordPattern = {
  value: /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/i,
  message: formErrors.passwordPatternMessage
};
export const emailPattern = {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  message: formErrors.emailPatternMessage
};
export const urlPattern = {
  // eslint-disable-next-line no-useless-escape
  value: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
  // value: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i,
  message: formErrors.urlPatternMessage
}
export const AlexaSkillLaunchPhrases: string[] = [
  'launch',
  'launch',
  'ask',
  'tell',
  'open',
  'load',
  'begin',
  'enable',
  'alexa',
  'amazon',
  'echo',
  'computer',
  'skill',
  'app'
];
export const checkAlexaSkillLaunchPhrases = (value: string): boolean => {
  return AlexaSkillLaunchPhrases.every((item: string) => {
    return value.toLocaleLowerCase().indexOf(item.toLocaleLowerCase()) === -1;
  });
};

export const amazonDetailFields = ['merchantId', 'accessKeyId', 'accessKeySecret'];
export const settingsGeneralFields = [
  'name',
  'invocationName',
  'logoUrl',
  'smallLogoUrl',
  'privacyPolicyUrl',
  'termsUrl',
  'contactUsUrl',
  'refundPolicyUrl'
];
