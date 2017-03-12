import { browserHistory } from 'react-router';
import { authUtils } from './utils';
import axios from 'axios';
import qs from 'qs';
import jwt from 'jsonwebtoken';

//Redux actions
import { notificationActions } from '../notification/actions';

export const authActions = {

	//Types
	AUTH_PROCESS: 'AUTH_PROCESS',
	AUTH_PROCESS_SUCCESS: 'AUTH_PROCESS_SUCCESS',
	AUTH_PROCESS_ERROR: 'AUTH_PROCESS_ERROR',
	SET_USER: 'SET_USER',
	UNSET_USER: 'UNSET_USER',

	//Actions
	authRequest: user => {
		return dispatch => {
			dispatch({type: authActions.AUTH_PROCESS});
			setTimeout(() => {
				axios.post('http://realestate-admin.eu.ai/api/user/login', qs.stringify(user), 'headers': {"Content-Type": "application/x-www-form-urlencoded"})
				.then(response => {
					dispatch({type: authActions.AUTH_PROCESS_SUCCESS});
					const token = response.data.token;
					localStorage.setItem('jwtToken', token);
					authUtils.setRequestAuthorizationToken(token);
					dispatch(authActions.setUser(jwt.decode(token)));
					browserHistory.push('/');
					dispatch(notificationActions.notificationCreate({
						type: 'success',
						message: 'You\'ve logged successfully'
					}));
				})
				.catch(error => {
					dispatch({
						type: authActions.AUTH_PROCESS_ERROR,
						error: error.response ? error.response.data.code.toString() : 'Something went wrong, please try again.'
					});
				});
			}, 1500);
		}
	},

	setUser: user => {
		return {
			type: authActions.SET_USER,
			user: user
		}
	},

	unsetUser: () => {
		return dispatch => {
			localStorage.removeItem('jwtToken');
			authUtils.setRequestAuthorizationToken(false);
			dispatch({type: authActions.UNSET_USER});
			browserHistory.push('/login');
		}
	}

}