// external
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// internal
import { DataProvider } from './context/DataContext';
// internal static components
import Header from './components/Header.jsx';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
// internal page components
import Home from './pages/Home';
import NewPost from './pages/NewPost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';
import About from './pages/About';
import Missing from './pages/Missing';
// styles
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { mode } from './components/styles/Theme.styled';
import GlobalStyles from './components/styles/Global.styled';
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
	const [ theme, setTheme ] = useState('dark');

	return (
		// styled-components theme provider
		<ThemeProvider theme={mode[theme]}>
			<StyledApp>
				{/* context wrapper */}
				<DataProvider>
					{/* styled-components global styles */}
					<GlobalStyles />
					<Header
						title={'React Blog'}
						theme={theme}
						setTheme={setTheme}
					/>
					<Nav />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/post" element={<NewPost />} />
						<Route path="/edit/:id" element={<EditPost />} />
						<Route path="/post/:id" element={<PostPage />} />
						<Route path="/about" element={<About />} />
						<Route path="*" element={<Missing />} />
					</Routes>
					<Footer />
				</DataProvider>
			</StyledApp>
		</ThemeProvider>
	);
}

export default App;
