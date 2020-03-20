import React from 'react';
import { NavLink } from 'react-router-dom';
import AsideMenuIcons from '../AsideMenuIcons';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';
import './AsideMenuItem.scss';
import { IMenuItem } from '../../../utils/types';
import AsideDropDown from '../AsideDropDown';
export interface AsideMenuItemsProps {
  itemInfo: IMenuItem;
  dropdownActive: boolean;
  onDropdownClick: (url: string) => void;
}

const AsideMenuItem: React.FC<AsideMenuItemsProps> = ({
  itemInfo,
  dropdownActive,
  onDropdownClick
}) => {
  const dropDownClassName = ['menu__link'];
  if (dropdownActive) dropDownClassName.push('active');
  const handleDropDownClick = () => {
    onDropdownClick(itemInfo.linkTo);
  };
  return (
    <li className="menu__item">
      {itemInfo.dropDownItems ? (
        <>
          <button className={dropDownClassName.join(' ')} onClick={handleDropDownClick}>
            <AsideMenuIcons typeIcon={itemInfo.type} />
            <span className="menu__drop-text">{itemInfo.title}</span>
            <Arrow className="svg-icon menu__arrow-icon" />
          </button>
          {dropdownActive && <AsideDropDown dropList={itemInfo.dropDownItems} />}
        </>
      ) : (
        <NavLink className="menu__link" exact={true} to={itemInfo.linkTo}>
          <AsideMenuIcons typeIcon={itemInfo.type} />
          {itemInfo.title}
        </NavLink>
      )}
    </li>
  );
};

export default AsideMenuItem;
