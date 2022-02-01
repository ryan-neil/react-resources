// definition
import { useEffect } from 'react';
import { useTimeout } from './useTimeout';

export const useDebounce = (callback, delay, dependencies) => {
	const { reset, clear } = useTimeout(callback, delay);
	useEffect(reset, [ ...dependencies, reset ]);
	useEffect(clear, []);
};

// usage
import { useState } from 'react';

export const DebounceComponent = () => {
	const [ count, setCount ] = useState(10);
	useDebounce(() => alert(count), 2000, [ count ]);

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	);
};
