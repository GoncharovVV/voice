import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';

import { Urls } from '../../utils/types';
import MainLayout from '../MainLayout';
import NotFound from '../NotFound';
import GeneralSettings from './GeneralSettings';
import GettingPaid from './GettingPaid';
import Seo from './Seo';
import './SettingsLayout.scss';
import TestAndPlay from './TestAndPlay';

export interface SettingsLayoutProps {}

const SettingsLayout: React.FC<SettingsLayoutProps> = () => {
  return (
    <MainLayout>
      <section className="main__middle">
        <Switch>
          <PrivateRoute exact={true} path={Urls.GENERAL_SETTINGS} component={GeneralSettings} />
          <PrivateRoute exact={true} path={Urls.SEO} component={Seo} />
          <PrivateRoute exact={true} path={Urls.TEST_AND_PLAY} component={TestAndPlay} />
          <PrivateRoute exact={true} path={Urls.GETTING_PAID} component={GettingPaid} />
          <Route component={NotFound} />
        </Switch>
      </section>
    </MainLayout>
  );
};

export default SettingsLayout;
