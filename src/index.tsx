import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry';
import { store, persistor } from './store/store';
import Loading from './components/Loading';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}> 
      <ErrorBoundry>
        <Router>
          <App />
        </Router>
      </ErrorBoundry>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
