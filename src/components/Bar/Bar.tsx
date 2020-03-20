import React from 'react';
import { ReactComponent as Check } from '../../assets/icons/check.svg';
import { ISToreSteps } from '../../utils/types';
import './Bar.scss';

export interface BarProps {
  stepDetails: ISToreSteps;
}

const Bar: React.FC<BarProps> = ({ stepDetails }) => {
  const { stepValue, step, stepLabel } = stepDetails;
  const barChildStyle = { width: stepValue };
  return (
    <div className="bar__holder">
      <div className="bar__row">
        <div className="bar__step">{step === 'done' ? <Check className="svg-icon bar-check-icon" /> : step}</div>
        <div className="bar__step-label">{stepLabel}</div>
        <div className="bar__step-value text_right">{stepValue}</div>
      </div>
      <div className="bar">
        <div className="bar__child" style={barChildStyle}></div>
      </div>
    </div>
  );
};

export default Bar;
