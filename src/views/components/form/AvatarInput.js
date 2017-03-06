import React, { PropTypes } from 'react';

export const AvatarInput = (props) => {
	const uploadAvatar = (event) => {
		props.handleAvatarChange('/static/images/user/default.png');
	}

	return (
		<div className="avatar-input">
			<label htmlFor="file-input">
				<span>Upload Avatar</span>
				<img src={ props.avatar }/>
				<input
					id="file-input"
					name="avatar"
					type="file"
					onChange={ uploadAvatar }
				/>
			</label>
		</div>
	);
}

AvatarInput.propTypes = {
	avatar: PropTypes.string.isRequired,
	handleAvatarChange: PropTypes.func.isRequired
}