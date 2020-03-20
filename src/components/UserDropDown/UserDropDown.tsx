import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg';
import { userMenuItems } from '../../utils/constants/menuItems';
import AsideMenuIcons from '../AsideMenu/AsideMenuIcons';
import Logout from '../Logout';
import './UserDropDown.scss';

export interface UserDropDownProps {
  showDrop: boolean;
}

const UserDropDown: React.FC<UserDropDownProps> = ({ showDrop }) => {
  console.log(showDrop, userMenuItems);
  const menuItems = userMenuItems.map((item, idx: number) => (
    <li className="user__drop-list" key={`userMenu${idx}`}>
      <NavLink exact={true} className="user__drop-link flex flex__align_center" to={item.linkTo}>
        <AsideMenuIcons typeIcon={item.type} />
        {item.title}
      </NavLink>
    </li>
  ));
  return (
    <ul className="user__drop">
      {menuItems}
      <li className="user__drop-logout">
        <Logout>
          <span className="flex flex__align_center user__drop-link">
            <LogoutIcon className="svg-icon user__drop-icon" />
            Log out
          </span>
        </Logout>
      </li>
    </ul>
  );
};

export default UserDropDown;
