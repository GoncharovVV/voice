import React, { useEffect } from 'react';
import { ReactComponent as Email } from '../../../assets/icons/email.svg';
import { emailPattern, passwordPattern } from '../../../utils/constants/constants';
import { Urls } from '../../../utils/types';
import NotifyStatic from '../../NotifyStatic';
import AuthError from '../AuthError';
import FormBottom from '../FormBottom';
import InputField from '../InputField';
import {ReactComponent as NotActiveIcon} from '../../../assets/icons/email.svg';
import './Login.scss';
export interface LoginProps {
  onSubmit: any;
  register: any;
  errors: any;
  setValue: any;
  showError: boolean;
  notActive: boolean;
  showVerified?: boolean;
  errorText: string;
  notActiveText?: string;
  emailValue?: string;
  verefiedText?: string;
  triggerValidation: any;
  onClose: () => void;
  onForgotClick: () => void;
}

const Login: React.FC<LoginProps> = ({
  register,
  onSubmit,
  errors,
  showError,
  onClose,
  errorText,
  notActive,
  setValue,
  showVerified,
  onForgotClick,
  notActiveText = '',
  verefiedText = '',
  emailValue = '',
  triggerValidation
}) => {
  useEffect(() => {
    if (emailValue.length > 0) {
      setValue('email', emailValue);
    }
  }, [emailValue, setValue]);
  const handleOnChangeEmail = () => {
    triggerValidation('email');
  };
  return (
    <div className="login__container">
      <h1 className="auth__title">Login</h1>
      <form className="form form_short" onSubmit={onSubmit} noValidate={true}>
        <div className="form__row form__row-auth">
          <InputField
            label="YOUR WORK EMAIL"
            type="email"
            name="email"
            errors={errors}
            placeholder="john@acmecorp.com"
            handleOnChange={handleOnChangeEmail}
            register={register({
              required: true,
              pattern: emailPattern
            })}
          />
        </div>
        <div className="form__row form__row-auth login__password-row">
          <InputField
            label="PASSWORD"
            type="password"
            name="password"
            errors={errors}
            isPassword={true}
            register={register({
              required: true,
              minLength: 8,
              pattern: passwordPattern
            })}
          />
        </div>
        <div className="form__row form__row-auth text_right">
          <button type="button" className="form__forgot-pass" onClick={onForgotClick}>
            Forgot password?
          </button>
        </div>
        {notActive && (
          <div className="form__row form__row-auth ">
            {/* <p className="login__text">{notActiveText}</p> */}
            <NotifyStatic hideIcon={false} text={notActiveText} >
              <NotActiveIcon className="svg-icon success-icon"/>
            </NotifyStatic>
          </div>
        )}
        {showVerified && (
          <>
            <div className="form__row form__row-auth ">
              <NotifyStatic text={verefiedText} hideIcon={false}>
                <Email className="svg-icon success-icon" />
              </NotifyStatic>
            </div>
          </>
        )}
        {showError && (
          <div className="form__row form__row-auth ">
            <AuthError onClose={onClose} text={errorText} />
          </div>
        )}
        <div className="form__row form__row-auth">
          <button type="submit" className="button button__submit">
            LOGIN
          </button>
        </div>
        {/* <div className="form__row form__row-auth">
        <LoginWith />
      </div> */}
        <FormBottom
          text="Don’t have an account? "
          link={{ linkTitle: 'SIGN UP', linkUrl: `${Urls.SIGNUP}` }}
        />
      </form>
    </div>
  );
};

export default Login;
