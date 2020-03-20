import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import AuthInfoSection from '../../../components/Auth/AuthInfoSection';
import { AuthServiceContext } from '../../../components/AuthServiceContext';
import '../../../scss/form.scss';
import AuthService from '../../../services/AuthService';
import DeatilsLayout from '../DeatilsLayout';
import LoginContainer from '../LoginContainer';
import SignUp from '../SignUpContainer';
import './AuthLayout.scss';
import { Urls } from '../../../utils/types';
import AddShopify from '../AddShopify';
import PrivateRoute from '../../../components/PrivateRoute';
export interface AuthLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = () => {
  const authService = new AuthService();

  return (
    <main className="main">
      <div className="auth__container">
        <div className="auth__content">
          <Logo className="svg-icon icon__logo" />
          <AuthServiceContext.Provider value={authService}>
            <Switch>
              <Route path={Urls.SIGNUP} component={SignUp} />
              <Route path={Urls.LOGIN} component={LoginContainer} />
              <Route path={Urls.DETAILS} component={DeatilsLayout} />
              <PrivateRoute path={Urls.SHOPIFY_INTEGRATION} component={AddShopify} />
            </Switch>
          </AuthServiceContext.Provider>
        </div>
      </div>
      <AuthInfoSection />
    </main>
  );
};

export default AuthLayout;
