import { combineReducers } from 'redux';
import { auth } from './auth';
import { notification } from './notification';
import { user } from './user';

export default combineReducers({
	auth,
	notification,
	user
});