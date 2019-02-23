import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from './store';
import Navigation from './presentational/navigation.component';
import DevTools from './DevTools';
import routes from './routes';

ReactDOM.render(
	<Provider store = {store}>
		<Router history={hashHistory} routes={routes} />
		<DevTools />
	</Provider>,
	document.getElementById('root'));

serviceWorker.unregister();
