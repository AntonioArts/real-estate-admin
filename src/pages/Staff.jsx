import _ from 'lodash';
import axios from 'axios';
import React from 'react';
import StaffList from '../components/staff/StaffList';
import CreateStaffMember from '../components/staff/CreateStaffMember';

export default class Staff extends React.Component {
	constructor(props) {
		super(props);
		this.state = {'staff': []};

		this.createMember = this.createMember.bind(this);
		this.deleteMember = this.deleteMember.bind(this);
	}

	componentDidMount() {
		self = this;
		axios.get('http://immoicc.local/user/all')
		.then(function (response) {
			self.setState({staff: response.data});
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	createMember(newMember) {
		this.state.staff.unshift({
			id: newMember.id,
			email: newMember.email,
			name: newMember.name,
			role: 'manager'
		});
		this.setState({ staff: this.state.staff });
	}

	deleteMember(id) {
		var Sure = confirm("Are you sure?");
		if(Sure) {
			self = this;
			axios.get('http://immoicc.local/user/delete?id='+id)
			.then(function (response) {
				if(response.data.status == 'success') {
					_.remove(self.state.staff, member => member.id === id);
					self.setState({ staff: self.state.staff });
				} else {
					Alert("Something went wrong, please try again again");
				}
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	}

	render() {
		return (
			<div className="staff">
				<CreateStaffMember
					createMember={this.createMember}
				/>
				<StaffList
					staff={this.state.staff}
					deleteMember={this.deleteMember}
				/>
			</div>
		);
	}
};