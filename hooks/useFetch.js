// definition
import { useEffect, useState } from 'react';

export const useFetch = (url, dependencies = []) => {
	const [ data, setData ] = useState(null);
	const [ fetchError, setFetchError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(url);
				if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
				const apiData = await res.json();
				if (isMounted) {
					setData(apiData);
					setFetchError(null);
				}
			} catch (err) {
				if (isMounted) {
					setFetchError(err.message);
					setData(null);
				}
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();

		const cleanUp = () => {
			isMounted = false;
		};

		return cleanUp;
	}, dependencies);

	return {
		data,
		fetchError,
		isLoading
	};
};
