import React from 'react';
import './StepFourAnimation.scss';
import { ReactComponent as Upload1 } from '../../../assets/icons/upload_4.svg';
export interface StepFourAnimationProps {

}

const StepFourAnimation: React.FC<StepFourAnimationProps> = () => {
  return (
    <>
      <Upload1 className="svg-icon icon-uppload_4"/>
    </>
   );
}

export default StepFourAnimation;