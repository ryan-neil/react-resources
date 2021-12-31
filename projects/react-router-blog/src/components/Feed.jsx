import Post from './Post';
import styled from 'styled-components';
const StyledFeed = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Feed = ({ posts }) => {
	return (
		<StyledFeed>
			{posts.map((post) => <Post key={post.id} post={post} />)}
		</StyledFeed>
	);
};

export default Feed;
