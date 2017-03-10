import React, { PropTypes } from 'react';
import { authUtils } from '../../../../state/auth/utils';
import { TextInput } from '../../../common/form/text-input';

export default class LoginForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			validation: {}
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleOnBlur = this.handleOnBlur.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInputChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleOnBlur(event) {
		let name = event.target.name;
		let value = this.state[name];
		const error = authUtils.validateField(name, value);
		const validation = this.state.validation;
		validation[name] = error;
		this.setState({ validation });
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({ validation: {} });
		const { errors, isValid } = authUtils.validateForm(this.state);
		if(isValid) {
			this.props.authRequest(this.state);
		} else {
			this.setState({ validation: errors });
		}
	}

	render() {
		const { validation } = this.state;
		return (
			<form className="login-form" onSubmit={this.handleSubmit} autoComplete="off">
				<TextInput
					label="Email"
					name="email"
					type="text"
					value={ this.state.email }
					onChange={ this.handleInputChange }
					onBlur={ this.handleOnBlur }
					validation={ validation.email}
				/>
				<TextInput
					label="Password"
					name="password"
					type="password"
					value={ this.state.password }
					onChange={ this.handleInputChange }
					onBlur={ this.handleOnBlur }
					validation={ validation.password }
				/>
				{ this.props.errors ? <div className="error-indicator">{ this.props.errors }</div> : '' }
				<button type="submit" disabled={this.props.authProcessing}>Log In</button>
			</form>
		)
	}
}

LoginForm.propTypes = {
	authRequest: PropTypes.func.isRequired,
	authProcessing: PropTypes.bool.isRequired,
	errors: PropTypes.string
}