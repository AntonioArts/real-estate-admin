import React from "react";
import axios from "axios";

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {email: '', password: '', validate: '', error: ''};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		this.setState({[name]: value});
	}

	handleSubmit(event) {
		event.preventDefault();
		if(this.state.email !== "" && this.state.password !== "") {
			var self = this;
			axios.post('/user/login', {
				email: this.state.email,
				password: this.state.password
			})
			.then(function (response) {
				self.handleResponse(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
		} else {
			this.setState({validate: 'Email and Password are reuired'});
		}
	}

	handleResponse(data) {
		this.setState({validate: ''});
		if(data.status == 'error') {
			switch(data.code.toString()) {
				case 'noemail':
				this.setState({error: 'That email doesn\'t exist'});
				;break;
				case 'wrongpassword':
				this.setState({error: 'You\'ve entered wrong password'});
				;break;
				case 'wrongformat':
				this.setState({error: 'You\'ve entered wrong email format'});
				;break;
			}
		} else {
			window.document.location = '/admin';
		}
	}

	render() {
		return (
			<form className="login-form" onSubmit={this.handleSubmit} autoComplete="off">
				<label>
				<span>Email:</span>
				<input
				name="email"
				type="text"
				value={this.state.email}
				onChange={this.handleInputChange} />
				</label>
				<label>
				<span>Password:</span>
				<input
				name="password"
				type="password"
				value={this.state.pasword}
				onChange={this.handleInputChange} />
				</label>
				{ this.state.validate ? <div className="error-indicator">{this.state.validate}</div> : '' }
				{ this.state.error ? <div className="error-indicator">{this.state.error}</div> : '' }
				<button type="submit">Log In</button>
			</form>
		)
	}
}