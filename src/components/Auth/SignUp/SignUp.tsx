import React from 'react';
import InputField from '../InputField';
import { passwordPattern, emailPattern } from '../../../utils/constants/constants';
import CheckBox from '../CheckBox';
import './SignUp.scss';
import { formErrors } from '../../../utils/constants/errors';
export interface SignUpProps {
  onSubmit: any;
  errors: any;
  watch: any;
  register: any;
}

const SignUp: React.FC<SignUpProps> = ({ onSubmit, watch, errors, register }) => {
  return (
    <form className="form form_short" onSubmit={onSubmit} noValidate={true} autoComplete="off">
      <div className="form__row form__row-auth">
        <InputField
          label="YOUR STORE’S NAME"
          type="text"
          name="storeName"
          errors={errors}
          placeholder="Acme Corporation"
          register={register({
            required: true
          })}
        />
      </div>
      <div className="form__row form__row-auth">
        <InputField
          label="YOUR WORK EMAIL"
          type="email"
          name="email"
          errors={errors}
          placeholder="john@acmecorp.com"
          register={register({
            required: true,
            pattern: emailPattern
          })}
        />
      </div>
      <div className="form__row form__row-auth">
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
      <div className="form__row form__row-auth">
        <InputField
          label="REPEAT PASSWORD"
          type="password"
          name="repeatPassword"
          errors={errors}
          isPassword={true}
          register={register({
            required: true,
            minLength: 8,
            pattern: passwordPattern,
            validate: (value: any) => value === watch('password')
          })}
        />

      </div>
      <div className="form__row form__row-auth form__row_checkbox">
        <CheckBox label="" id="terms" name="terms" register={register({ required: true })}>
          <div className="terms-link__holder">
            <span className="form__bottom-text">I accept the</span>
            <a href="https://voicefront-assets.s3.amazonaws.com/docs/terms-of-service.pdf" target="_blank" rel="noopener noreferrer" className="terms__link">
              Terms of Service
            </a>
          </div>
        </CheckBox>
        {errors['terms'] && errors['terms'].type && (
          <p className="form__error-text">{formErrors[errors['terms'].type]}</p>
        )}
      </div>
      <div className="form__row form__row-auth">
        <button type="submit" className="button button__submit">
          START YOUR FREE TRIAL
        </button>
      </div>
    </form>
  );
};

export default SignUp;
