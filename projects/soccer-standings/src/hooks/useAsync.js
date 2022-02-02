import { useCallback, useEffect, useState } from 'react';

export const useAsync = (callback, dependencies = []) => {
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState();
	const [ data, setData ] = useState();

	const callbackMemoized = useCallback(() => {
		setLoading(true);
		setError(undefined);
		setData(undefined);
		callback()
			.then(setData)
			.catch(setError)
			.finally(() => setLoading(false));
	}, dependencies);

	useEffect(
		() => {
			callbackMemoized();
		},
		[ callbackMemoized ]
	);

	return { data, loading, error };
};
