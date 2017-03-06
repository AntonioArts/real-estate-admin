import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Views
import LoginLayout from './views/layouts/Login';
import AdminLayout from './views/layouts/Admin';
import NotFoundLayout from './views/layouts/NotFound';
import Properties from './views/pages/Properties';
import Agenda from './views/pages/Agenda';
import Inquires from './views/pages/Inquires';
import Staff from './views/pages/Staff';
import Settings from './views/pages/Settings';
import NotFound from './views/pages/NotFound';

//Styles
import './styles/styles.scss';

export const Root = ({store}) => {
	const requireAuth = (nextState, replace) => {
		let currentState = store.getState();
		let isLogged = currentState.userAuth.isLogged;
		if (!isLogged) {
			replace({
				state: { nextPathname: nextState.location.pathname },
				pathname: '/login'
			})
		}
	}

	const isUserLogged = (nextState, replace) => {
		let currentState = store.getState();
		let isLogged = currentState.userAuth.isLogged;
		if (isLogged) {
			replace({
				state: { nextPathname: nextState.location.pathname },
				pathname: '/'
			})
		}
	}

	const adminOnly = (nextState, replace) => {
		let currentState = store.getState();
		let user = currentState.userAuth.user;
		if (user.role !== 'admin') {
			replace({
				state: { nextPathname: nextState.location.pathname },
				pathname: '/noaccess'
			})
		}
	}

	return (
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/">
					<Route path="/login" component={LoginLayout} onEnter={isUserLogged}/>
					<Route component={AdminLayout} onEnter={requireAuth}>
						<IndexRoute component={Properties}/>
						<Route path="/agenda" component={Agenda}/>
						<Route path="/inquires" component={Inquires}/>
						<Route path="/staff" component={Staff} onEnter={adminOnly}/>
						<Route path="/settings" component={Settings}/>
					</Route>
					<Route path="*" component={NotFoundLayout}/>
				</Route>
			</Router>
		</Provider>
	);
};