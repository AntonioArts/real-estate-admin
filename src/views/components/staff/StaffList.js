import _ from 'lodash';
import React, { PropTypes } from 'react';
import { LoadingContent } from '../ui/LoadingContent';
import { UpdateContentIcon } from '../ui/UpdateContentIcon';
import { LoadingError } from '../ui/LoadingError';
import StaffListMember from './StaffListMember';
import { connect } from 'react-redux';

class StaffList extends React.Component {
	render() {
		const props = _.omit(this.props, 'staff');
		return (
			<div className="staff-list">
				{ !this.props.fetching ? <UpdateContentIcon handleUpdate={this.props.handleUpdate}/> : '' }
				{ this.props.fetching ? <LoadingContent/> : '' }
				{ this.props.error && !this.props.fetching ? <LoadingError/> : '' }
				{ this.props.staff.map((member) => <StaffListMember key={member.id} {...member} {...props}/>) }
			</div>
		);
	}
};

StaffList.propType = {
	fetching: PropTypes.bool.isRequired,
	handleUpdate: PropTypes.func.isRequired
}

export default connect(state => ({
	fetching: state.staffMembers.fetching,
	error: state.staffMembers.error
}), null)(StaffList);