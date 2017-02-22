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

export default (
	<Route path="/">
		<Route component={LoginLayout}>
			<Route path="/login"/>
		</Route>
		<Route component={AdminLayout}>
			<IndexRoute component={Properties}/>
			<Route path="/agenda" component={Agenda}/>
			<Route path="/inquires" component={Inquires}/>
			<Route path="/staff" component={Staff}/>
			<Route path="/password" component={Password}/>
		</Route>
		<Route path="*" component={NotFoundLayout}/>
	</Route>
);