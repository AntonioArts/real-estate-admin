import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

//Views
import LoginLayout from './layouts/Login';
import AdminLayout from './layouts/Admin';
import NotFoundLayout from './layouts/NotFound';
import Properties from './pages/Properties';
import Agenda from './pages/Agenda';
import Inquires from './pages/Inquires';
import Staff from './pages/Staff';
import Password from './pages/Password';
import NotFound from './pages/NotFound';

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

	const { userAuth } = store.getState();
	return (
		<Provider store={store}>
			<Router history={browserHistory}>
				<Route path="/">
					<Route path="/login" component={LoginLayout} onEnter={isUserLogged}/>
					<Route component={AdminLayout} onEnter={requireAuth}>
						<IndexRoute component={Properties}/>
						<Route path="/agenda" component={Agenda}/>
						<Route path="/inquires" component={Inquires}/>
						{ userAuth.user.role == 'admin' && <Route path="/staff" component={Staff}/> }
						<Route path="/password" component={Password}/>
					</Route>
					<Route path="*" component={NotFoundLayout}/>
				</Route>
			</Router>
		</Provider>
	);
};