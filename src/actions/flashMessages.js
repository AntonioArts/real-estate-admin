export const CREATE_FLASH_MESSAGE = 'CREATE_FLASH_MESSAGE';
export const DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';
export const CLEAR_FLASH_MESSAGES = 'CLEAR_FLASH_MESSAGES';

export function createFlashMessage(message) {
	return dispatch => {
		dispatch({type: CREATE_FLASH_MESSAGE, message: message});
		setTimeout(() => {
			dispatch({type: CLEAR_FLASH_MESSAGES});
		}, 10000);
	}
}

export function deleteFlashMessage(id) {
	return {
		type: DELETE_FLASH_MESSAGE,
		id
	}
}