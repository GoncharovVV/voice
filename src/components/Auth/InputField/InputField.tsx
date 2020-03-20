import React, { useState } from 'react';
import { ReactComponent as EyeBlocked } from '../../../assets/icons/eye-blocked.svg';
import { ReactComponent as Eye } from '../../../assets/icons/eye.svg';
import { ReactComponent as Check } from '../../../assets/icons/check.svg';
import { formErrors } from '../../../utils/constants/errors';
import './InputField.scss';
export interface InputFieldProps {
  register: any;
  errors?: any;
  label: string;
  type: string;
  name: string;
  placeholder?: string;
  isPassword?: boolean;
  isShopify?: boolean;
  fieldId?: string;
  handleOnChange?: any;
  showSuccessIcon?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  register,
  errors,
  label,
  type,
  name,
  placeholder,
  isShopify = false,
  fieldId = undefined,
  handleOnChange,
  showSuccessIcon = false,
  isPassword: password = false
}) => {
  const [inputType, setInputType] = useState<string>(type);
  const togglePassword = () => {
    setInputType(inputType === 'text' ? 'password' : 'text');
  };

  return (
    <>
      {!isShopify && (
        <label className="form__label" htmlFor={name}>
          {label}
        </label>
      )}
      <div className={`input__holder ${isShopify ? 'input__holder_shopify' : ''}`}>
        {password && (
          <button type="button" tabIndex={-1} onClick={togglePassword} className="toggle__password-type">
            {inputType === 'password' && <EyeBlocked className="svg-icon icon__toggle-password" />}
            {inputType === 'text' && <Eye className="svg-icon icon__toggle-password" />}
          </button>
        )} 
        {isShopify && (
          <label htmlFor={name} className="shopify__text">
            .myshopify.com
          </label>
        )}
        {showSuccessIcon && !errors[name] && (
          <div className="check-icon__holder">
            <Check className="svg-icon input-check-icon" />
          </div>
        )}
        {handleOnChange ? (
          <input
            className={`form__input ${errors[name] ? 'form__input_error' : ''} ${
              showSuccessIcon && !errors[name] ? 'form__input_check' : ''
            }`}
            type={inputType}
            name={name}
            id={fieldId ? fieldId : name}
            placeholder={placeholder ? placeholder : ''}
            ref={register}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleOnChange(event);
            }}
          />
        ) : (
          <input
            className={`form__input ${errors[name] ? 'form__input_error' : ''} ${
              showSuccessIcon && !errors[name] ? 'form__input_check' : ''
            }`}
            type={inputType}
            name={name}
            id={fieldId ? fieldId : name}
            placeholder={placeholder ? placeholder : ''}
            ref={register}
          />
        )}
      </div>
      {errors[name] && errors[name].type === 'pattern' && (
        <p className="form__error-text">{errors[name].message}</p>
      )}
      {errors[name] && errors[name].type && (
        <p className="form__error-text">{formErrors[errors[name].type]}</p>
      )}
    </>
  );
};

export default InputField;
