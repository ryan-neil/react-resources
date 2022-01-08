// JSONPlaceholder URL: 'https://jsonplaceholder.typicode.com';
import Header from './components/Header';
import DataList from './components/DataList';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

// styles
import './styles/globals.css';
import styled from 'styled-components';
const AppStyled = styled.div`
	height: 100vh;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

function App() {
	const API_URL = 'https://jsonplaceholder.typicode.com';
	// set states (api data, request type)
	const [ reqType, setReqType ] = useState('users');
	const [ items, setItems ] = useState([]);

	// READ: fetch the data
	useEffect(
		() => {
			const fetchData = async () => {
				try {
					const res = await fetch(`${API_URL}/${reqType}`);
					// error check before fetching data
					if (!res.ok)
						throw Error('There was an issue fetching data.');
					const data = await res.json();
					// set items
					setItems(data);
				} catch (err) {
					console.log(err.message);
				}
			};
			fetchData();
		},
		[ reqType ]
	);

	return (
		<AppStyled>
			<Header reqType={reqType} setReqType={setReqType} />
			<DataList items={items} />
			<Footer length={items.length} />
		</AppStyled>
	);
}

export default App;
