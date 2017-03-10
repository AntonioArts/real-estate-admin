import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import NotificationList from '../common/notification/notification-list';

//Redux staff
import { authActions } from '../../state/auth/actions';
import { connect } from 'react-redux';

class AdminLayout extends React.Component {
	render() {
		const { avatar, name, role } = this.props.user;
		return (
		<div className="admin-dashboard">
			<div className="add-container">
				<div className="sidebar-wrapper">
					<div className="sidebar">
						<div className="sidebar-header">Kievstones</div>
						<ul className="sidebar-menu">
							<li><IndexLink to="/" activeClassName="active"><span className="lnr lnr-apartment"></span> Properties</IndexLink></li>
							<li><Link to="/schedule" activeClassName="active"><span className="lnr lnr-calendar-full"></span> Schedule</Link></li>
							<li><Link to="/inquires" activeClassName="active"><span className="lnr lnr-download"></span> Inquires</Link></li>
							{ role == 'admin' && <li><Link to="/users" activeClassName="active"><span className="lnr lnr-users"></span> Users</Link></li> }
						</ul>
						<div className="user-info">
							<img className="user-avatar" src={avatar}/>
							<div className="user-info-wrapper">
								<span className="user-name">{name}&nbsp;
									<Link to="/settings" activeClassName="active"><i className="fa fa-cog"></i></Link>
								</span>
								<span className="user-role">({role})&nbsp;</span>
								<span className="logout" onClick={this.props.unsetUser}>Logout&nbsp;<i className="fa fa-sign-out"></i></span>
							</div>
						</div>
					</div>
				</div>
				<div className="bashboard-content">
					{this.props.children}
				</div>
			</div>
			<NotificationList/>
		</div>
		);
	}
};

AdminLayout.propType = {
	user: PropTypes.object.isRequired,
	unsetUser: PropTypes.func.isRequired
}

//Redux connect

const mapStateToProps = state => ({
	user: state.auth.user
})

const mapDispatchToProps = {
	unsetUser: authActions.unsetUser
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AdminLayout);