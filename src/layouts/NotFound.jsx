import React from 'react';
import { Link, IndexLink } from 'react-router';

 export default class NotFoundLayout extends React.Component {
	render() {
		return (
			<div>
				<h1>Page Not Found</h1>
				<Link to="/">Go Home</Link>
			</div>
		);
	}
};