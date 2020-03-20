import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SettingIcon } from '../../assets/icons/check.svg';
import { useSelector } from 'react-redux';
import { ISettingStep } from '../../utils/types';
export interface SettingsStepItemProps {
  item: ISettingStep;
  idx: number;
}

const SettingsStepItem: React.FC<SettingsStepItemProps> = ({ item, idx }) => {
  const loginDetails: any = useSelector((state: any) => state.loginDetails.details);
  const [checkClassName, setCheckClassName] = useState<string[]>(['setting-steps__check']);
  useEffect(() => {
    if (loginDetails && loginDetails.completedSignUpSteps && loginDetails.completedSignUpSteps.indexOf(idx) > -1) {
      setCheckClassName((x:string[]) => {
        const newArr = [...x, 'done'];
        return newArr;
      });
    }
  }, [loginDetails, idx]);
  return (
    <li >
      <NavLink to={item.url} className="setting-steps__item flex flex__align_baseline" exact={true}>
        <div className={checkClassName.join(' ')}>
          <SettingIcon className="svg-icon" />
        </div>
        <div className="setting-steps__id">{item.id}</div>
        {item.label}
      </NavLink>
    </li>
  );
};

export default SettingsStepItem;
