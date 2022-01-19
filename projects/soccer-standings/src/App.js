// components
import Header from './components/Header';
import Nav from './components/Nav';
import Table from './components/Table';
import Footer from './components/Footer';
import Error from './components/Error';
import Loading from './components/Loading';
import { useState, useEffect } from 'react';
// global styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styled';
import { mode } from './components/styles/Theme.styled';
// styles
import styled from 'styled-components';
const StyledApp = styled.div`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	.main-container {
		width: 100%;
		padding: 1rem 0 2rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
`;

function App() {
	// set theme state
	const [ theme, setTheme ] = useState('light');
	// api url params
	const endpoint = 'standings'; // league standings
	const league = 'league=39'; // premier league
	const season = 'season=2021'; // 2021-2022 season
	// set request state
	const [ reqType, setReqType ] = useState(league);
	const API_URL = `https://v3.football.api-sports.io/${endpoint}?${reqType}&${season}`;
	// set data state
	const [ items, setItems ] = useState([]);
	// set fetch error state
	const [ fetchError, setFetchError ] = useState(null);
	// set loading state
	const [ isLoading, setIsLoading ] = useState(true);

	// fetch the data
	useEffect(
		() => {
			const fetchData = async () => {
				const requestOptions = {
					method: 'GET',
					headers: {
						'x-apisports-key': 'd519eb6732f354b0cb31666aa27df821',
						'x-rapidapi-host': 'v3.football.api-sports.io'
					},
					redirect: 'follow'
				};

				try {
					const res = await fetch(API_URL, requestOptions);
					// error handling
					if (!res.ok) throw Error('Did not receive expected data.');
					const data = await res.json();
					// get standings data
					const standingsData = data.response[0].league.standings[0];
					console.log(standingsData);
					// update data state
					setItems(standingsData);
					// update fetch error
					setFetchError(null);
				} catch (err) {
					setFetchError(err.message);
				} finally {
					setIsLoading(false);
				}
			};
			fetchData();
		},
		[ reqType ]
	);

	return (
		<ThemeProvider theme={mode[theme]}>
			<StyledApp>
				<GlobalStyles />
				<Header theme={theme} setTheme={setTheme} />
				<main className="main-container">
					<Nav reqType={reqType} setReqType={setReqType} />
					{isLoading && <Loading />}
					{fetchError && <Error fetchError={fetchError} />}
					{!fetchError && <Table items={items} />}
				</main>
				<Footer />
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
