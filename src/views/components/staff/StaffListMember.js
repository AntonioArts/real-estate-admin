import React from 'react';

export default class StaffListMember extends React.Component {
	constructor(props) {
		super(props);

		this.state = {isEditing: false}
	}

	changeRenderCondition() {
		this.setState(prevState => ({
		  isEditing: !prevState.isEditing
		}));
	}

	renderCondition() {
		if(this.state.isEditing === false) {
			return (
				<div>
					<div className="member-actions">
						<span className="member-action" onClick={this.changeRenderCondition.bind(this)}>Edit</span>
						<span className="member-action" onClick={this.props.deleteMember.bind(this, this.props.id)}>Delete</span>
					</div>
					<img className="member-avatar" src={this.props.avatar}/>
					<div className="member-info">
						<div className="member-name">{this.props.name}</div>
						<div className="member-role">{this.props.role} / {this.props.email}</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				<div className="member-actions">
					<span className="member-action">Save</span>
					<span className="member-action" onClick={this.changeRenderCondition.bind(this)}>Cancel</span>
				</div>
				<img className="member-avatar" src={this.props.avatar}/>
				<div className="member-info">
					<div className="member-name">{this.props.name}</div>
					<div className="member-role">{this.props.role} / {this.props.email}</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="staff-list-member">
				{ this.renderCondition() }
			</div>
		);
	}
};