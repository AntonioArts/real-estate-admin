import React from 'react';
import { TextInput } from '../../common/form/text-input';

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
		console.log(this.state);
	}

	render() {
		return (
			<div className="settings-container">
				<form onSubmit={this.handleSubmit} autoComplete="off">
					<TextInput
						label="Password"
						name="password"
						type="password"
						value={this.state.password}
						handleInputChange={this.handleInputChange}
					/>
					{ this.state.validate && <div className="error-indicator">{this.state.validate}</div> }
					<button type="submit">Change Password</button>
				</form>
			</div>
		);
	}
};