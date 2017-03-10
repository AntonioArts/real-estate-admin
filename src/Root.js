import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//View->Layouts
import LoginLayout from './view/login';
import AdminLayout from './view/admin';
import NotFoundLayout from './view/not-found';
//View->Pages
import Properties from './view/admin/properties';
import Schedule from './view/admin/schedule';
import Inquires from './view/admin/inquires';
import Users from './view/admin/users';
import Settings from './view/admin/settings';

//Styles
import './view/styles/styles.scss';

export const Root = ({store}) => {
	const requireAuth = (nextState, replace) => {
		let currentState = store.getState();
		let isLogged = currentState.auth.isLogged;
		if (!isLogged) {
			replace({
				state: { nextPathname: nextState.location.pathname },
				pathname: '/login'
			})
		}
	}

	const isUserLogged = (nextState, replace) => {
		let currentState = store.getState();
		let isLogged = currentState.auth.isLogged;
		if (isLogged) {
			replace({
				state: { nextPathname: nextState.location.pathname },
				pathname: '/'
			})
		}
	}

	const adminOnly = (nextState, replace) => {
		let currentState = store.getState();
		let user = currentState.auth.user;
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
						<Route path="/schedule" component={Schedule}/>
						<Route path="/inquires" component={Inquires}/>
						<Route path="/users" component={Users} onEnter={adminOnly}/>
						<Route path="/settings" component={Settings}/>
					</Route>
					<Route path="*" component={NotFoundLayout}/>
				</Route>
			</Router>
		</Provider>
	);
};