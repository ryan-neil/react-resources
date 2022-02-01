// definition
import { useState } from 'react';

export const useArray = (defaultValue) => {
	const [ array, setArray ] = useState(defaultValue);

	const push = (element) => {
		// get the current array and add the param element to the end of it
		setArray((a) => [ ...a, element ]);
	};

	const filter = (callback) => {
		setArray((a) => a.filter(callback));
	};

	const update = (idx, newElement) => {
		setArray((a) => [
			// get all values before param index
			...a.slice(0, idx),
			// add the new param element
			newElement,
			// get all values after param index and create a new array from that
			...a.slice(idx + 1, a.length - 1)
		]);
	};

	const remove = (idx) => {
		setArray((a) => [
			// get all values before index param
			...a.slice(0, idx),
			// get all values after index param, cut out the one at the index param
			...a.slice(idx + 1, a.length - 1)
		]);
	};

	const clear = () => {
		setArray([]);
	};

	return { array, set, push, remove, filter, update, clear };
};

// usage
export const ArrayComponent = () => {
	const { array, set, push, remove, filter, update, clear } = useArray([
		1,
		2,
		3,
		4,
		5,
		6
	]);

	return (
		<div>
			<div>{array.join(', ')}</div>
			<button onClick={() => push(7)}>Add 7</button>
			<button onClick={() => update(1, 9)}>
				Change Second Element To 9
			</button>
			<button onClick={() => remove(1)}>Remove Second Element</button>
			<button onClick={() => filter((n) => n < 3)}>
				Keep numbers Less Than 4
			</button>
			<button onClick={() => set([ 1, 2 ])}>Set To 1, 2</button>
			<button onClick={clear}>Clear</button>
		</div>
	);
};
