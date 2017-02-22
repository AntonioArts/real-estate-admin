import React from 'react';
import axios from 'axios';
import querystring from "querystring";

export default class CreateStaffMember extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			name: '',
			validate: '',
			error: ''
		};

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

		if(this.state.email !== "" && this.state.name !== "") {
			const self = this;
			const data = querystring.stringify({
				email: this.state.email,
				name: this.state.name
			});
			axios.post('http://immoicc.local/user/create', data, 'headers': {"Content-Type": "application/x-www-form-urlencoded"})
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
			<div className="add-member-form">
				<form onSubmit={this.handleSubmit} autoComplete="off">
					<label>
					<span>Name:</span>
					<input
					name="name"
					type="text"
					value={this.state.name}
					onChange={this.handleInputChange} />
					</label>
					<label>
					<span>Email:</span>
					<input
					name="email"
					type="text"
					value={this.state.email}
					onChange={this.handleInputChange} />
					</label>
					<button type="submit">Add Manager</button>
					{ this.state.validate ? <div className="error-indicator">{this.state.validate}</div> : '' }
					{ this.state.error ? <div className="error-indicator">{this.state.error}</div> : '' }
				</form>
			</div>
		)
	}
};