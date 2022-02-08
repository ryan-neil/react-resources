import { useEffect } from 'react';
import { useLocalStorage, useLocalStorageApi } from './hooks/useLocalStorage';
import { useFetch } from './hooks/useFetch';
// styles
import './styles/globals.css';
import styled from 'styled-components';
const AppStyled = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: space-between; */
	/* justify-content: center; */
`;

function App() {
	const [count, setCount] = useLocalStorage('myCount', 0);

	// useFetch hook
	const API_URL = 'https://jsonplaceholder.typicode.com/users';
	const { data, isLoading, hasError } = useFetch(API_URL);

	const [users, setUsers] = useLocalStorageApi('users', data);

	useEffect(() => {
		setUsers(data);
	}, [data]);

	return (
		<AppStyled>
			<h2>App running...</h2>
			<button onClick={() => setCount(0)}>Clear</button>
			<button onClick={() => setCount(count + 1)}>{count}</button>

			{isLoading && <p>Loading...</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</AppStyled>
	);
}

export default App;
