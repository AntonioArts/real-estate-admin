import React from 'react';
import { Link, IndexLink } from 'react-router'

 export default class Layout extends React.Component {
	render() {
		const name = 'Steve Aoki';
		const role = 'admin';
		return (
		<div className="page-background">
			<div className="admin-dashboard">
				<div className="add-container">
					<div className="sidebar-wrapper">
						<div className="sidebar">
							<div className="sidebar-header">Kievstones</div>
							<ul className="sidebar-menu">
								<li><IndexLink to="/" activeClassName="active"><i className="fa fa-building-o"></i> Properties</IndexLink></li>
								<li><Link to="/agenda" activeClassName="active"><i className="fa fa-tasks"></i> Agenda</Link></li>
								<li><Link to="/inquires" activeClassName="active"><i className="fa fa-envelope-o"></i> Inquires</Link></li>
								{ role == 'admin' ? <li><Link to="/staff" activeClassName="active"><i className="fa fa-users"></i> Staff</Link></li> : '' }
							</ul>
							<div className="user-info">
								<div className="user-info-wrapper">
									<span className="user-name">{name}&nbsp;
										<Link to="/password" activeClassName="active"><i className="fa fa-cog"></i></Link>
									</span>
									<span className="user-role">({role})&nbsp;</span>
									<a className="logout" href="/auth/logout">Logout&nbsp;<i className="fa fa-sign-out"></i></a>
								</div>
							</div>
						</div>
					</div>
					<div className="bashboard-content">
						{this.props.children}
					</div>
				</div>
			</div>
		</div>
		);
	}
};