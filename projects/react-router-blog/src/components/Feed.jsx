// components
import Post from './Post';
// styles
import styled from 'styled-components';
const StyledFeed = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const Feed = ({ searchResults }) => {
	return (
		<StyledFeed>
			{searchResults.map((result) => (
				<Post key={result.id} result={result} />
			))}
		</StyledFeed>
	);
};

export default Feed;
