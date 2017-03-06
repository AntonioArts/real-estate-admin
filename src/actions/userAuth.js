import { browserHistory } from 'react-router';
import axios from 'axios';
import qs from 'qs';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

//Types
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER';

//Actions
export function userLoginRequest(user) {
	return dispatch => {
		return axios.post('http://kievstones.local/api/user/login', qs.stringify(user), 'headers': {"Content-Type": "application/x-www-form-urlencoded"})
		.then(response => {
			const token = response.data.token;
			localStorage.setItem('jwtToken', token);
			setAuthorizationToken(token);
			dispatch(setCurrentUser(jwt.decode(token)));
			browserHistory.push('/');
		});
	}
}

export function setCurrentUser(user) {
	return {
		type: SET_CURRENT_USER,
		user: user
	}
}

export function unsetCurrentUser() {
	return dispatch => {
		localStorage.removeItem('jwtToken');
		setAuthorizationToken(false);
		dispatch({type: UNSET_CURRENT_USER});
		browserHistory.push('/login');
	}
}