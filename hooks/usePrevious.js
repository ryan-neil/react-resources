// definition
import { useRef } from 'react';

export const usePrevious = (value) => {
	// get current reference which is the current value
	const currentRef = useRef(value);
	// get previous reference which is set to nothing
	const previousRef = useRef();

	// check if the value we have saved which is the current value, ...
	// ... different than the value being passed into usePrevious hook
	if (currentRef.current !== value) {
		// if that's true that means the value has changed so ...
		/// ... we then set the previous value to the old current value
		previousRef.current = currentRef.current;
		// we then set the new current value to the actual real value
		currentRef.current = value;
	}

	// we then always return the previous value
	return previousRef.current;
};

// usage
import { useState } from 'react';

export const PreviousComponent = () => {
	const [ count, setCount ] = useState(0);
	const [ name, setName ] = useState('Ryan');
	const previousCount = usePrevious(count);

	return (
		<div>
			<div>
				{count}-{previousCount}
			</div>
			<div>{name}</div>
			<button onClick={() => setCount((currCount) => currCount + 1)}>
				Increment
			</button>
			<button onClick={() => setName('John')}>Change Name</button>
		</div>
	);
};
