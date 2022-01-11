import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledArticle = styled.article`
	background-color: ${({ theme }) => theme.colors.secondaryBG};
	padding: 1rem;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	h2 {
		transition: .1s ease-in;
		&:hover {
			color: ${({ theme }) => theme.colors.primary};
		}
	}
	.post-tag {
		font-size: 0.7rem;
		font-weight: 500;
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.primary};
		background-color: ${({ theme }) => theme.colors.primaryLight};
		width: auto;
		width: fit-content; /* crucial */
		height: auto;
		padding: .15rem .55rem;
		border: none;
		border-radius: 0.3rem;
	}
	.post-date {
		margin-top: -8px;
		color: ${({ theme }) => theme.colors.paragraphLight};
		font-size: 0.8rem;
	}
	.post-body {
		color: ${({ theme }) => theme.colors.paragraph};
	}
`;

const Post = ({ post }) => {
	return (
		<StyledArticle>
			<p className="post-tag">{post.tag}</p>
			<Link to={`/post/${post.id}`}>
				<h2>{post.title}</h2>
			</Link>
			<p className="post-date">{post.datetime}</p>
			<p className="post-body">
				{post.body.length <= 50 ? (
					post.body
				) : (
					`${post.body.slice(0, 50)}...`
				)}
			</p>
		</StyledArticle>
	);
};

export default Post;
