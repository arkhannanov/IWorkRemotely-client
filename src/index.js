import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
// import 'semantic-ui-css/semantic.css';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import AppContainer from "./AppContainer";


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  </BrowserRouter>, document.getElementById('root'));


// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();