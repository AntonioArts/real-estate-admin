import axios from 'axios';
import React from 'react';
import { browserHistory } from 'react-router';

export default class Password extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			password: '',
			validate: ''
		};

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		this.setState({password: target.value});
	}

	handleSubmit(event) {
		event.preventDefault();
		if(this.state.password !== "") {
			var self = this;
			axios.post('/user/password', {
				password: this.state.password
			})
			.then(function (response) {
				if(response.data.status == 'success') {
					browserHistory.push('/admin');
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		} else {
			this.setState({validate: 'Field is reuired'});
		}
	}

	render() {
		return (
			<div className="password-form">
				<form onSubmit={this.handleSubmit} autoComplete="off">
					<label>
					<span>Password:</span>
					<input
					name="password"
					type="text"
					value={this.state.password}
					onChange={this.handleInputChange} />
					</label>
					<button type="submit">Change Password</button>
					{ this.state.validate ? <div className="error-indicator">{this.state.validate}</div> : '' }
				</form>
			</div>
		);
	}
};