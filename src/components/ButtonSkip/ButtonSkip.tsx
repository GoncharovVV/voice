import React from 'react';
import './ButtonSkip.scss';
export interface ButtonSkipProps {
  onSkipClick: () => void;
}

const ButtonSkip: React.FC<ButtonSkipProps> = ({ onSkipClick }) => {
  return (
    <button type="button" className="link skip__link" onClick={onSkipClick}>
      Skip
    </button>
  );
};

export default ButtonSkip;
