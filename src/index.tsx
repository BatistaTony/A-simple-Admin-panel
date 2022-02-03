import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store, persistor } from './store/index';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles/global-style';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyle />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
