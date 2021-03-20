import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ResizeHandler from './ui-components/ResizeHandler';
import { Provider } from 'react-redux';
import store from './reducers/store';

ReactDOM.render(
  <Provider store={store}>
    <ResizeHandler/>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
