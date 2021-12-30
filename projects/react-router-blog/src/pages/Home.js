import Feed from '../components/Feed';
import { Container } from '../components/styles/Container.styled';

const Home = ({ posts }) => {
	return (
		<Container>
			{posts.length ? (
				<Feed posts={posts} />
			) : (
				<p style={{ marginTop: '2rem' }}>
					No posts to display...
				</p>
			)}
		</Container>
	);
};

export default Home;
