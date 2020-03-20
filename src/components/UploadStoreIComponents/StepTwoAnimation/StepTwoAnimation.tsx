import React from 'react';
import { ReactComponent as Upload1 } from '../../../assets/icons/upload_2_1.svg';
import { ReactComponent as Upload2 } from '../../../assets/icons/upload_2_2.svg';
import { ReactComponent as Upload3 } from '../../../assets/icons/upload_2_3.svg';
import './StepTwoAnimation.scss';
export interface StepTwoAnimationProps {}

const StepTwoAnimation: React.FC<StepTwoAnimationProps> = () => {
  return (
    <>
      <Upload1 className="svg-icon icon-uppload_21" />
      <Upload2 className="svg-icon icon-uppload_22" />
      <Upload3 className="svg-icon icon-uppload_23" />
    </>
  );
};

export default StepTwoAnimation;
