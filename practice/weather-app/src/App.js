import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Missing from './pages/Missing';
// styles
import styled from 'styled-components';
const StyledApp = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	padding: 0.35rem 1rem;
	max-width: 1200px;
`;

const App = () => {
	return (
		<StyledApp>
			<Router>
				<Header title="Weather App" />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
					<Route path="*" element={<Missing />} />
				</Routes>
			</Router>
		</StyledApp>
	);
};

export default App;
