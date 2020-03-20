import React from 'react';
import { ReactComponent as Email } from '../../../assets/icons/email.svg';
import NotifyStatic from '../../NotifyStatic';
export interface EmailVerifiedProps {}

const EmailVerified: React.FC<EmailVerifiedProps> = () => {
  return (
    <>
      <h1 className="auth__title">Thank you so much for registering</h1>
      <NotifyStatic text="Your email has been verified!" hideIcon={false} nameClass="email__notify">
        <Email className="svg-icon success-icon" />
      </NotifyStatic>
      <div className="form__row form__row-auth ">
        <p className="login__text">
          Congrats! You are on our wait list. We’ll hit you up once your turn is up. To expedite the
          process you can get a friend who is already approved to send us an email to{' '}
          <a href="mailto:yoav@voicefront.ai">yoav@voicefront.ai</a>
        </p>
      </div>
    </>
  );
};

export default EmailVerified;
