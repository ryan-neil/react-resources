import { useState, useContext, useEffect } from 'react';
import { StandingsDataProvider } from './context/StandingsContext';
import StandingsContext from './context/StandingsContext';
import { useFetch } from './hooks/useFetch';
// components
import Header from './components/Header';
import Nav from './components/Nav';
import Table from './components/Table';
import Loading from './components/Loading';
import Error from './components/Error';
// global styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styled';
import { mode } from './components/styles/Theme.styled';
// styles
import styled from 'styled-components';
const StyledApp = styled.div`
	font-family: 'Poppins', sans-serif, -apple-system;
	font-weight: 300;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	.main-container {
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}
`;

function App() {
	// set theme state
	const [ theme, setTheme ] = useState('dark');
	const { loading, error } = useContext(StandingsContext);

	return (
		<ThemeProvider theme={mode[theme]}>
			<StandingsDataProvider>
				<StyledApp>
					<GlobalStyles />
					<Header theme={theme} setTheme={setTheme} />
					<main className="main-container">
						<Nav />
						{loading && !error && <Loading />}
						{error && !loading && <Error error={error} />}
						{!error && !loading && <Table />}
					</main>
				</StyledApp>
			</StandingsDataProvider>
		</ThemeProvider>
	);
}

export default App;
