import React, { PropTypes } from 'react';
import UserItem from '../user-item';
import { Loading } from '../../../../common/ui/loading';
import { UpdateContentIcon } from '../../../../common/ui/update-content-icon';
import { LoadingError } from '../../../../common/ui/loading-error';

//Redux staff
import { connect } from 'react-redux';

//Utils
import _ from 'lodash';

class UsersList extends React.Component {
	render() {
		const props = _.omit(this.props, 'users');
		return (
			<div className="users-list">
				{ !this.props.fetching && <UpdateContentIcon handleUpdate={this.props.handleForceListUpdate}/> }
				{ this.props.fetching && <Loading/> }
				{ this.props.error && <LoadingError/> }
				{ this.props.users.map((member) => <UserItem key={member.id} {...member} {...props}/>) }
			</div>
		);
	}
};

UsersList.propType = {
	fetching: PropTypes.bool.isRequired,
	handleForceListUpdate: PropTypes.func.isRequired
}

//Redux connect

const mapStateToProps = state => ({
	fetching: state.user.fetching,
	error: state.user.error
})

export default connect(
	mapStateToProps,
	null
)(UsersList);