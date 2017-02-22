import _ from 'lodash';
import React from 'react';
import StaffListMember from './StaffListMember';

export default class StaffList extends React.Component {
	render() {
		const props = _.omit(this.props, 'staff');
		return (
			<div className="staff-list">
				{ this.props.staff.map((member) => <StaffListMember key={member.id} {...member} {...props}/>) }
			</div>
		);
	}
};