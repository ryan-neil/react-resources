import { useState, useEffect } from 'react';

export const useFetch = (url, options) => {
	const [response, setResponse] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		let isMounted = true;

		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await fetch(url, options);
				if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
				if (isMounted) {
					const data = await res.json();
					setResponse(data);
					setError(null);
				}
			} catch (err) {
				if (isMounted) {
					setError(err.message);
					setResponse(null);
				}
			} finally {
				setLoading(false);
			}
		};
		fetchData();

		const cleanUp = () => {
			isMounted = false;
		};

		return cleanUp;
	}, [url]);

	return { response, loading, error };
};
