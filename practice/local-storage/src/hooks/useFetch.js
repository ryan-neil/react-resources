import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const res = await fetch(url, options);
				if (res.ok) {
					const json = await res.json();
					setData(json);
					setIsLoading(false);
				}
			} catch (err) {
				console.log(err);
				setHasError(true);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, [url]);

	return { data, isLoading, hasError };
};
