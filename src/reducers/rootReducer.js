import { combineReducers } from 'redux';
import userAuth from './userAuth';
import flashMessages from './flashMessages';
import staffMembers from './staffMembers';

export default combineReducers({
	userAuth,
	flashMessages,
	staffMembers
});