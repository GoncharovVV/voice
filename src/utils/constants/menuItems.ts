import { IMenuItem, Urls } from '../types';

export const menuItems: IMenuItem[] = [
  { type: 'home', linkTo: `${Urls.HOME}`, title: 'Home' },
  { type: 'analytics', linkTo: `${Urls.ANALYTICS}`, title: 'Analytics' },
  { type: 'insights', linkTo: `${Urls.INSIGHTS}`, title: 'Insights' },
  { type: 'orders-made', linkTo: `${Urls.ORDERS_MADE}`, title: 'Orders Made' },
  {
    type: 'voice',
    title: 'My VoiceFront',
    linkTo: `${Urls.CHOOSE_YOUR_VOICE}`,
    dropDownType: 'voice',
    dropDownItems: [
      { title: 'Choose your voice', linkTo: `${Urls.CHOOSE_YOUR_VOICE}` },
      { title: 'Brand Messages', linkTo: `${Urls.BRAND_LANGUAGE}` },
      { title: 'Conversrational Tools', linkTo: `${Urls.CONVERSATION_TOOLS}` },
    ]
  },
  { type: 'discount', linkTo: `${Urls.DISCOUNTS}`, title: 'Discounts' },
  { type: 'user-plus', linkTo: `${Urls.REFERRALS}`, title: 'Refer a Friend' },
  {
    type: 'settings',
    title: 'Settings',
    linkTo: `${Urls.GENERAL_SETTINGS}`,
    dropDownType: 'settings',
    dropDownItems: [
      { title: 'General', linkTo: `${Urls.GENERAL_SETTINGS}` },
      { title: 'SEO', linkTo: `${Urls.SEO}` },
      { title: 'Test and Play', linkTo: `${Urls.TEST_AND_PLAY}` },
      { title: 'Get Paid', linkTo: `${Urls.GETTING_PAID}` }
    ]
  }
];
export const userMenuItems: IMenuItem[] = [
  { type: 'profile', linkTo: `${Urls.USER}`, title: 'User profile' },
  { type: 'user-plus', linkTo: `${Urls.REFERRALS}`, title: 'Refer a friend' },
  { type: 'billing', linkTo: `${Urls.BILLING}`, title: 'Billing' },
  { type: 'switch', linkTo: `${Urls.SWITCH}`, title: 'Switch store' },
]