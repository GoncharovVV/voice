import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
import Analytics from '../../pages/Analytics';
import AuthLayout from '../../pages/Auth/AuthLayout';
import UploadStoreContainer from '../../pages/Auth/UploadStoreContainer';
import Billing from '../../pages/Billing';
import ChoosePlan from '../../pages/ChoosePlan';
import Discounts from '../../pages/Discounts';
import Home from '../../pages/Home';
import Insights from '../../pages/Insights';
import MyVoiceLayout from '../../pages/MyVoiceLayout';
import NotFound from '../../pages/NotFound';
import OrdersMade from '../../pages/OrdersMade';
import Referrals from '../../pages/Referrals';
import SettingsLayout from '../../pages/SettingsLayout';
import SwitchStore from '../../pages/SwitchStore';
import User from '../../pages/User';
import { closeMenuAction } from '../../store/actions/toggleMenuActions';
import { checkHomePageOnLoad } from '../../utils/helpers';
import { Urls } from '../../utils/types';
import PrivateRoute from '../PrivateRoute';
import './App.scss';

const App: React.FC = () => {
  const [wrapperClassName, setWrapperClassName] = useState<string[]>(['wrapper']);
  const dispatch = useDispatch();
  let history = useHistory();
  const handleSetClassName = () => {
    setWrapperClassName((x: string[]) => {
      const newClass = [...x];
      if (x.indexOf('wrapper_home') === -1) newClass.push('wrapper_home');
      return newClass;
    });
  };
  useEffect(() => {
    history.listen(() => {
      console.log('Cloase In APP  ');
      dispatch(closeMenuAction());
    });
  }, [dispatch, history]);
  useEffect(() => {
    history.listen((location) => {
      if (location && location.pathname.length === 1) {
        handleSetClassName();
      } else {
        setWrapperClassName(['wrapper']);
      }
    });
    if (checkHomePageOnLoad()) handleSetClassName();
  }, [history]);
  return (
    <div className={wrapperClassName.join(' ')}>
      <Switch>
        <PrivateRoute path={Urls.HOME} component={Home} exact={true} />
        <PrivateRoute path={Urls.ANALYTICS} component={Analytics} />
        <PrivateRoute path={Urls.INSIGHTS} component={Insights} />
        <PrivateRoute path={Urls.SETTINGS} component={SettingsLayout} />
        <PrivateRoute path={Urls.ORDERS_MADE} component={OrdersMade} />
        <PrivateRoute path={Urls.DISCOUNTS} component={Discounts} />
        <PrivateRoute path={Urls.REFERRALS} component={Referrals} />
        <PrivateRoute path={Urls.VOICE} component={MyVoiceLayout} />
        <PrivateRoute path={Urls.CHOOSE_PLAN} component={ChoosePlan} />
        <PrivateRoute path={Urls.BILLING} component={Billing} />
        <PrivateRoute path={Urls.USER} component={User} />
        <PrivateRoute path={Urls.SWITCH} component={SwitchStore} />
        <Route path={Urls.ADD_STORE} component={UploadStoreContainer} />
        <Route path={Urls.AUTH} component={AuthLayout} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
