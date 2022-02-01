// this hook is for saving state long-term

// definition
import { useState, useEffect } from 'react';

// need to check if local data is null before parsing and setting the data
export const useLocalStorage = (key, defaultValue) => {
	const [ value, setValue ] = useState(() => {
		let value;

		try {
			value = JSON.parse(
				window.localStorage.getItem(key) || String(defaultValue)
			);
		} catch (error) {
			value = defaultValue;
		}

		return value;
	});

	useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(value));
		},
		[ key, value ]
	);

	return [ value, setValue ];
};
