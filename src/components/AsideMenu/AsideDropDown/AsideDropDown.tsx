import React from 'react';
import { NavLink } from 'react-router-dom';
import { IDropdownMenuItem } from '../../../utils/types';
import './AsideDropDown.scss';
export interface AsideDropDownProps {
  dropList: IDropdownMenuItem[];
}

const AsideDropDown: React.FC<AsideDropDownProps> = ({ dropList }) => {
  const dropItems = dropList.map((item: IDropdownMenuItem, idx:number) => (
    <li className="drop-menu__item" key={`${idx}drop`}>
      <NavLink className="drop-menu__link" to={item.linkTo}>{item.title}</NavLink>
    </li>
  ));
  return <ul className="drop-menu">{dropItems}</ul>;
};

export default AsideDropDown;
