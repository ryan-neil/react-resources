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

const NewPost = ({
	postTitle,
	setPostTitle,
	postBody,
	setPostBody,
	postTag,
	setPostTag,
	handleSubmit
}) => {
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
