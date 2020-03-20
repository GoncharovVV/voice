import { ISToreSteps } from "../types";

export const storeSteps: ISToreSteps[] = [
  { replaceValue: false, toReplace: false, step: '01', stepLabel: 'Initializing connection with your Shopify store', stepValue: '2%' },
  { replaceValue: false, toReplace: false, step: '01', stepLabel: 'Initializing connection with your Shopify store', stepValue: '12%' },
  { replaceValue: 'numOfCategories', toReplace: ':X', step: '02', stepLabel: 'Found :X collections ', stepValue: '32%' },
  { replaceValue: 'numOfProducts', toReplace: ':Y', step: '03', stepLabel: 'Retrieving :Y products', stepValue: '47%' },
  { replaceValue: false, toReplace: false, step: '04', stepLabel: 'Creating your voice store', stepValue: '64%' },
  { replaceValue: false, toReplace: false, step: '05', stepLabel: 'Building the AI powered dialogue', stepValue: '81%' },
  { replaceValue: false, toReplace: false, step: 'done', stepLabel: 'Your voice store is now ready', stepValue: '100%' }
];
