// external
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
	h2 {
		margin-bottom: 1rem;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		input {
			margin-top: -10px;
		}
		textarea {
			margin-top: -10px;
		}
	}
`;

const NewPost = () => {
	// set state
	const [ postTitle, setPostTitle ] = useState('');
	const [ postBody, setPostBody ] = useState('');
	const [ postTag, setPostTag ] = useState('');
	// set context
	const { posts, setPosts } = useContext(DataProvider);
	// history hook
	const navigate = useNavigate();

	// CREATE a new post
	const handleSubmit = async (e) => {
		// prevent default page load on submit
		e.preventDefault();
		// set the new posts id
		const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
		//  set the new posts date time value
		const datetime = format(new Date(), 'MMMM dd, yyyy');
		// create the new post object with the above information
		const newPost = {
			id: id,
			tag: postTag,
			title: postTitle,
			datetime: datetime,
			body: postBody
		};

		// send the new data to the api (axios)
		try {
			const res = await api.post('/posts', newPost);
			// add the new post object to the posts array
			const allPosts = [ ...posts, res.data ];
			// update posts state
			setPosts(allPosts);
			// reset all new post fields
			setPostTitle('');
			setPostBody('');
			setPostTag('');
			// go back to home page after the new post has been submitted
			navigate('/');
		} catch (err) {
			console.log(`Error: ${err.message}`);
		}
	};

	return (
		<StyledMain>
			<h2>Create a New Post</h2>
			<form className="new-post-form" onSubmit={handleSubmit}>
				{/* title section */}
				<label htmlFor="post-title">Title:</label>
				<Input
					type="text"
					id="post-title"
					placeholder="My Awesome Title"
					required
					value={postTitle}
					onChange={(e) => setPostTitle(e.target.value)}
				/>
				{/* body section */}
				<label htmlFor="post-body">Body:</label>
				<Textarea
					id="post-body"
					placeholder="Type the content of your blog post"
					required
					value={postBody}
					onChange={(e) => setPostBody(e.target.value)}
				/>
				{/* tag section */}
				<label htmlFor="post-tag">Tag:</label>
				<Input
					type="text"
					id="post-tag"
					placeholder="Add a tag"
					required
					value={postTag}
					onChange={(e) => setPostTag(e.target.value)}
				/>
				{/* submit button */}
				<Button type="submit">Submit</Button>
			</form>
		</StyledMain>
	);
};

export default NewPost;
