import { useState } from 'react';
import Search from '../components/Search';
import useDebounce from '../hooks/useDebounce';
// styles
import styled from 'styled-components';
const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
`;

const Home = () => {
	const API_KEY = 'tHYrI9ElaccMlzUly166uJhSaZ0qdDHN';
	// set states
	const [ searchQuery, setSearchQuery ] = useState('');
	const [ resultsData, setResultsData ] = useState([]);
	const [ isLoading, setIsLoading ] = useState(false);

	// fetch search cities
	const fetchSearchData = async () => {
		const API_SEARCH_URL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${searchQuery}`;
		if (!searchQuery || searchQuery.trim() === '') return;

		try {
			const res = await fetch(API_SEARCH_URL);
			const data = await res.json();

			// set api response data to local storage
			localStorage.setItem('apiData', JSON.stringify(data));
			// get api response data from local storage
			const localData = JSON.parse(localStorage.getItem('apiData'));

			setResultsData(localData);
		} catch (err) {
			console.log(err);
			setResultsData(null);
		}
	};

	// search debounce hook
	useDebounce(searchQuery, 300, fetchSearchData);

	return (
		<StyledMain>
			<Search
				resultsData={resultsData}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
		</StyledMain>
	);
};

export default Home;
