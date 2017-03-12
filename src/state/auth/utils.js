import jwt from 'jsonwebtoken';
import axios from 'axios';
import validator from 'validator';
import isEmpty from 'lodash/isEmpty';

//Redux actions
import { authActions } from './actions';

export const authUtils = {

	validateField: (name, value) => {
		let error = null;

		if(validator.isEmpty(value)) {
			let upperCaseFirst = name.charAt(0).toUpperCase() + name.slice(1);
			error = upperCaseFirst+' is required';
		}

		if(name == 'email' && !validator.isEmail(value)) {
			error = 'Email is invalid';
		}

		return error;
	},

	validateForm: form => {
		let errors = {};

		if(validator.isEmpty(form.email)) {
			errors.email = 'Email is required';
		}

		if(!validator.isEmail(form.email)) {
			errors.email = 'Email is invalid';
		}

		if(validator.isEmpty(form.password)) {
			errors.password = 'Password is required';
		}

		return {
			errors,
			isValid: isEmpty(errors)
		}
	},

	setRequestAuthorizationToken: token => {
		if(token) {
			axios.defaults.headers.common['Authorization'] = 'Bearer '+token;
		} else {
			delete axios.defaults.headers.common['Authorization'];
		}
	},

	setUserSession: (store) => {
		if(localStorage.jwtToken) {
			authUtils.setRequestAuthorizationToken(localStorage.jwtToken);
			store.dispatch(authActions.setUser(jwt.decode(localStorage.jwtToken)));
		}
	}

}