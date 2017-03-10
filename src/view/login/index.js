import React, { PropTypes } from 'react';
import LoginForm from './components/login-form';
import { Loading } from '../common/ui/loading';

//Utils
import classnames from 'classnames';

//Redux staff
import { connect } from 'react-redux';
import { authActions } from '../../state/auth/actions';

class LoginLayout extends React.Component {
	render() {
		const { auth, authRequest, notificationCreate } = this.props;
		return (
			<div className="login-page-background">
				<div className={classnames('login-form-container', {'login-form-container-progress': auth.authProcessing})}>
					<div className="login-form-centered">
						{ auth.authProcessing && <Loading/> }
						<h1 className="form-header">Real Estate Admin</h1>
						<LoginForm
							authRequest={authRequest}
							authProcessing={auth.authProcessing}
							errors={auth.authErrors}
						/>
					</div>
				</div>
			</div>
		)
	}
}

LoginLayout.propTypes = {
	auth: PropTypes.object.isRequired,
	authRequest: PropTypes.func.isRequired,
}

//Redux connect

const mapStateToProps = state => ({
	auth: state.auth
})

const setDispatchToProps = {
	authRequest: authActions.authRequest,
}

export default connect(
	mapStateToProps,
	setDispatchToProps
)(LoginLayout);