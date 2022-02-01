// definition
import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (callback, delay) => {
	// if callback changes, useTimeout will pass a new function every time the component renders which technically means its going to be different
	const callbackRef = useRef(callback); // this allows the callback to stay the same when it changes
	const timeoutRef = useRef();

	useEffect(
		() => {
			callbackRef.current = callback; // every time our callback changes we're updating our callbackRef. this prevents us from having to re-update the timer every time the callback changes, otherwise if we update the component state, thats going to update timeout function and that's going to update our timing which we don't want
		},
		[ callback ]
	);

	// set function
	const set = useCallback(
		() => {
			timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
		},
		[ delay ]
	);

	// clear function
	const clear = useCallback(() => {
		timeoutRef.current && clearTimeout(timeoutRef.current);
	}, []);

	// every time the delay, set, or clear changes we run this useEffect
	useEffect(
		() => {
			set();
			return clear;
		},
		[ delay, set, clear ]
	);

	// reset function
	const reset = useCallback(
		() => {
			clear();
			set();
		},
		[ clear, set ]
	);

	return { reset, clear };
};

// usage
import { useState } from 'react';

// if we need reset and clear
export const TimeoutComponent = () => {
  const [ count, setCount ] = useState(10);
	const { reset, clear } = useTimeout(() => setCount(0), 1000);
  
	return (
    <div>
			<div>{count}</div>
			<button onCLick={() => setCount((c) => c + 1)}>Increment</button>
			<button onCLick={clear}>Clear Timeout</button>
			<button onCLick={reset}>Reset Timeout</button>
		</div>
	);
};

// if we don't need reset and clear
export const TimeoutComponent = () => {
  const [ count, setCount ] = useState(10);
	useTimeout(() => setCount(0), 1000);
  
	return (
    <div>
			<div>{count}</div>
			<button onCLick={() => setCount((c) => c + 1)}>Increment</button>
		</div>
	);
};