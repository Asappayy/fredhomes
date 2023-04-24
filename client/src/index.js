import React from "react";
import  ReactDOM  from "react-dom";
import { Provider } from "react-redux";
import App from './App';
import './index.css'


import reducers  from './reducers';
import thunk from 'redux-thunk';
import { legacy_createStore as createStore, applyMiddleware, compose } from '@reduxjs/toolkit';


const store = createStore(reducers, compose(applyMiddleware(thunk)));
// ReactDOM.render(<App />, document.getElementById('root'));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);