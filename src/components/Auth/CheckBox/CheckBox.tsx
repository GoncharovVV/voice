import React, { ReactNode } from 'react';
import { ReactComponent as Check } from '../../../assets/icons/check.svg';
import './CheckBox.scss';

export interface CheckBoxProps {
  label: string;
  id: string;
  name: string;
  children?: ReactNode;
  value?: any;
  register?: any;
  checked?: boolean;
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({
  label,
  id,
  name,
  children,
  value,
  register,
  checked = false,
  handleOnChange = null
}) => {
  return (
    <>

        <div className="checkbox__holder">
          {handleOnChange ? (
            <input
              type="checkbox"
              className="checkbox"
              name={name}
              id={id}
              ref={register}
              value={value}
              defaultChecked={checked}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleOnChange(event)}
            />
          ) : (
            <input
              type="checkbox"
              className="checkbox"
              name={name}
              id={id}
              ref={register}
              value={value}
              defaultChecked={checked}
            />
          )}
          <label htmlFor={id} className="checkbox__label">
            <Check className="svg-icon checkbox__icon" />
            {label}
            {children}
          </label>
        </div>
      
    </>
  );
};

export default CheckBox;
