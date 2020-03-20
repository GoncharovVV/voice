import React, { ReactNode } from 'react';
import './RadioButton.scss';

export interface RadioButtonProps {
  label: string;
  id: string;
  name: string;
  value: string;
  children?: ReactNode;
  register?: any;
  handleOnchange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  id,
  name,
  children,
  value,
  register,
  handleOnchange
}) => {
  return (
    <div className="radio__holder">
      <>
      { register && <input type="radio" className="radio" value={value} name={name} id={id} ref={register} /> }
      { handleOnchange &&
        <input
          type="radio"
          className="radio"
          value={value}
          name={name}
          id={id}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnchange(event)}
        />
      }
      </>
      <label htmlFor={id} className="rado__label">
        {label}
        {children}
      </label>
    </div>
  );
};

export default RadioButton;
