// import static components
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
// import pages
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import About from './pages/About';
import Missing from './pages/Missing';
// import react dependencies
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import dependencies
import { format } from 'date-fns';
// import dependencies
import api from './api/posts';
// 0. import custom hook
import useAxiosFetch from './hooks/useAxiosFetch';

// global styles
import { ThemeProvider } from 'styled-components';
import { mode } from './components/styles/Theme.styled';
import GlobalStyles from './components/styles/Global.styled';
// styles
import styled from 'styled-components';
const StyledApp = styled.div`
	min-height: 100vh;
	width: 100%;
	background-color: ${(props) => props.theme.colors.primaryBG};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	justify-content: flex-start;
`;

function App() {
	// set theme state
	const [ theme, setTheme ] = useState('dark');
	// posts content data state
	const [ posts, setPosts ] = useState([]);
	// nav search states
	const [ search, setSearch ] = useState('');
	const [ searchResults, setSearchResults ] = useState([]);
	// new post states
	const [ postTitle, setPostTitle ] = useState('');
	const [ postBody, setPostBody ] = useState('');
	const [ postTag, setPostTag ] = useState('');
	// post edit states
	const [ editTitle, setEditTitle ] = useState('');
	const [ editBody, setEditBody ] = useState('');
	const [ editTag, setEditTag ] = useState('');
	// useNavigate hook
	const navigate = useNavigate();
	// 1. useAxiosFetch hook (this is json-server url)
	const { data, fetchError, isLoading } = useAxiosFetch(
		'http://localhost:9001/posts'
	);

	// 2. this updates our post state data for the rest of the app to use, this only happens when the 'data' changes
	useEffect(
		() => {
			setPosts(data);
		},
		[ data ]
	);

	// filtered search results useEffect
	useEffect(
		() => {
			// filter out our results
			const filteredResults = posts.filter(
				(post) =>
					post.body.toLowerCase().includes(search.toLowerCase()) ||
					post.title.toLowerCase().includes(search.toLowerCase())
			);
			// update search state
			setSearchResults(filteredResults.reverse());
		},
		[ posts, search ]
	);

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
		<ThemeProvider theme={mode[theme]}>
			<StyledApp>
				<GlobalStyles />
				<Header title={'React Blog'} theme={theme} setTheme={setTheme} />
				<Nav search={search} setSearch={setSearch} />
				<Routes>
					{/* Home component */}
					<Route
						path="/"
						element={
							<Home
								posts={searchResults}
								fetchError={fetchError}
								isLoading={isLoading}
							/>
						}
					/>
					{/* New Post component */}
					<Route
						path="/post"
						element={
							<NewPost
								handleSubmit={handleSubmit}
								postTitle={postTitle}
								setPostTitle={setPostTitle}
								postBody={postBody}
								setPostBody={setPostBody}
								postTag={postTag}
								setPostTag={setPostTag}
							/>
						}
					/>
					{/* Edit Post component */}
					<Route
						path="/edit/:id"
						element={
							<EditPost
								posts={posts}
								editTitle={editTitle}
								setEditTitle={setEditTitle}
								editBody={editBody}
								setEditBody={setEditBody}
								editTag={editTag}
								setEditTag={setEditTag}
								handleEdit={handleEdit}
							/>
						}
					/>
					{/* Post Page component */}
					<Route
						path="/post/:id"
						element={
							<PostPage posts={posts} handleDelete={handleDelete} />
						}
					/>
					{/* About component */}
					<Route path="/about" element={<About />} />
					{/* 404 component */}
					<Route path="*" element={<Missing />} />
				</Routes>
				<Footer />
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
