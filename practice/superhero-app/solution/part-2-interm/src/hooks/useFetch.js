/**
 * The useFetch will return 3 pieces of information about the API call:
 * 1. A boolean, which we can use to determine if the data is currently loading or not
 * 2. The data the API returns
 * 3. An error variable that will be populated based on if there were any errors during the request
 */

// fetch api data
import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [ data, setData ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ error, setError ] = useState(null);

	useEffect(
		() => {
			const fetchData = async () => {
				setIsLoading(true);
				try {
					const res = await fetch(url);
					const data = await res.json();

					setData(data);
				} catch (err) {
					setError(err);
				} finally {
					setIsLoading(false);
				}
			};
			fetchData();
		},
		[ url ]
	);

	return { data, isLoading, error };
};

export default useFetch;
