// definition
import { useState } from 'react';

export const useToggle = (defaultValue) => {
	const [ value, setValue ] = useState(defaultValue);

	const toggleValue = (value) => {
		setValue(
			(currentValue) =>
				typeof value === 'boolean' ? value : !currentValue
		);
	};

	return [ value, toggleValue ];
};

// usage
export const toggleComponent = () => {
	const [ value, toggleValue ] = useToggle(false);

	return (
		<div>
			<div>{value.toString()}</div>
			<button onClick={toggleValue}>Toggle</button>
			<button onClick={() => toggleValue(true)}>Toggle True</button>
			<button onClick={() => toggleValue(false)}>Toggle False</button>
		</div>
	);
};
