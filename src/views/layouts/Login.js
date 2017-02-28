import React, { PropTypes } from 'react';
import LoginForm from '../components/login/LoginForm';
import { connect } from 'react-redux';
import { userLoginRequest } from '../../actions/userAuth';
import { createFlashMessage } from '../../actions/flashMessages';

class LoginLayout extends React.Component {
	render() {
		const { userLoginRequest, createFlashMessage } = this.props;
		return (
			<div className="login-page-background">
				<div className="login-form-container">
					<div className="login-form-centered">
						<h1 className="form-header">Real Estate Admin</h1>
						<LoginForm
							userLoginRequest={userLoginRequest}
							createFlashMessage={createFlashMessage}
						/>
					</div>
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