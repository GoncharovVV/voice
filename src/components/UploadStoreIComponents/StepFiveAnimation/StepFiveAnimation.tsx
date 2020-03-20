import React from 'react';
import './StepFiveAnimation.scss';
import { ReactComponent as Upload1 } from '../../../assets/icons/upload_5_1.svg';
import { ReactComponent as Upload2 } from '../../../assets/icons/upload_5_2.svg';
import { ReactComponent as Upload3 } from '../../../assets/icons/upload_5_3.svg';
import { ReactComponent as Upload4 } from '../../../assets/icons/upload_5_4.svg';

export interface StepFiveAnimationProps {}

const StepFiveAnimation: React.FC<StepFiveAnimationProps> = () => {
  return (
    <>
      <div className="upload__row flex flex__just_end flex__align_end">
        <Upload3 className="svg-icon upload-step53"/>
        <Upload4 className="svg-icon upload-step54"/>
      </div>
      <div className="upload__row flex flex__align_end">
        <Upload1 className="svg-icon upload-step51"/>
        <Upload2 className="svg-icon upload-step52"/>
      </div>
    </>
  );
};

export default StepFiveAnimation;
