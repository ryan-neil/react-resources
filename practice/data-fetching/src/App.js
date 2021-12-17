// JSONPlaceholder URL: 'https://jsonplaceholder.typicode.com';

// styles
import './styles/globals.css';
import styled from 'styled-components';
const AppStyled = styled.div`
	height: 100vh;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

function App() {
	return (
		<AppStyled>
			<h2>Data fetching training ground...</h2>
		</AppStyled>
	);
}

export default App;
