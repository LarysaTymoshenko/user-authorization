import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { rootStore } from './redux/store.js';
import './firebase';
// import { store } from '../src/redux/store';
import App from './components/App/App';
import './index.css';

export const Context = createContext(null);
// const auth = getAuth();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={rootStore.store}>
        <PersistGate loading={null} persistor={rootStore.persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
