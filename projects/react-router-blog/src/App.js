// import static components
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
// import pages
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';
import About from './pages/About';
import Missing from './pages/Missing';
// import react router dependencies
import { Routes, Route, useNavigate } from 'react-router-dom';
// import react hooks
import { useState, useEffect } from 'react';
// import datetime helper package
import { format } from 'date-fns';
// import external data
// import { data } from './data/posts';

import styled from 'styled-components';
const StyledApp = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	justify-content: flex-start;
`;

function App() {
	// posts content data state
	const [ posts, setPosts ] = useState([
		{
			id: 1,
			tag: 'react.js',
			title: 'The Quest for the Perfect Dark Mode',
			datetime: 'December 26, 2021',
			body:
				'Maybe the hardest/most complicated part of building this blog was adding Dark Mode. Not the live-embedded code snippets, not the unified GraphQL layer that manages and aggregates all content and data*, not the custom analytics system, not the myriad bits of whimsy. Freaking Dark Mode.'
		},
		{
			id: 2,
			tag: 'next.js',
			title: 'Refreshing Server-Side Props',
			datetime: 'December 27, 2021',
			body:
				'One of my favourite features about Next.js is that individual routes can opt-in to server-side rendering. While I tend to be a pretty big advocate for static generation, this is a perfect use-case for server-side rendering; I can fetch and inject the database data on first render, simplifying my front-end code.'
		},
		{
			id: 3,
			tag: 'styled-components',
			title: 'Demystifying styled-components',
			datetime: 'December 28, 2021',
			body:
				"When I first started using styled-components, it seemed like magic ✨. Somehow, using an obscure half-string-half-function syntax, the tool was able to take some arbitrary CSS and assign it to a React component, bypassing the CSS selectors we've always used."
		},
		{
			id: 4,
			tag: 'programming',
			title: 'How To Learn Stuff Quickly',
			datetime: 'December 29, 2021',
			body:
				"It's often said that the internet has democratized education: the sum of human knowledge is only a Google search away! And yet, having access to information is only half of the story; you also need to be able to convert raw information into usable skills."
		}
	]);
	// nav search states
	const [ search, setSearch ] = useState('');
	const [ searchResults, setSearchResults ] = useState([]);
	// new post states
	const [ postTitle, setPostTitle ] = useState('');
	const [ postBody, setPostBody ] = useState('');
	// useNavigate hook
	const navigate = useNavigate();

	useEffect(
		() => {
			// filter out our results
			const filteredResults = posts.filter(
				(post) =>
					post.body
						.toLowerCase()
						.includes(search.toLowerCase()) ||
					post.title
						.toLowerCase()
						.includes(search.toLowerCase())
			);
			// update search state
			setSearchResults(filteredResults.reverse());
		},
		[ posts, search ]
	);

	// new post handle submit function
	const handleSubmit = (e) => {
		// prevent default page load on submit
		e.preventDefault();
		// set the id for the new post
		const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
		//  set date time value
		const datetime = format(new Date(), 'MMMM dd, yyyy');
		// create the new post object
		const newPost = {
			id: id,
			title: postTitle,
			datetime: datetime,
			body: postBody
		};
		// add the new post object to the posts array
		const allPosts = [ ...posts, newPost ];
		// update posts state
		setPosts(allPosts);
		// reset the new post title field
		setPostTitle('');
		// reset the new post body field
		setPostBody('');
		// go back to home page after the new post has been submitted
		navigate('/');
	};

	// post page handle delete function
	const handleDelete = (id) => {
		// define posts list
		const postsList = posts.filter((post) => post.id !== id);
		// update posts state
		setPosts(postsList);
		// go back to home page with useNavigate hook
		navigate('/');
	};

	return (
		<StyledApp>
			<Header title={'React Blog'} />
			<Nav search={search} setSearch={setSearch} />
			<Routes>
				<Route
					path="/"
					element={<Home posts={searchResults} />}
				/>
				<Route
					path="/post"
					element={
						<NewPost
							postTitle={postTitle}
							setPostTitle={setPostTitle}
							postBody={postBody}
							setPostBody={setPostBody}
							handleSubmit={handleSubmit}
						/>
					}
				/>
				<Route
					path="/post/:id"
					element={
						<PostPage
							posts={posts}
							handleDelete={handleDelete}
						/>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Missing />} />
			</Routes>
			<Footer />
		</StyledApp>
	);
}

export default App;
