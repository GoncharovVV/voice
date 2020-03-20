import { ISettingStep, Urls } from "../types";

export const settingSteps: ISettingStep[] = [
  {id: '01', label: 'Setup your store', url: Urls.GENERAL_SETTINGS},
  {id: '02', label: 'SEO it', url: Urls.SEO},
  {id: '03', label: 'Test and play', url: Urls.TEST_AND_PLAY},
  {id: '04', label: 'Let us know how to get you paid', url: Urls.GETTING_PAID},
  {id: '05', label: 'Publish your app', url: Urls.GENERAL_SETTINGS}
]