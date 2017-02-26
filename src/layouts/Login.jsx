import React, { PropTypes } from 'react';
import LoginForm from '../components/login/LoginForm';
import { connect } from 'react-redux';
import { userLoginRequest } from '../actions/loginActions';
import { createFlashMessage } from '../actions/flashMessages';

class LoginLayout extends React.Component {
	render() {
		const { userLoginRequest, createFlashMessage } = this.props;
		return (
			<div className="login-form-container">
				<div className="login-form-centered">
					<LoginForm
						userLoginRequest={userLoginRequest}
						createFlashMessage={createFlashMessage}
					/>
				</div>
			</div>
		)
	}
}

LoginLayout.propTypes = {
	userLoginRequest: PropTypes.func.isRequired,
	createFlashMessage: PropTypes.func.isRequired
}

export default connect(null, { userLoginRequest, createFlashMessage })(LoginLayout);