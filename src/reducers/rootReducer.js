import { combineReducers } from 'redux';
import userAuth from './userAuth';
import flashMessages from './flashMessages';

export default combineReducers({
	userAuth,
	flashMessages
});