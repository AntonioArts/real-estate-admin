import { authActions } from './actions';

const initialState = {
	authProcessing: false,
	authErrors: null,
	isLogged: false,
	user: {}
}

export function auth(state = initialState, action = {}) {
	switch(action.type) {
		case authActions.AUTH_PROCESS:
			return {
					...state,
					authProcessing: true,
					authErrors: null
				};
		case authActions.AUTH_PROCESS_SUCCESS:
			return {
					...state,
					authProcessing: false
				};
		case authActions.AUTH_PROCESS_ERROR:
			return {
					...state,
					authProcessing: false,
					authErrors: action.error
				};
		case authActions.SET_USER:
			return {
					...state,
					isLogged: true,
					user: action.user
				};
		case authActions.UNSET_USER:
			return {
					...state,
					isLogged: false,
					user: {}
				};
		default:
			return state;
	}
}