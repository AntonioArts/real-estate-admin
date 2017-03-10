import React, { PropTypes } from 'react';
import NotificationsItem from '../notification-item';

//Redux staff
import { connect } from 'react-redux';
import { notificationActions } from '../../../../state/notification/actions';

class NotificationsList extends React.Component {
	render() {
		const { notificationDelete } = this.props;
		return (
			<div className="notifications">
			{this.props.messages.map(message =>
				<NotificationsItem key={message.id} message={message} notificationDelete={notificationDelete}/>
			)}
			</div>
		)
	}
}

NotificationsList.propType = {
	messages: PropTypes.array.isRequired,
	notificationDelete: PropTypes.func.isRequired
}

//Redux connect

const mapStateToProps = state => ({
	messages: state.notification
})

const mapDispatchToProps = {
	notificationDelete: notificationActions.notificationDelete
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NotificationsList);