import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';
import './styles/main.scss';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
