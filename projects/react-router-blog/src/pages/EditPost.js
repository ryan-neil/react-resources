// external
import { useEffect, useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
// internal
import api from '../api/posts';
import DataProvider from '../context/DataContext';
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

const EditPost = () => {
	const [ editTitle, setEditTitle ] = useState('');
	const [ editBody, setEditBody ] = useState('');
	const [ editTag, setEditTag ] = useState('');

	const { posts, setPosts } = useContext(DataProvider);
	const navigate = useNavigate();
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

	// UPDATE a post
	const handleEdit = async (id) => {
		//  set the updated posts date time value
		const datetime = format(new Date(), 'MMMM dd, yyyy');
		// create the updated posts object with the above information
		const updatedPost = {
			id: id,
			tag: editTag,
			title: editTitle,
			datetime: datetime,
			body: editBody
		};
		try {
			const res = await api.put(`/posts/${id}`, updatedPost);
			// we use map to eliminate the old post and just add in the new information
			setPosts(
				posts.map(
					// what our ternary is saying is:
					// if the iterated post id is equal to the id being passed in
					// ? then we use the response data which is the new post information
					// : if not then we just pass in the post as it is
					(post) => (post.id === id ? { ...res.data } : post)
				)
			);
			// reset all edited fields
			setEditTitle('');
			setEditBody('');
			setEditTag('');
			// go home after the post has been edited and submitted
			navigate('/');
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

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
