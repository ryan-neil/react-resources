import { useMemo } from 'react';
// Custom hooks
import { useFetch } from '../hooks/useFetch';
import { useLocalStorageApi } from '../hooks/useLocalStorage';
// Components
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

const Parent = () => {
	const API_URL = 'https://jsonplaceholder.typicode.com/users';
	const { response, loading, error } = useFetch(API_URL);
	const [data, setData] = useLocalStorageApi('users', response);

	// set local storage data to state
	useMemo(() => {
		console.log('response changed!');
		setData(response);
	}, [response]);

	return (
		<div>
			<ChildOne data={data} loading={loading} error={error} />
			<ChildTwo data={data} loading={loading} error={error} />
		</div>
	);
};

export default Parent;
