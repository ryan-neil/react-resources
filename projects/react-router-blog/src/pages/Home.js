// external
import { useContext } from 'react';
import DataProvider from '../context/DataContext';
// internal
import Feed from '../components/Feed';
// styles
import { Container } from '../components/styles/Container.styled';

const Home = () => {
	const { searchResults, fetchError, isLoading } = useContext(DataProvider);

	return (
		<Container>
			{/* 4. update Home component logic */}
			{isLoading && <p>Loading posts...</p>}
			{!isLoading &&
			fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
			{!isLoading &&
				!fetchError &&
				(searchResults.length ? (
					<Feed searchResults={searchResults} />
				) : (
					<p>No posts to display</p>
				))}
		</Container>
	);
};

export default Home;
