// externals
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
// components
import Header from './components/Header';
import Home from './pages/Home';
import Add from './pages/Add';
import Footer from './components/Footer';
import Missing from './pages/Missing';
// styles
import styled from 'styled-components';
const AppStyled = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

function App() {
	const API_URL = 'http://localhost:9001/heros';
	const [ heros, setHeros ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ fetchError, setFetchError ] = useState(null);

	// fetch api data
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch(API_URL);
				const data = await res.json();
				setHeros(data);
			} catch (error) {
				setFetchError(error);
			} finally {
				setIsLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<AppStyled className="App">
			<Router>
				<Header title="Superhero App: Basic" />
				<Routes>
					<Route
						path="/"
						element={
							<Home
								heros={heros}
								setHeros={setHeros}
								setFetchError={setFetchError}
							/>
						}
					/>
					<Route
						path="/add"
						element={
							<Add
								heros={heros}
								setHeros={setHeros}
								setFetchError={setFetchError}
							/>
						}
					/>
					<Route path="*" element={<Missing />} />
				</Routes>
				<Footer heros={heros} />
			</Router>
		</AppStyled>
	);
}

export default App;
