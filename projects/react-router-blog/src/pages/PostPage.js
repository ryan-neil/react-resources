// external
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
// internal
import api from '../api/posts';
import DataProvider from '../context/DataContext';
// styles
import styled from 'styled-components';
import { Button } from '../components/styles/Button.styled';
const StyledMain = styled.main`
	width: 100%;
	max-width: 1100px;
	padding: 1rem 1rem;
	.article-content {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		.post-date {
			margin-top: -16px;
			font-size: 0.9rem;
			color: ${({ theme }) => theme.colors.paragraphLight};
		}
		.button-container {
			display: flex;
			gap: 1rem;
		}
	}
`;

const PostPage = () => {
	const { posts, setPosts } = useContext(DataProvider);
	const navigate = useNavigate();
	const { id } = useParams();

	// grab the post coming from the params (need to set to string)
	const post = posts.find((post) => post.id.toString() === id);

	// DELETE a post
	const handleDelete = async (id) => {
		try {
			// no response here
			await api.delete(`/posts/${id}`);
			// define posts list
			const postsList = posts.filter((post) => post.id !== id);
			// update posts state
			setPosts(postsList);
			// go back to home page with useNavigate hook
			navigate('/');
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<StyledMain>
			<article className="post">
				{/* if we have a post */}
				{post && (
					<div className="article-content">
						<h2>{post.title}</h2>
						<p className="post-date">{post.datetime}</p>
						<p className="post-body">{post.body}</p>
						<div className="button-container">
							<Button danger onClick={() => handleDelete(post.id)}>
								Delete Post
							</Button>
							<Button secondary>
								<Link to={`/edit/${post.id}`}>Edit Post</Link>
							</Button>
						</div>
					</div>
				)}
				{/* if we do not have a post */}
				{!post && (
					<div className="article-content">
						<h2>Post Not Found</h2>
						<p>Hmm...That's disappointing.</p>
						<Button>
							<Link to="/">Go home</Link>
						</Button>
					</div>
				)}
			</article>
		</StyledMain>
	);
};

export default PostPage;
