import React from 'react';
import AsideRight from '../AsideRight';
import './GeneralSettingsAside.scss';
import { settingSteps } from '../../utils/constants/settings';
import { ISettingStep } from '../../utils/types';
import SettingsStepItem from '../SettingsStepItem';

export interface GeneralSettingsAsideProps {}

const GeneralSettingsAside: React.FC<GeneralSettingsAsideProps> = () => {

  return (
    <AsideRight>
      <>
        <p className="text text_blue aside-section__text">Set up your account in a few simple steps</p>
        <ul className="setting-steps">
          {
            settingSteps.map((item: ISettingStep, idx: number) => (
              <SettingsStepItem key={`settingStep${item.id}`} item={item} idx={idx}/>
            ))
          }
        </ul>
      </>
    </AsideRight>
  );
};

export default GeneralSettingsAside;
