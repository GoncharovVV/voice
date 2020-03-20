import React, { useEffect, useState } from 'react';
import { ReactComponent as User } from '../../assets/icons/user.svg';
import './ButtonUserMenuToggle.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleUserMenuAction } from '../../store/actions/toggleMenuActions';
import { IMenuState } from '../../utils/types';
export interface ButtonUserMenuToggleProps {}

const ButtonUserMenuToggle: React.FC<ButtonUserMenuToggleProps> = () => {
  const toggleMenu: IMenuState = useSelector((state: any) => state.toggleMenu);
  const [burgerClassName, setBurgerClassName] = useState<string[]>(['user__burger'])
  const dispatch = useDispatch();
  useEffect(() => {
    if(toggleMenu && toggleMenu.isUserOpen) {
      setBurgerClassName((classes: string[]) => {
        const newClasses = [...classes];
        if(newClasses.indexOf('user__burger_opened') === -1) {
          newClasses.push('user__burger_opened');
        }
        return newClasses;
      });
    } else {
      setBurgerClassName((classes: string[]) => {
        const newClasses = [...classes];
        if(newClasses.indexOf('user__burger_opened') > -1) {
          newClasses.splice(newClasses.indexOf('user__burger_opened'), 1);
        }
        return newClasses;
      });
    }
  }, [toggleMenu])
  const handleOnClick = () => {
    dispatch(toggleUserMenuAction());
  };
  return (
    <button className={burgerClassName.join(' ')} onClick={handleOnClick}>
      <User className="svg-icon user__burger-icon" />
    </button>
  );
}

export default ButtonUserMenuToggle;