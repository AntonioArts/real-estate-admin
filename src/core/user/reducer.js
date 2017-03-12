import { userActions } from './actions';

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}

export function user(state = initialState, action = {}) {
	switch(action.type) {
		case userActions.CREATE_USER:
			console.log(action.payload);
			return {
				...state,
				users: [...state.users, action.payload]
			};
		case userActions.DELETE_USER:
			return {
				...state,
				users: state.users.filter((member) => member.id !== action.id)
			};
		case userActions.USERS_FETCHING:
			return {
				...state,
				fetching: true
			};
		case userActions.USERS_FETCHING_ERROR:
			return {
				...state,
				fetching: false,
				error: action.payload
			};
		case userActions.USERS_FETCHED:
			return {
				...state,
				fetching: false, error: null, users: action.payload
			};
		default:
			return state;
	}
}