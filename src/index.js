import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';
import { store } from './state/store';

//Auth
import { authUtils } from './state/auth/utils';

//Set user if localStorage JWT exists
authUtils.setUserSession(store);

ReactDOM.render(
	<Root store={store}/>,
	document.getElementById("root")
);