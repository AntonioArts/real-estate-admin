import { CREATE_STAFF_MEMBER, DELETE_STAFF_MEMBER, STAFF_MEMBERS_FETCHING, STAFF_MEMBERS_FETCHING_ERROR, STAFF_MEMBERS_FETCHED } from '../actions/staffMembers';

const initialState = {
	fetching: false,
	fetched: false,
	users: [],
	error: null
}

export default (state = initialState, action = {}) => {
	switch(action.type) {
		case CREATE_STAFF_MEMBER:
			console.log(action.payload);
			return {
				...state,
				users: [...state.users, action.payload]
			};
		case DELETE_STAFF_MEMBER:
			return {
				...state,
				users: state.users.filter((member) => member.id !== action.id)
			};
		case STAFF_MEMBERS_FETCHING:
			return {
				...state,
				fetching: true
			};
		case STAFF_MEMBERS_FETCHING_ERROR:
			return {
				...state,
				fetching: false,
				error: action.payload
			};
		case STAFF_MEMBERS_FETCHED:
			return {
				...state,
				fetching: false, error: null, users: action.payload
			};
		default:
			return state;
	}
}