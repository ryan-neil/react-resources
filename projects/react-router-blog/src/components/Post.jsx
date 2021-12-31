import { Link } from 'react-router-dom';
import styled from 'styled-components';
const StyledArticle = styled.article`
	background-color: var(--white);
	padding: 1rem;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	h2 {
		transition: .1s ease-in;
		&:hover {
			color: var(--blue);
		}
	}
	.post-tag {
		font-size: 0.7rem;
		font-weight: 500;
		text-transform: uppercase;
		color: var(--blue);
		background-color: var(--blue-light);
		width: auto;
		width: fit-content; /* crucial */
		height: auto;
		padding: .15rem .55rem;
		border: none;
		border-radius: 0.3rem;
	}
	.post-date {
		margin-top: -8px;
		color: var(--text-light);
		font-size: 0.8rem;
	}
	.post-body {
		color: var(--text-p);
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
