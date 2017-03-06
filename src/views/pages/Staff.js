import _ from 'lodash';
import axios from 'axios';
import React, { PropTypes } from 'react';
import StaffList from '../components/staff/StaffList';
import CreateStaffMember from '../components/staff/CreateStaffMember';
import { connect } from 'react-redux';
import { createStaffMember, deleteStaffMember, fetchStaffMembers } from '../../actions/staffMembers';

class Staff extends React.Component {
	constructor(props) {
		super(props);

		this.createMember = this.createMember.bind(this);
		this.deleteMember = this.deleteMember.bind(this);
		this.handleForceListUpdate = this.handleForceListUpdate.bind(this);
	}

	componentDidMount() {
		if(this.props.users.length == 0) {
			this.props.fetchStaffMembers();
		}
	}

	handleForceListUpdate() {
		this.props.fetchStaffMembers();
	}

	createMember(user) {
		this.props.createStaffMember(user);
	}

	deleteMember(id) {
		var Sure = confirm("Are you sure?");
		if(Sure) {
			this.props.deleteStaffMember(id)
		}
	}

	render() {
		return (
			<div className="staff">
				<CreateStaffMember
					createMember={ this.createMember }
				/>
				<StaffList
					staff={ this.props.users }
					deleteMember={ this.deleteMember }
					handleUpdate={ this.handleForceListUpdate }
				/>
			</div>
		);
	}
};

Staff.propType = {
	users: PropTypes.array.isRequired
}

export default connect(state => ({users: state.staffMembers.users}), { createStaffMember, deleteStaffMember, fetchStaffMembers })(Staff);