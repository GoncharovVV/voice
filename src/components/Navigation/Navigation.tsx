import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Burger } from '../../assets/icons/burger.svg';
import { ReactComponent as LogoNav } from '../../assets/icons/logo.svg';
import ButtonUserMenuToggle from '../ButtonUserMenuToggle';
import './Navigation.scss';
import { Urls, IMenuState } from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleAsideMenuAction } from '../../store/actions/toggleMenuActions';

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const dispatch = useDispatch();
  const toggleMenu: IMenuState = useSelector((state: any) => state.toggleMenu);
  const [burgerClassName, setBurgerClassName] = useState<string[]>(['burger', 'nav__mobile-hidden']);
  const handleOpenAsideMenu = () => {
    dispatch(toggleAsideMenuAction());
  };
  useEffect(() => {
    if (toggleMenu && toggleMenu.isAsideOpen) {
      setBurgerClassName((names: string[]) => {
        const returnArr = [...names];
        if (returnArr.indexOf('aside__opened') === -1) {
          returnArr.push('aside__opened');
        }
        return returnArr;
      });
    }
    else {
      setBurgerClassName((names: string[]) => {
        const returnArr = [...names];
        if (returnArr.indexOf('aside__opened') > -1) {
          returnArr.splice(returnArr.indexOf('aside__opened'), 1);
        }
        return returnArr;
      });
    }
  }, [toggleMenu])
  return (
    <div className="menu__mobile aside__opened">
      <NavLink exact={true} className="mobile__main-link nav__mobile-hidden" to={Urls.HOME}>
        <LogoNav className="svg-icon nav__logo" />
      </NavLink>
      <div className="menu__actions_holder flex flex__just_end">
        <button className={burgerClassName.join(' ')} onClick={handleOpenAsideMenu}>
          <Burger className="svg-icon burger__icon" />
        </button>
        <ButtonUserMenuToggle />
      </div>
    </div>
  );
};

export default Navigation;
