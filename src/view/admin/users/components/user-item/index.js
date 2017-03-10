import React from 'react';

class UserItem extends React.Component {
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
					<div className="user-actions">
						<span className="user-action" onClick={this.changeRenderCondition.bind(this)}>Edit</span>
						<span className="user-action" onClick={this.props.deleteUser.bind(this, this.props.id)}>Delete</span>
					</div>
					<img className="user-avatar" src={this.props.avatar}/>
					<div className="user-info">
						<div className="user-name">{this.props.name}</div>
						<div className="user-role">{this.props.role} / {this.props.email}</div>
					</div>
				</div>
			);
		}

		return (
			<div>
				<div className="user-actions">
					<span className="user-action">Save</span>
					<span className="user-action" onClick={this.changeRenderCondition.bind(this)}>Cancel</span>
				</div>
				<img className="user-avatar" src={this.props.avatar}/>
				<div className="user-info">
					<div className="user-name">{this.props.name}</div>
					<div className="user-role">{this.props.role} / {this.props.email}</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div className="user-item">
				{ this.renderCondition() }
			</div>
		);
	}
};

export default UserItem;