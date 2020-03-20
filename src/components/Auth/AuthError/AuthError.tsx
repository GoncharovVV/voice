import React, { ReactNode } from 'react';
import { ReactComponent as Close } from '../../../assets/icons/close.svg';
import { ReactComponent as Error } from '../../../assets/icons/error.svg';
import { IClearFn } from '../../../utils/types';
import './AuthError.scss';
export interface AuthErrorProps {
  text?: string;
  onClose: IClearFn;
  children?: ReactNode;
}

const AuthError: React.FC<AuthErrorProps> = ({ text = '', onClose, children }) => {
  return (
    <div className="auth-error">
      <div className="auth-error__icon">
        <Error className="svg-icon icon__error" />
      </div>
      <p className="auth-error__text">{text.length > 0 ? text : children}</p>
      <button className="auth-error__close" type="button" onClick={onClose}>
        <Close className="svg-icon icon__close" />
      </button>
    </div>
  );
};

export default AuthError;
