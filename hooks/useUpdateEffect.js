// this will only run the useEffect on update and ...
// ... not on initial mount (render)

// definition
import { useEffect, useRef } from 'react';

export const useUpdateEffect = (callback, dependencies) => {
	// check for if first render, default to true
	const firstRenderRef = useRef(true);

	// then we have a normal useEffect that takes the callback and depens from parameters
	useEffect(() => {
		// check for first render is true
		if (firstRenderRef.current) {
			// if first render is true we set the first render to false and don't execute the code
			firstRenderRef.current = false;
			return;
		}
		return callback();
	}, dependencies);
};

// so the first time the effect runs it does nothing and
// then every time after that it runs as if it was just a normal effect

// usage
import { useState } from 'react';

export const UpdateEffectComponent = () => {
	const [ count, setCount ] = useState(10);
	useUpdateEffect(() => alert(count), [ count ]);

	return (
		<div>
			<div>{count}</div>
			<button onClick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	);
};
