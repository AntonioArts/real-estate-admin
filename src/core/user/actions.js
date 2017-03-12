import axios from 'axios';

export const userActions = {

	//Types
	CREATE_USER: 'CREATE_USER',
	DELETE_USER: 'DELETE_USER',
	USERS_FETCHING: 'USERS_FETCHING',
	USERS_FETCHING_ERROR: 'USERS_FETCHING_ERROR',
	USERS_FETCHED: 'USERS_FETCHED',

	//UploadAvatar

	uploadAvatar: photo => {
		return dispatch => {
			const data = new FormData();
			data.append('photo', photo);
			return axios.post('http://realestate-admin.eu.ai/api/user/photoUpload', data, 'headers': {'Content-Type': photo.type})
		}
	},

	//Actions
	createUser: user => {
		return dispatch => {
			// axios.post('http://realestate-admin.eu.ai/api/user/create', qs.stringify(this.state), 'headers': {"Content-Type": "application/x-www-form-urlencoded"})
			// .then(response => {
			 		dispatch({type: userActions.CREATE_USER, payload: user});
			// })
			// .catch(error => {
			// 	console.log(error);
			// });
		}
	},

	deleteUser: id => {
		return dispatch => {
			// return axios.get('http://realestate-admin.eu.ai/api/user/delete?id='+id).then(response => {
					dispatch({type: userActions.DELETE_USER, id});
			// }).catch(error => {
			// 	dispatch({type: STAFF_MEMBERS_FETCHING_ERROR, payload: error});
			// });
		}
	},

	fetchUsers: () => {
		return dispatch => {
			dispatch({type: userActions.USERS_FETCHING});
			return axios.get('http://realestate-admin.eu.ai/api/user/all').then(response => {
				setTimeout(() => {
					dispatch({type: userActions.USERS_FETCHED, payload: response.data});
				},1500);
			}).catch(error => {
				dispatch({type: userActions.USERS_FETCHING_ERROR, payload: error});
			});
		}
	}

}