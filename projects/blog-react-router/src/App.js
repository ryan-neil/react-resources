// static components
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
// page components
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
// 404 component
import Missing from './components/Missing';
// import react router dependencies
// https://www.youtube.com/watch?v=zEQiNFAwDGo
import { Route, Routes, useHistory } from 'react-router-dom';
// import react hooks
import { useState, useEffect } from 'react';

// styles
import './styles/globals.css';
import styled from 'styled-components';
const AppStyled = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	/* justify-content: center; */
`;
// end styles

function App() {
	return (
		<AppStyled>
			<Header />
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/new-post" element={<NewPost />} />
				<Route path="/post-page" element={<PostPage />} />
				<Route path="/about" element={<About />} />
				<Route path="/missing" element={<Missing />} />
			</Routes>
			<Footer />
		</AppStyled>
	);
}

export default App;
