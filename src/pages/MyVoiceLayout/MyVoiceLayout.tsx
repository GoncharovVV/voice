import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute';
import { Urls } from '../../utils/types';
import NotFound from '../NotFound';
import ChooseVoice from './ChooseVoice';
import BrandMessages from './BrandMessages';
import ConversationalTools from './ConversationalTools';
import MainLayout from '../MainLayout';
export interface MyVoiceLayoutProps {}

const MyVoiceLayout: React.FC<MyVoiceLayoutProps> = () => {
  return (
    <MainLayout>
      <section className="main__middle">
        <Switch>
          <PrivateRoute exact={true} path={Urls.CHOOSE_YOUR_VOICE} component={ChooseVoice} />
          <PrivateRoute exact={true} path={Urls.BRAND_LANGUAGE} component={BrandMessages} />
          <PrivateRoute
            exact={true}
            path={Urls.CONVERSATION_TOOLS}
            component={ConversationalTools}
          />
          <Route component={NotFound} />
        </Switch>
      </section>
    </MainLayout>
  );
};

export default MyVoiceLayout;
