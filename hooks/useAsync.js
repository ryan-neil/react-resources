// this hook is great for building out other hooks

// definition
import { useCallback, useEffect, useState } from 'react';

export const useAsync = (callback, dependencies = []) => {
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState();
	const [ value, setValue ] = useState();

	const callbackMemoized = useCallback(() => {
		setLoading(true);
		setError(undefined);
		setValue(undefined);
		callback()
			.then(setValue)
			.catch(setError)
			.finally(() => setLoading(false));
	}, dependencies);

	useEffect(
		() => {
			callbackMemoized();
		},
		[ callbackMemoized ]
	);

	return { loading, error, value };
};

// usage
export const AsyncComponent = () => {
	const { loading, error, value } = useAsync(() => {
		return new Promise((resolve, reject) => {
			const success = true;

			setTimeout(() => {
				success ? resolve('Success') : reject('Error');
			}, 1000);
		});
	}); // we can pass in dependencies here

	return (
		<div>
			<div>Loading: {loading.toString()}</div>
			<div>Error: {error}</div>
			<div>Value: {value}</div>
		</div>
	);
};
