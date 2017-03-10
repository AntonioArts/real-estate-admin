import React, { PropTypes } from 'react';
import CreateUser from './components/create-user';
import UsersList from './components/users-list';

//Redux staff
import { connect } from 'react-redux';
import { userActions } from '../../../state/user/actions';

class Users extends React.Component {
	constructor(props) {
		super(props);

		this.createUser = this.createUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
		this.handleForceListUpdate = this.handleForceListUpdate.bind(this);
	}

	componentDidMount() {
		if(this.props.users.length == 0) {
			this.props.fetchUsers();
		}
	}

	handleForceListUpdate() {
		this.props.fetchUsers();
	}

	createUser(user) {
		this.props.createUser(user);
	}

	deleteUser(id) {
		var Sure = confirm("Are you sure?");
		if(Sure) {
			this.props.deleteUser(id)
		}
	}

	render() {
		return (
			<div className="user-page">
				<CreateUser
					createUser={ this.createUser }
				/>
				<UsersList
					users={ this.props.users }
					deleteUser={ this.deleteUser }
					handleForceListUpdate={ this.handleForceListUpdate }
				/>
			</div>
		);
	}
};

Users.propType = {
	users: PropTypes.array.isRequired
}

//Redux connect

const mapStateToProps = state => ({
	users: state.user.users
})

const mapDispatchToProps = {
	fetchUsers: userActions.fetchUsers,
	createUser: userActions.createUser,
	deleteUser: userActions.deleteUser
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Users);