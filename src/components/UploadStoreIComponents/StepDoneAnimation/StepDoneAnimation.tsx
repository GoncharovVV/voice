import React from 'react';
import { ReactComponent as Upload1 } from '../../../assets/icons/upload_6_1.svg';
import { ReactComponent as Upload2 } from '../../../assets/icons/upload_6_2.svg';
import './StepDoneAnimation.scss';

export interface StepDoneAnimationProps {}

const StepDoneAnimation: React.FC<StepDoneAnimationProps> = () => {
  return (
    <div className="upload__done">
      <Upload1 className="svg-icon upload__done-icon1" />
      <Upload2 className="svg-icon upload__done-icon" />
    </div>
  );
};

export default StepDoneAnimation;
