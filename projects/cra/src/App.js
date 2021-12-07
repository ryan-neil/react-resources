// components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// styles
import styled from 'styled-components';
const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

function App() {
	return (
		<Container className="App">
			<Header />
			<Main />
			<Footer />
		</Container>
	);
}

export default App;
