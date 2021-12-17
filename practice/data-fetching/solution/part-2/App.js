import Form from './components/Form';
import Table from './components/Table';
import { useState, useEffect } from 'react';
// styles
import './styles/globals.css';
import styled from 'styled-components';
const AppStyled = styled.div`
	height: 100vh;
	width: 100%;
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function App() {
	const API_URL = 'https://jsonplaceholder.typicode.com';
	const [ reqType, setReqType ] = useState('users'); // reqType could be users, posts, or comments
	const [ items, setItems ] = useState([]); // this will be our data coming from the API

	useEffect(
		() => {
			const fetchData = async () => {
				try {
					const response = await fetch(`${API_URL}/${reqType}`); // fetch data
					if (!response.ok)
						throw Error('There was an issue fetching data.'); // error check the response
					const data = await response.json(); // save data
					setItems(data); // update state to request type data
				} catch (err) {
					console.log(err.message);
				}
			};
			fetchData();
		},
		[ reqType ] // we want the useEffect to re-render every time reqType changes
	);

	return (
		<AppStyled>
			<Form reqType={reqType} setReqType={setReqType} />
			<Table items={items} />
		</AppStyled>
	);
}

export default App;
