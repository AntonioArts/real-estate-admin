import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';
import { store } from './core/store';

//Auth
import { authUtils } from './core/auth/utils';

//Set user if localStorage JWT exists
authUtils.setUserSession(store);

ReactDOM.render(
	<Root store={store}/>,
	document.getElementById("root")
);