export const notificationActions = {

	//Types
	CREATE_NOTIFICATION: 'CREATE_NOTIFICATION',
	DELETE_NOTIFICATION: 'DELETE_NOTIFICATION',
	CLEAR_NOTIFICATIONS: 'CLEAR_NOTIFICATIONS',

	//Actions
	notificationCreate: message => {
		return dispatch => {
			message.id = Date.now();
			dispatch({type: notificationActions.CREATE_NOTIFICATION, message: message});
			// setTimeout(() => {
			// 	dispatch({type: notificationActions.CLEAR_NOTIFICATIONS});
			// }, 10000);
		}
	},

	notificationDelete: id => {
		return {
			type: notificationActions.DELETE_NOTIFICATION,
			id
		}
	}

}