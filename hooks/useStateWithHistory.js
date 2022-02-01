// this hook is great for functions like, un-do and re-do

// definition
import { useCallback, useRef, useState } from 'react';

export const useStateWithHistory = (defaultValue, { capacity = 10 } = {}) => {
	const [ value, setValue ] = useState(defaultValue);
	const historyRef = useRef([ value ]);
	const pointerRef = useRef(0);

	const set = useCallback(
		(v) => {
			// check if the value is a function, if true we pass it the current value, if false we just use the value passed in
			const resolveValue = typeof v === 'function' ? v(value) : v;

			// check if the item at the end of our history has changed
			if (historyRef.current[pointerRef.current] !== resolveValue) {
				// if it has changed, we delete everything after our pointer (this deletes all the state we no longer need)
				if (pointerRef.current < historyRef.current.length - 1) {
					historyRef.current.splice(pointerRef.current + 1);
				}
				// then we add the new state to the end of the state array
				historyRef.current.push(resolveValue);

				// here we are making sure if we're beyond the capacity it cuts off at the capacity (which is currently 10)
				while (historyRef.current.length > capacity) {
					historyRef.current.shift();
				}
				// next, we are resetting the pointer to point to the correct index which is just the end of the array
				pointerRef.current = historyRef.current.length - 1;
			}
			// finally, we are updating our value state
			setValue(resolveValue);
		},
		[ capacity, value ]
	);

	const back = useCallback(() => {
		// make our pointer go back 1
		if (pointerRef.current <= 0) return;
		pointerRef.current--;
		// reset our value state
		setValue(historyRef.current[pointerRef.current]);
	}, []);

	const forward = useCallback(() => {
		// make our pointer go forward 1
		if (pointerRef.current >= historyRef.current.length - 1) return;
		pointerRef.current++;
		// reset our value state
		setValue(historyRef.current[pointerRef.current]);
	}, []);

	const go = useCallback((index) => {
		// set our pointer to the exact value
		if (index < 0 || index >= historyRef.current.length - 1) return;
		pointerRef.current = index;
		// set our value state
		setValue(historyRef.current[pointerRef.current]);
	}, []);

	return [
		value,
		set,
		{
			history: historyRef.current,
			pointer: pointerRef.current,
			back,
			forward,
			go
		}
	];
};

// usage
import { useState } from 'react';

export const StateWithHistoryComponent = () => {
	const [
		count,
		setCount,
		{ history, pointer, back, forward, go }
	] = useStateWithHistory(1);
	const [ name, setName ] = useState('Ryan');

	return (
		<div>
			<div>Count - {count}</div>
			<div>History - {history.join(', ')}</div>
			<div>Pointer - {pointer}</div>
			<div>Name - {name}</div>
			<button onClick={() => setCount((currCount) => currCount * 2)}>
				Double
			</button>
			<button onClick={() => setCount((currCount) => currCount + 1)}>
				Increment
			</button>
		</div>
	);
};
