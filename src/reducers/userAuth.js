import { SET_CURRENT_USER } from '../actions/userAuth';
import { UNSET_CURRENT_USER } from '../actions/userAuth';

export default (state = {isLogged: false, user: {}}, action = {}) => {
	switch(action.type) {
		case SET_CURRENT_USER:
			return {
					isLogged: true,
					user: action.user
				};
		case UNSET_CURRENT_USER:
			return {
					isLogged: false,
					user: {}
				};
		default:
			return state;
	}
}