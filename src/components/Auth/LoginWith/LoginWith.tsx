import React from 'react';
import './LoginWith.scss';
export interface LoginWithProps {}

const LoginWith: React.FC<LoginWithProps> = () => {
  return (
    <div className="login-with active disabled">
      <span className="login-with__text">
        Or login with:
      </span>
      <button className="login-with__button">GOOGLE</button>
      <button className="login-with__button">LINKEDIN</button>
    </div>
  );
};

export default LoginWith;
