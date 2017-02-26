import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {email: '', password: '', validate: '', error: ''};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({[event.target.name]: event.target.value});

		if(this.state.validate) {
			this.setState({validate: ''});
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		if(this.state.email !== "" && this.state.password !== "") {
			this.props.userLoginRequest(this.state).then(
				( data ) => {
					this.props.createFlashMessage({
						type: 'success',
						message: 'You\'ve logged successfully'
					});
				},
				( err ) => { this.handleErrorResponse(err.response.data) }
			);
		} else {
			this.setState({validate: 'Email and Password are reuired'});
		}
	}

	handleErrorResponse(data) {
		this.setState({validate: ''});

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
				{ this.state.validate && <div className="error-indicator">{this.state.validate}</div> }
				{ this.state.error && <div className="error-indicator">{this.state.error}</div> }
				<button type="submit">Log In</button>
			</form>
		)
	}
}

LoginForm.propTypes = {
	userLoginRequest: PropTypes.func.isRequired,
	createFlashMessage: PropTypes.func.isRequired
}