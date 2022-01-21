import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Missing from './pages/Missing';
import Header from './components/Header';

function App() {
	const API_KEY = 'tHYrI9ElaccMlzUly166uJhSaZ0qdDHN';

	const [ search, setSearch ] = useState([]);
	const API_SEARCH_URL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${search}`;
	const [ fetchError, setFetchError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);

	// fetch search data
	useEffect(
		() => {
			const fetchSearchData = async () => {
				setIsLoading(true);
				try {
					const res = await fetch(API_SEARCH_URL);
					// err handling
					if (!res.ok) throw Error('Did not receive expected data.');
					const data = await res.json();
					console.log(data);
					// update search data state
					setSearch(data);
					// update error state
					setFetchError(null);
				} catch (err) {
					// update error state
					setFetchError(err.message);
				} finally {
					// remove loading state
					setIsLoading(false);
				}
			};
			fetchSearchData();
		},
		[ search ]
	);

	return (
		<div className="App">
			<Router>
				<Header title="Weather App Training" />
				<Routes>
					<Route
						path="/"
						element={<Home search={search} setSearch={setSearch} />}
					/>
					<Route path="/favorites" element={<Favorites />} />
					<Route path="*" element={<Missing />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
