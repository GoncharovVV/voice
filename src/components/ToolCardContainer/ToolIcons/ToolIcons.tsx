import React from 'react';
import { IToolType } from '../../../utils/types';
import {ReactComponent as Browse} from '../../../assets/icons/cart.svg';
import {ReactComponent as Promotion} from '../../../assets/icons/toolsIcons/promotion.svg';
import {ReactComponent as Lead} from '../../../assets/icons/toolsIcons/lead.svg';
import {ReactComponent as Platform} from '../../../assets/icons/platform.svg';
export interface ToolIconsProps {
  typeIcon: IToolType;
}

const ToolIcons: React.FC<ToolIconsProps> = ({typeIcon}) => {
  const renderCaseIcon = (type:IToolType) => {
    switch(type) {
      case 'SUGGEST_LAST_ORDER':
        return <Platform className="svg-icon card-item__icon card-item__icon_tool "/>;
      case 'BROWSE_STORE':
        return <Browse className="svg-icon card-item__icon card-item__icon_tool icon__tool-cart"/>;
      case 'STORE_PROMOTIONS':
        return <Promotion className="svg-icon card-item__icon card-item__icon_tool"/>;
      case 'BEST_SELLERS':
        return <Lead className="svg-icon card-item__icon card-item__icon_tool"/>;
      default:
        return <Platform className="svg-icon card-item__icon card-item__icon_tool" />;
    }
  }
  return <>{renderCaseIcon(typeIcon)}</>;
};

export default ToolIcons;
