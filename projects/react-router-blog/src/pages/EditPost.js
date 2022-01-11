import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// styles
import styled from 'styled-components';
import { Button } from '../components/styles/Button.styled';
import { Input } from '../components/styles/Input.styled';
import { Textarea } from '../components/styles/Textarea.styled';
const StyledMain = styled.main`
	width: 100%;
	max-width: 1100px;
	padding: 1rem 1rem;
	p {
		margin: 1rem 0;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		input {
			margin-top: -10px;
			color: ${({ theme }) => theme.colors.paragraph};
		}
		textarea {
			margin-top: -10px;
			color: ${({ theme }) => theme.colors.paragraph};
		}
	}
`;

const EditPost = ({
	posts,
	handleEdit,
	editBody,
	setEditBody,
	editTitle,
	setEditTitle,
	editTag,
	setEditTag
}) => {
	const { id } = useParams();
	const post = posts.find((post) => post.id.toString() === id);

	// this will automatically fill out our form and the controlled form will be ready to edit
	useEffect(
		() => {
			// if we have a post set states
			if (post) {
				setEditTitle(post.title);
				setEditBody(post.body);
				setEditTag(post.tag);
			}
		},
		[ post, setEditTitle, setEditBody, setEditTag ]
	);

	return (
		<StyledMain>
			{editTitle && (
				<div>
					<h2>Edit Post</h2>
					<form
						className="new-post-form"
						onSubmit={(e) => e.preventDefault()}
					>
						{/* title section */}
						<label htmlFor="post-title">Title:</label>
						<Input
							type="text"
							id="post-title"
							placeholder="My Awesome Title"
							required
							value={editTitle}
							onChange={(e) => setEditTitle(e.target.value)}
						/>
						{/* body section */}
						<label htmlFor="post-body">Body:</label>
						<Textarea
							id="post-body"
							placeholder="Type the content of your blog post"
							required
							value={editBody}
							onChange={(e) => setEditBody(e.target.value)}
						/>
						{/* tag section */}
						<label htmlFor="post-tag">Tag:</label>
						<Input
							type="text"
							id="post-tag"
							placeholder="Add a tag"
							required
							value={editTag}
							onChange={(e) => setEditTag(e.target.value)}
						/>
						{/* submit button */}
						<Button type="submit" onClick={() => handleEdit(post.id)}>
							Submit
						</Button>
					</form>
				</div>
			)}
			{/* if we do not have an edit post */}
			{!editTitle && (
				<div className="article-content">
					<h2>Post Not Found</h2>
					<p>Hmm...That's disappointing.</p>
					<Button>
						<Link to="/">Go home</Link>
					</Button>
				</div>
			)}
		</StyledMain>
	);
};

export default EditPost;
