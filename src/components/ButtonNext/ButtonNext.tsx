import React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { IButtonTypes, IClearFn } from '../../utils/types';
import './ButtonNext.scss';
export interface ButtonNextProps {
  onNextClick?: IClearFn;
  type: IButtonTypes;
}

const ButtonNext: React.FC<ButtonNextProps> = ({ onNextClick, type }) => {
  return (
    <button type={type} className="button button_rounded button__next" onClick={onNextClick}>
      Next
      <div className="icon-next__holder">
        <Arrow className="svg-icon icon__next" />
      </div>
    </button>
  );
};

export default ButtonNext;
