import { IMarketingSurveyData, IDetailsGroup } from '../authTypes';

export const marketingSurveyData: IMarketingSurveyData[] = [
  {
    multiple: true,
    label: 'Yes, I am',
    value: 'YES',
    options: [
      'Sending a newsletter to my customers',
      'Promoting it on my website',
      'Promoting it on social media',
      'Promoting it in my physical store',
      'Other'
    ]
  },
  {
    multiple: false,
    label: 'Not yet',
    value: 'NOT',
    options: [
      "I'm still brainstorming marketing ideas",
      "I have some ideas and I'm ready to execute them in a few weeks"
    ]
  },
  {
    multiple: true,
    label: "I'm just playing around",
    value: 'JUST',
    options: [
      'Help me while I play around',
      'Help me get started with a free online webinar',
      'Help me find the right products to sell on Voice'
    ]
  }
];

export const annualRevenueData: IDetailsGroup = {
  title: '2. WHAT IS YOUR CURRENT ANNUAL REVENUE?',
  name: 'annualRevenue',
  options: [
    'Up to $100000',
    '$100,000 to $500,000',
    '$500,000 to $1,000,000',
    '$1,000,000 to $5,000,000',
    'Over $5,000,000'
  ]
};

export const mainUseData: IDetailsGroup = {
  title: '3. What would be the main use of having a Voice store on Alexa?',
  name: 'mainUse',
  options: [
    "I'm doing it for PR purposes",
    'Announcements of deals and promotions to my customers',
    'Providing other information to my customers (store location etc.)',
    'Increase my sales over voice'
  ]
};

export const isDeveloperData: IDetailsGroup = {
  title: '4. ARE YOU SETTING UP A STORE FOR A CLIENT?',
  name: 'isDeveloper',
  options: [{
    text: "Yes, I'm managing a store for client",
    value: true
  },
  {
    text: 'No',
    value: false
  }]
};
