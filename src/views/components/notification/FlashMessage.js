import React, { PropTypes } from 'react';
import classnames from 'classnames';

class FlashMessage extends React.Component {
	constructor(props) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.deleteFlashMessage(this.props.message.id);
	}

	render() {
		const { type, message } = this.props.message;
		return (
			<div className={classnames('notification-item', {
				'notification-item-success': type === 'success',
				'notification-item-error': type === 'error'
			})}>
				<span className="notification-item-close fa fa-times" onClick={this.onClick}></span>
				<div className="notification-item-message">{message}</div>
			</div>
		)
	}
}

FlashMessage.propTypes = {
	message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;