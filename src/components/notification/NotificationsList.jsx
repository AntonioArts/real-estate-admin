import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessages';

class NotificationsList extends React.Component {
	render() {
		const { deleteFlashMessage } = this.props;
		return (
			<div className="notifications">
			{this.props.messages.map(message =>
				<FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage}/>
			)}
			</div>
		)
	}
}

NotificationsList.propType = {
	messages: PropTypes.array.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
}

export default connect(state => ({messages: state.flashMessages}), { deleteFlashMessage })(NotificationsList);