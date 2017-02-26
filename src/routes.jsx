import React from 'react';
import { Route, IndexRoute } from 'react-router';
import LoginLayout from './layouts/Login';
import AdminLayout from './layouts/Admin';
import NotFoundLayout from './layouts/NotFound';
import Properties from './pages/Properties';
import Agenda from './pages/Agenda';
import Inquires from './pages/Inquires';
import Staff from './pages/Staff';
import Password from './pages/Password';
import NotFound from './pages/NotFound';

export const getRoutes = (store) => {
	const { userAuth } = store.getState();
	const isLogged = userAuth.isLogged;

	const requireAuth = (nextState, replace) => {
		console.log(1, isLogged);
		if (!isLogged) {
			replace({
				state: { nextPathname: nextState.location.pathname },
				pathname: '/login'
			})
		}
	}

	const isUserLogged = (nextState, replace) => {
		console.log(2, isLogged);
		if (isLogged) {
			replace({
				state: { nextPathname: nextState.location.pathname },
				pathname: '/'
			})
		}
	}

	return (
		<Route path="/">
			<Route path="/login" component={LoginLayout} onEnter={isUserLogged.bind(this)}/>
			<Route component={AdminLayout} onEnter={requireAuth.bind(this)}>
				<IndexRoute component={Properties}/>
				<Route path="/agenda" component={Agenda}/>
				<Route path="/inquires" component={Inquires}/>
				{ userAuth.user.role == 'admin' && <Route path="/staff" component={Staff}/> }
				<Route path="/password" component={Password}/>
			</Route>
			<Route path="*" component={NotFoundLayout}/>
		</Route>
	);
}