import React from 'react';

export default class StaffListMember extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {name, role, email} = this.props;
		return (
			<div className="staff-list-member">
				<div className="member-info">
					<div className="member-name">{this.props.name}</div>
					<div className="member-role">{this.props.role} / {this.props.email}</div>
				</div>
				<div className="member-actions">
					<span className="member-action" onClick={this.props.deleteMember.bind(this, this.props.id)}>Delete</span>
				</div>
			</div>
		);
	}
};