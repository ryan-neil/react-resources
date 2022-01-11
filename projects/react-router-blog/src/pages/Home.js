import Feed from '../components/Feed';
import { Container } from '../components/styles/Container.styled';

const Home = ({ posts, fetchError, isLoading }) => {
	return (
		<Container>
			{/* 4. update Home component logic */}
			{isLoading && <p>Loading posts...</p>}
			{!isLoading &&
			fetchError && <p style={{ color: 'red' }}>{fetchError}</p>}
			{!isLoading &&
				!fetchError &&
				(posts.length ? (
					<Feed posts={posts} />
				) : (
					<p>No posts to display</p>
				))}
		</Container>
	);
};

export default Home;
