import React, { PropTypes } from 'react';

export const UpdateContentIcon = (props) => {
	return (
		<div className="update-content-button">
			<img src="/static/images/utils/update.png" onClick={props.handleUpdate}/>
		</div>
	);
}

UpdateContentIcon.propType = {
	handleUpdate: PropTypes.func.isRequired
}