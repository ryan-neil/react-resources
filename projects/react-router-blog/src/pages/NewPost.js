import { Container } from '../components/styles/Container.styled';
import { Button } from '../components/styles/Button.styled';
import { Input } from '../components/styles/Input.styled';

const NewPost = ({
	postTitle,
	setPostTitle,
	postBody,
	setPostBody,
	handleSubmit
}) => {
	return (
		<Container>
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
				<textarea
					id="post-body"
					placeholder="Type the content of your blog post"
					required
					value={postBody}
					onChange={(e) => setPostBody(e.target.value)}
				/>
				{/* submit button */}
				<Button type="submit">Submit</Button>
			</form>
		</Container>
	);
};

export default NewPost;
