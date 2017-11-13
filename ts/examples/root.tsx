import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux';
import { routes } from './core/routes'
import * as bootstrap from './core/bootstrap';
import DevTools from 'lib/core/DevTools';

const store = bootstrap.configureStore()

const history = syncHistoryWithStore(hashHistory, store)
const devMode = process.env.NODE_ENV !== 'production';

ReactDOM.render(
	<div>
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>		

		<DevTools store={store} />
	</div>, document.getElementById('app'));

//{ devMode && <DevTools store={store} /> }	