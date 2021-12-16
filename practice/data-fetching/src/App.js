// import Header from './components/Header';
// import DataList from './components/DataList';
import { useState, useEffect } from 'react';
// styles
import './styles/globals.css';
import styled from 'styled-components';
const AppStyled = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function App() {
	const API_URL = 'https://jsonplaceholder.typicode.com/posts';
	const [ items, setItems ] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_URL);
				const data = await response.json();

				console.log(data);
				setItems(data);
			} catch (err) {
				console.log(err.message);
			}
		};
		fetchData();
	}, []);

	return (
		<AppStyled>
			<ul>
				<li>item 1</li>
			</ul>
		</AppStyled>
	);
}

export default App;
