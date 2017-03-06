import React, { PropTypes } from 'react';

export const TextInput = (props) => (
	<label>
		<span>{ props.label }</span>
		<input
			name={ props.name }
			type={ props.type }
			value={ props.value }
			onChange={ props.handleInputChange }
		/>
	</label>
)

TextInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleInputChange: PropTypes.func.isRequired
}