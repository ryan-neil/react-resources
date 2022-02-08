// Definition
import { useEffect, useState } from 'react';

export const useFetch = (url, options) => {
	const [data, setData] = useState([]);
	const [hasError, setHasError] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(url, options);
				if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
				if (isMounted) {
					const json = await res.json();
					setData(json);
					setHasError(null);
				}
			} catch (err) {
				if (isMounted) {
					setHasError(err.message);
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
	}, [url]);

	return {
		data,
		isLoading,
		hasError,
	};
};
