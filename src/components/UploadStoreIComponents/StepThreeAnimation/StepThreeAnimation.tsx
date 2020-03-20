import React from 'react';
import './StepThreeAnimation.scss';
import { ReactComponent as Upload1 } from '../../../assets/icons/upload_2_1.svg';
import { ReactComponent as Upload2 } from '../../../assets/icons/upload_3_2.svg';
import { ReactComponent as Upload3 } from '../../../assets/icons/upload_2_3.svg';
export interface StepThreeAnimationProps {}

const StepThreeAnimation: React.FC<StepThreeAnimationProps> = () => {
  return (
    <>
      <Upload1 className="svg-icon icon-uppload_31" />
      <Upload2 className="svg-icon icon-uppload_32" />
      <Upload3 className="svg-icon icon-uppload_33" />
    </>
  );
};

export default StepThreeAnimation;
