// definition
import { useAsync } from './useAsync';

const defaultOptions = {
	headers: { 'Content-Type': 'application/json' }
};

export const useFetch = (url, options = {}, dependencies = []) => {
	return useAsync(() => {
		return fetch(url, { ...defaultOptions, ...options }).then((res) => {
			if (res.ok) return res.json();
			return res.json().then((json) => Promise.reject(json));
		});
	}, dependencies);
};

// usage
import { useState } from 'react';

export const FetchComponent = () => {
	const [ id, setId ] = useState(1);
	const {
		loading,
		error,
		value
	} = useFetch(`http://jsonplaceholder.typicode.com/todos/${id}`, {}, [ id ]);

	return (
		<div>
			<div>ID: {id}</div>
			<button onClick={() => setId((currId) => currId + 1)}>
				Increment ID
			</button>
			<div>Loading: {loading.toString()}</div>
			<div>{JSON.stringify(error, null, 2)}</div>
			<div>{JSON.stringify(value, null, 2)}</div>
		</div>
	);
};
