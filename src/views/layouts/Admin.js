import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import NotificationsList from '../components/notification/NotificationsList';
import { unsetCurrentUser } from '../../actions/userAuth';
import { connect } from 'react-redux';

class AdminLayout extends React.Component {
	render() {
		const { name, role } = this.props.user;
		return (
		<div className="admin-dashboard">
			<div className="add-container">
				<div className="sidebar-wrapper">
					<div className="sidebar">
						<div className="sidebar-header">Kievstones</div>
						<ul className="sidebar-menu">
							<li><IndexLink to="/" activeClassName="active"><span className="lnr lnr-apartment"></span> Properties</IndexLink></li>
							<li><Link to="/agenda" activeClassName="active"><span className="lnr lnr-calendar-full"></span> Agenda</Link></li>
							<li><Link to="/inquires" activeClassName="active"><span className="lnr lnr-download"></span> Inquires</Link></li>
							{ role == 'admin' ? <li><Link to="/staff" activeClassName="active"><span className="lnr lnr-users"></span> Staff</Link></li> : '' }
						</ul>
						<div className="user-info">
							<div className="user-info-wrapper">
								<span className="user-name">{name}&nbsp;
									<Link to="/password" activeClassName="active"><i className="fa fa-cog"></i></Link>
								</span>
								<span className="user-role">({role})&nbsp;</span>
								<span className="logout" onClick={this.props.unsetCurrentUser}>Logout&nbsp;<i className="fa fa-sign-out"></i></span>
							</div>
						</div>
					</div>
				</div>
				<div className="bashboard-content">
					{this.props.children}
				</div>
			</div>
			<NotificationsList/>
		</div>
		);
	}
};

NotificationsList.propType = {
	user: PropTypes.object.isRequired,
	unsetCurrentUser: PropTypes.func.isRequired
}

export default connect(state => ({user: state.userAuth.user}), { unsetCurrentUser })(AdminLayout);