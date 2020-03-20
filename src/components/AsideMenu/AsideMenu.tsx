import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Logout from '../Logout';
import './AsideMenu.scss';
import { ReactComponent as Logo } from '../../assets/icons/logo_white.svg';
import { ReactComponent as LogoutIcon } from '../../assets/icons/logout.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg';
import AsideMenuItem from './AsideMenuItem';
import { menuItems } from '../../utils/constants/menuItems';
import { IMenuItem } from '../../utils/types';
import { useSelector, useDispatch } from 'react-redux';
import { toggleAsideMenuAction } from '../../store/actions/toggleMenuActions';

export interface AsideMenuProps {}

const AsideMenu: React.FC<AsideMenuProps> = () => {
  let location = useLocation();
  let history = useHistory();
  const dispatch = useDispatch();

  const toggleMenu: any = useSelector((state: any) => state.toggleMenu);
  const [asideClassName, setAsideClassName] = useState<string[]>(['aside__nav']);

  useEffect(() => {
    if (toggleMenu && toggleMenu.isAsideOpen) {
      setAsideClassName((names: string[]) => {
        const returnArr = [...names];
        if (returnArr.indexOf('aside__opened') === -1) {
          returnArr.push('aside__opened');
        }
        return returnArr;
      });
    } else {
      setAsideClassName((names: string[]) => {
        const returnArr = [...names];
        if (returnArr.indexOf('aside__opened') > -1) {
          returnArr.splice(returnArr.indexOf('aside__opened'), 1);
        }
        return returnArr;
      });
    }
  }, [toggleMenu]);

  const onDropdownClick = (url: string) => {
    history.push(url);
  };

  const handleOpenAsideMenu = () => {
    dispatch(toggleAsideMenuAction());
  };

  const items = menuItems.map((item: IMenuItem) => {
    let dropdownActive = false;
    if (item.dropDownType && location.pathname.indexOf(item.dropDownType) > -1) {
      dropdownActive = true;
    }
    return (
      <AsideMenuItem
        key={item.type}
        itemInfo={item}
        dropdownActive={dropdownActive}
        onDropdownClick={onDropdownClick}
      />
    );
  });

  return (
    <nav className={`${asideClassName.join(' ')}`}>
      <button className="aside__close" onClick={handleOpenAsideMenu}>
        <Close className="svg-icon aside__close-icon" />
      </button>
      <NavLink exact={true} className="aside__logo-link" to="/">
        <Logo className="svg-icon aside__logo" />
      </NavLink>
      <ul className="menu">{items}</ul>
      <Logout>
        <span className="menu__link">
          <LogoutIcon className="svg-icon menu__icon" />
          Log out
        </span>
      </Logout>
    </nav>
  );
};

export default AsideMenu;
