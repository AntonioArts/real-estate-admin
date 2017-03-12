import React from 'react';
import { TextInput } from '../../../../common/form/text-input';
import { AvatarInput } from '../../../../common/form/avatar-input';

//Utils
import { userUtils } from '../../../../../core/user/utils';

class CreateUser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			avatar: '/static/images/user/default.png',
			name: '',
			email: '',
			phone: '',
			validation: {}
		};

		this.handleAvatarChange = this.handleAvatarChange.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleAvatarChange(event) {
		if(event.target.files[0]) {
			this.props.uploadAvatar(event.target.files[0])
			.then(
				(response) => {this.setState({avatar: response.data.src})},
				(error) => {console.log('Error', error)}
			);
		}
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
			<div className="create-user-container">
				<form className="create-user-form" onSubmit={this.handleSubmit} autoComplete="off">
					<AvatarInput
						avatar={ this.state.avatar }
						onChange={ this.handleAvatarChange }
					/>
					<TextInput
						label="Name"
						name="name"
						type="text"
						value={this.state.name}
						onChange={ this.handleInputChange }
					/>
					<TextInput
						label="E-mail"
						name="email"
						type="text"
						value={this.state.email}
						onChange={ this.handleInputChange }
					/>
					<TextInput
						label="Phone"
						name="phone"
						type="text"
						value={this.state.phone}
						onChange={ this.handleInputChange }
					/>
					{ this.state.validate ? <div className="error-indicator">{this.state.validate}</div> : '' }
					{ this.state.error ? <div className="error-indicator">{this.state.error}</div> : '' }
					<button type="submit">Add Manager</button>
				</form>
			</div>
		)
	}
};

export default CreateUser;