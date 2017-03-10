import React, { PropTypes } from 'react';
import classnames from 'classnames';

export const TextInput = ({label, name, type, value, onChange, onBlur, validation}) => (
	<div className={classnames('form-field', {'form-field-validation': validation})}>
		<label htmlFor={ name }>
			<span>{ label }</span>
			<input
				id={ name }
				name={ name }
				type={ type }
				value={ value }
				onChange={ onChange }
				onBlur={ onBlur }
			/>
		</label>
		{ validation && <span className="field-validation-text">{ validation }</span> }
	</div>
)

TextInput.propTypes = {
	label: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	onBlur: PropTypes.func,
	validation: PropTypes.string
}