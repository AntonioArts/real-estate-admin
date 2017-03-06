import React from 'react';
import { TextInput } from '../form/TextInput';
import { AvatarInput } from '../form/AvatarInput';

import axios from 'axios';
import qs from 'qs';

export default class CreateStaffMember extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			avatar: '/static/images/user/default.png',
			name: '',
			email: '',
			phone: '',
			validate: '',
			error: ''
		};

		this.handleAvatarChange = this.handleAvatarChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleAvatarChange(src) {
		this.setState({avatar: src});
	}

	handleInputChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();

		if(this.state.email !== "" && this.state.name !== "") {
			this.props.createMember({id: 8, avatar: this.state.avatar, name: this.state.name, email: this.state.email, phone: this.state.phone });
		} else {
			this.setState({validate: 'Name and Email are required'});
		}
	}

	handleResponse(data) {
		this.setState({validate: ''});
		if(data.status == 'error') {
			switch(data.code.toString()) {
				case 'emailbusy':
				this.setState({error: 'That email already taken'});
				;break;
				case 'wrongformat':
				this.setState({error: 'You\'ve entered wrong email format'});
				;break;
			}
		} else {
			this.setState({error: ''});
			this.props.createMember({id: data.userid, email: this.state.email, name: this.state.name});
			this.setState({email: '', name: ''});
		}
	}

	render() {
		return (
			<div className="add-member-container">
				<form className="add-member-form" onSubmit={this.handleSubmit} autoComplete="off">
					<AvatarInput
						avatar={ this.state.avatar }
						handleAvatarChange={ this.handleAvatarChange }
					/>
					<TextInput
						label="Name"
						name="name"
						type="text"
						value={this.state.name}
						handleInputChange={ this.handleInputChange }
					/>
					<TextInput
						label="E-mail"
						name="email"
						type="text"
						value={this.state.email}
						handleInputChange={ this.handleInputChange }
					/>
					<TextInput
						label="Phone"
						name="phone"
						type="text"
						value={this.state.phone}
						handleInputChange={ this.handleInputChange }
					/>
					{ this.state.validate ? <div className="error-indicator">{this.state.validate}</div> : '' }
					{ this.state.error ? <div className="error-indicator">{this.state.error}</div> : '' }
					<button type="submit">Add Manager</button>
				</form>
			</div>
		)
	}
};