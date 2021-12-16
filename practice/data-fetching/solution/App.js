import Form from './components/Form';
import DataList from './components/DataList';
import { useState, useEffect } from 'react';
// styles
import './styles/globals.css';
import styled from 'styled-components';
const AppStyled = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function App() {
	const API_URL = 'https://jsonplaceholder.typicode.com';
	const [ reqType, setReqType ] = useState('users'); // reqType could be users, posts, or comments
	const [ items, setItems ] = useState([]);

	useEffect(
		() => {
			const fetchData = async () => {
				try {
					// fetch data
					const response = await fetch(`${API_URL}/${reqType}`);
					// error check the response
					if (!response.ok)
						throw Error('There was an issue fetching data.');
					// save data
					const data = await response.json();
					// update state to request type data
					setItems(data);
				} catch (err) {
					console.log(err.message);
				}
			};
			fetchData();
		},
		// we want the useEffect to re-render every time reqType changes
		[ reqType ]
	);

	return (
		<AppStyled>
			<Form reqType={reqType} setReqType={setReqType} />
			<DataList items={items} />
		</AppStyled>
	);
}

export default App;
