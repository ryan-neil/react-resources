import { useState, useEffect } from 'react';

// using local storage with api's
export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => {
		let value;
		try {
			value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue));
		} catch (err) {
			value = defaultValue;
		}

		return value;
	});

	useEffect(() => {
		window.localStorage.setItem(key, value);
	}, [value]);

	return [value, setValue];
};

// using local storage with api's
export const useLocalStorageApi = (key, defaultValue) => {
	const [value, setValue] = useState([]);

	useEffect(() => {
		const localData = localStorage.getItem(key);
		if (localData) {
			setValue(JSON.parse(localData));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(defaultValue));
	});

	return [value, setValue];
};
