import React, { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ReactComponent as Lock } from '../../../assets/icons/lock.svg';
import { AuthServiceContext } from '../../../components/AuthServiceContext';
import { emailPattern } from '../../../utils/constants/constants';
import NotifyStatic from '../../NotifyStatic';
import InputField from '../InputField';
import './ForgotPassword.scss';

export interface ForgotPasswordProps {
  emailValue: string;
  onSuccess: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ emailValue, onSuccess }) => {
  const { register, errors, handleSubmit, setValue, watch } = useForm<any>();
  const { getMyPassword } = useContext(AuthServiceContext);
  const email = watch('email');
  useEffect(() => {
    if (emailValue) {
      setValue('email', emailValue);
    }
  }, [emailValue, setValue]);
  const onSubmit = handleSubmit((data: any) => {
    console.log(data);
    getMyPassword(email).then((data: any) => {
      if (data) {
        onSuccess();
      }
    });
  });
  return (
    <div className="forgot__holder">
      <NotifyStatic
        text="It’s alright. We can always reset it to a new one."
        hideIcon={false}
        nameClass="email__notify"
      >
        <Lock className="svg-icon forgot__icon" />
      </NotifyStatic>
      <form onSubmit={onSubmit} noValidate={true}>
        <div className="form__row form__row-auth">
          <InputField
            label="YOUR WORK EMAIL"
            type="email"
            name="email"
            errors={errors}
            placeholder="john@acmecorp.com"
            fieldId="emailRecover"
            register={register({
              required: true,
              pattern: emailPattern
            })}
          />
        </div>
        <div className="form__row-auth">
          <button type="submit" className="button button__submit">
            RESET PASSWORD
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
