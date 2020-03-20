import React from 'react';
import './UploadStoreIcons.scss';
import { ReactComponent as Upload1 } from '../../../assets/icons/upload_1.svg';
import { IStoreStep } from '../../../utils/types';
import StepTwoAnimation from '../StepTwoAnimation';
import StepThreeAnimation from '../StepThreeAnimation';
import StepFourAnimation from '../StepFourAnimation';
import StepFiveAnimation from '../StepFiveAnimation';
import StepDoneAnimation from '../StepDoneAnimation';
export interface UploadStoreIconsProps {
  step: IStoreStep;
}

const UploadStoreIcons: React.FC<UploadStoreIconsProps> = ({step}) => {

  const renderCaseIcon = (step:IStoreStep) => {
    switch(step) {
      case '00':
        return <Upload1 className="svg-icon store-icon__step1"/>;
      case '01':
        return <Upload1 className="svg-icon store-icon__step1"/>;
      case '02':
        return <StepTwoAnimation/>;
      case '03':
        return <StepThreeAnimation/>;
      case '04':
        return <StepFourAnimation/>;
      case '05':
        return <StepFiveAnimation/>;
      case 'done':
        return <StepDoneAnimation/>;
      default:
        return <span>Oops. There is no icon for that step</span>;
    }
  }
  return (
    <div className="upload__steps">
      {renderCaseIcon(step)}
    </div>
  );
};

export default UploadStoreIcons;
