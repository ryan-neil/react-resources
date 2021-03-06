// this hook is for saving state long-term (on page reload)

/**
 * Definition:
 */
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

/**
 * Usage with API's:
 */
import { useLocalStorageApi } from './hooks/useLocalStorageApi';

const Component = () => {
	// fetch api data logic ...

	const [data, setData] = useLocalStorageApi('key', apiData);

	useEffect(() => {
		setData(apiData);
	}, [apiData]);

	return (
		<>
			<div>{data}</div>
		</>
	);
};

/**
 * Usage standard:
 */
import { useLocalStorage } from './hooks/useLocalStorage';

const Component = () => {
	const [count, setCount] = useLocalStorage('myCount', 0);

	return (
		<>
			<button onClick={() => setCount(0)}>Clear</button>
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</>
	);
};
