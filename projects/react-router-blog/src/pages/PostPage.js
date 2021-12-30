import { Container } from '../components/styles/Container.styled';

import { useParams, Link } from 'react-router-dom';

const PostPage = ({ posts, handleDelete }) => {
	const { id } = useParams();
	// grab the post coming from the params (need to set to string)
	const post = posts.find((post) => post.id.toString() === id);
	// or another way...
	// const post = posts.find((post) => post.id == id);

	return (
		<Container>
			<article className="post">
				{/* if we have a post */}
				{post && (
					<div>
						<h2>{post.title}</h2>
						<p className="post-date">{post.datetime}</p>
						<p className="post-body">{post.body}</p>
						<button onClick={() => handleDelete(post.id)}>
							Delete Post
						</button>
					</div>
				)}
				{/* if we do not have a post */}
				{!post && (
					<div>
						<h2>Post Not Found</h2>
						<p>Hmm...That's disappointing.</p>
						<p>
							<Link to="/">Go home</Link>
						</p>
					</div>
				)}
			</article>
		</Container>
	);
};

export default PostPage;
