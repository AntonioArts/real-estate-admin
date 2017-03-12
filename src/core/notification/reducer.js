import { notificationActions } from './actions';

export function notification(state = [], action = {}) {
	switch(action.type) {
		case notificationActions.CREATE_NOTIFICATION:
			return [
				...state,
				action.message
			];
		case notificationActions.DELETE_NOTIFICATION:
			return state.filter((item) => item.id !== action.id);
		case notificationActions.CLEAR_NOTIFICATIONS:
			return [];
		default:
			return state;
	}
}