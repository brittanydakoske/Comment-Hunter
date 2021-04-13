import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch} from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={ baseUrl }>
    	<Switch>
        	<Route component={ App }/>
      	</Switch>
    </BrowserRouter>
  </React.StrictMode>
    , rootElement );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
