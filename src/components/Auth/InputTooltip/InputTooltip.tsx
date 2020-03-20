import React, { ReactElement } from 'react';
import './InputTooltip.scss';
export interface InputTooltipProps {
  tooltipText: string,
  children: ReactElement
}

const InputTooltip: React.FC<InputTooltipProps> = ({tooltipText, children}) => {
  return (
    <div className="tooltip__holder">
      {children}
      <div className="tooltip__text-holder">
        <div className="tooltip__text">{tooltipText}</div>
      </div>
    </div>
  );
}

export default InputTooltip;