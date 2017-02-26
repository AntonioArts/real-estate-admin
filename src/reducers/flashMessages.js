import { CREATE_FLASH_MESSAGE, DELETE_FLASH_MESSAGE, CLEAR_FLASH_MESSAGES } from '../actions/flashMessages';
import shortid from 'shortid';

export default (state = [], action = {}) => {
	switch(action.type) {
		case CREATE_FLASH_MESSAGE:
			return [
				...state,
				{
					id: shortid.generate(),
					type: action.message.type,
					message: action.message.message
				}
			];
		case DELETE_FLASH_MESSAGE:
			return state.filter((item) => item.id !== action.id);
		case CLEAR_FLASH_MESSAGES:
			return [];
		default:
			return state;
	}
}