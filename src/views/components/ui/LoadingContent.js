import React from 'react';

export const LoadingContent = () => {
	return (
		<div className="loading-indicator">
			<img src="/static/images/utils/loading.gif"/>
			<div className="loading">Loading...</div>
		</div>
	);
}