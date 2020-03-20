import React from 'react';
import { IMenuType } from '../../../utils/types';
import { ReactComponent as Logo } from '../../../assets/icons/analytics.svg';
import { ReactComponent as Discount } from '../../../assets/icons/discount.svg';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { ReactComponent as Insights } from '../../../assets/icons/insights.svg';
import { ReactComponent as OrdersMade } from '../../../assets/icons/orders-made.svg';
import { ReactComponent as Settings } from '../../../assets/icons/settings.svg';
import { ReactComponent as UserPlus } from '../../../assets/icons/user-plus.svg';
import { ReactComponent as Voice } from '../../../assets/icons/voice.svg';
import { ReactComponent as UserProfile } from '../../../assets/icons/user-profile.svg';
import { ReactComponent as Billing } from '../../../assets/icons/billing.svg';
import { ReactComponent as Switch } from '../../../assets/icons/switch.svg';
export interface AsideMenuIconsProps {
  typeIcon: IMenuType;
}

const AsideMenuIcons: React.FC<AsideMenuIconsProps> = ({typeIcon}) => {
  const renderCaseIcon = (type:IMenuType) => {
    switch(type) {
      case 'analytics':
        return <Logo className="svg-icon menu__icon"/>;
      case 'discount':
        return <Discount className="svg-icon menu__icon"/>;
      case 'home': 
        return <Home className="svg-icon menu__icon"/>;
      case 'insights':
        return <Insights className="svg-icon menu__icon"/>;
      case 'orders-made':
        return <OrdersMade className="svg-icon menu__icon"/>;
      case 'settings':
        return <Settings className="svg-icon menu__icon"/>;
      case 'user-plus':
        return <UserPlus className="svg-icon menu__icon"/>;
      case 'voice':
        return <Voice className="svg-icon menu__icon"/>;
      case 'profile':
        return <UserProfile className="svg-icon menu__icon"/>;
      case 'billing':
        return <Billing className="svg-icon menu__icon"/>;
      case 'switch':
        return <Switch className="svg-icon menu__icon"/>;
      default:
        return <span>Oops. There is no icon for that item</span>;
    }
  }
  return (
    <>
      {renderCaseIcon(typeIcon)}
    </>
  );
};

export default AsideMenuIcons;
