// styles
import './styles/globals.css';
import styled from 'styled-components';
const AppStyled = styled.div`
	/* background-color: #22272e; */
	/* color: #8e99a5; */
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;

function App() {
	return (
		<AppStyled>
			<h2>Todo List Training...</h2>
		</AppStyled>
	);
}

export default App;
