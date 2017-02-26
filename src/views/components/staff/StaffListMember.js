import React from 'react';

export default class StaffListMember extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {id, name, role, email, deleteMember} = this.props;
		return (
			<div className="staff-list-member">
				<div className="member-info">
					<div className="member-name">{name}</div>
					<div className="member-role">{role} / {email}</div>
				</div>
				<div className="member-actions">
					<span className="member-action" onClick={deleteMember.bind(this, id)}>Delete</span>
				</div>
			</div>
		);
	}
};