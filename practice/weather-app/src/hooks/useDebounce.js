import { useState, useEffect } from 'react';

const useDebounce = (value, timeout, callback) => {
	// set state
	const [ timer, setTimer ] = useState(null);

	// clear timer
	const clearTimer = () => {
		// clear timeout only if timer is active
		if (timer) clearTimeout(timer);
	};

	useEffect(
		() => {
			// clear the timer
			clearTimer();

			if (value && callback) {
				const newTimer = setTimeout(callback, timeout);
				// set the timer to the new timer
				setTimer(newTimer);
			}
		},
		[ value ]
	);
};

export default useDebounce;
