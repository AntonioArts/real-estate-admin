import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './Root';

//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

//Auth
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/userAuth';
import jwt from 'jsonwebtoken';

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);

if(localStorage.jwtToken) {
	setAuthorizationToken(localStorage.jwtToken);
	store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
};

ReactDOM.render(
	<Root store={store}/>,
	document.getElementById("root")
);