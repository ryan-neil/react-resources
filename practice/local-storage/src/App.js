// Components
import Counter from './components/Counter';
import Parent from './components/Parent';
// styles
import './styles/globals.css';
import styled from 'styled-components';
const AppStyled = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: space-between; */
	/* justify-content: center; */
`;

function App() {
	return (
		<AppStyled>
			<Counter />
			<Parent />
		</AppStyled>
	);
}

export default App;
