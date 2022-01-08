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

function App() {
	return (
		<AppStyled>
			<h2>App running...</h2>
		</AppStyled>
	);
}

export default App;
