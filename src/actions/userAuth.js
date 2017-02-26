import { browserHistory } from 'react-router';
import axios from 'axios';
import querystring from 'querystring';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';

//Types
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER';

//Actions
export function userLoginRequest(user) {
	return dispatch => {
		const data = querystring.stringify({
			email: user.email,
			password: user.password
		});
		return axios.post('http://immoicc.local/user/login', data, 'headers': {"Content-Type": "application/x-www-form-urlencoded"}).then(res => {
			const token = res.data.token;
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