import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import epicMiddleware, { rootEpic } from '../middleware';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'installationLink',
    'verefiedEmail',
    // 'amazonPayDetails',
    'amazonPayModalOrder',
    'basicDialogueMessages',
    'toggleMenu',
    'vioceToPlay',
    'conversationTools',
    'editTool',
    'toolType',
    'generalSettings'
  ]
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistedReducer = persistReducer(persistConfig, reducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic);

const persistor = persistStore(store);

export { store, persistor };
