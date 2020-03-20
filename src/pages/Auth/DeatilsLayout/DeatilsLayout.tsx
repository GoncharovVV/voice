import React, { useState } from 'react';
import DetailsDone from '../../../components/Auth/DetailsDone';
import DetailsFirst from '../../../components/Auth/DetailsFirst';
import DetailsSecond from '../../../components/Auth/DetailsSecond';
import { DetailsStep } from '../../../utils/authTypes';
import './DeatilsLayout.scss';

export interface DeatilsLayoutProps {}

const DeatilsLayout: React.FC<DeatilsLayoutProps> = () => {
  const [step, setStep] = useState<DetailsStep>(DetailsStep.One);
  const handleStep = (step: DetailsStep) => {
    setStep(step);
  };

  return (
    <>
      {step === DetailsStep.Skip || step === DetailsStep.Done ? (
        <DetailsDone />
      ) : (
        <>
          <h1 className="auth__title">Tell us a little bit about yourself</h1>
          <div className="step-dots form__row">
            <div
              className={`step-dots__item${
                step === DetailsStep.One ? ' step-dots__item_active' : ''
              }`}
            ></div>
            <div
              className={`step-dots__item${
                step === DetailsStep.Two ? ' step-dots__item_active' : ''
              }`}
            ></div>
          </div>
        </>
      )}
      {step === DetailsStep.One && <DetailsFirst handleStep={handleStep} />}
      {step === DetailsStep.Two && <DetailsSecond handleStep={handleStep} />}
    </>
  );
};

export default DeatilsLayout;
