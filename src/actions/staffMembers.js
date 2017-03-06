import axios from 'axios';

//Types
export const CREATE_STAFF_MEMBER = 'CREATE_STAFF_MEMBER';
export const DELETE_STAFF_MEMBER = 'DELETE_STAFF_MEMBER';
export const STAFF_MEMBERS_FETCHING = 'STAFF_MEMBERS_FETCHING';
export const STAFF_MEMBERS_FETCHING_ERROR = 'STAFF_MEMBERS_FETCHING_ERROR';
export const STAFF_MEMBERS_FETCHED = 'STAFF_MEMBERS_FETCHED';

//Actions
export function createStaffMember(user) {
	return dispatch => {
		// axios.post('http://kievstones.local/api/user/create', qs.stringify(this.state), 'headers': {"Content-Type": "application/x-www-form-urlencoded"})
		// .then(response => {
		 		dispatch({type: CREATE_STAFF_MEMBER, payload: user});
		// })
		// .catch(error => {
		// 	console.log(error);
		// });
	}
}

export function deleteStaffMember(id) {
	return dispatch => {
		// return axios.get('http://kievstones.local/api/user/delete?id='+id).then(response => {
				dispatch({type: DELETE_STAFF_MEMBER, id});
		// }).catch(error => {
		// 	dispatch({type: STAFF_MEMBERS_FETCHING_ERROR, payload: error});
		// });
	}
}

export function fetchStaffMembers() {
	return dispatch => {
		dispatch({type: STAFF_MEMBERS_FETCHING});
		return axios.post('http://kievstones.local/api/user/all').then(response => {
			setTimeout(() => {
				dispatch({type: STAFF_MEMBERS_FETCHED, payload: response.data});
			},1500);
		}).catch(error => {
			dispatch({type: STAFF_MEMBERS_FETCHING_ERROR, payload: error});
		});
	}
}