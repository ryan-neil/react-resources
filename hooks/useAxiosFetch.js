// definition
import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxiosFetch = (dataUrl) => {
	// set all states
	const [ data, setData ] = useState([]);
	const [ fetchError, setFetchError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);

	// define useEffect hook
	useEffect(
		() => {
			let isMounted = true; // define mounted component (memory leak thing)
			const cancelTokenSource = axios.CancelToken.source(); // define cancellation token, a part of axios used to cancel the request if the component is unmounted)

			// define fetch data function
			const fetchData = async (url) => {
				setIsLoading(true); // initiate loading start

				try {
					const res = await axios.get(url, {
						cancelToken: cancelTokenSource.token
					});
					if (isMounted) {
						setData(res.data); // update the data state to the fetch response
						setFetchError(null); // update error state to null
					}
				} catch (err) {
					if (isMounted) {
						setFetchError(err.message); // update error state to error
						setData([]); // update the data state to an empty array
					}
				} finally {
					isMounted && setIsLoading(false); // runs no matter what and checks to see if the component is still mounted and if true stops the loading state
				}
			};
			fetchData(dataUrl); // call fetch into action with the url we receive

			// define cleanUp function
			const cleanUp = () => {
				isMounted = false; // update isMounted to false
				cancelTokenSource.cancel(); // cancels the request if the component is unloaded during the request
			};

			return cleanUp;
		},
		[ dataUrl ]
	);

	// return our current states
	return {
		data,
		fetchError,
		isLoading
	};
};

export default useAxiosFetch;
