import { useLocalStorage } from './hooks/useLocalStorage';
// Components
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
	const [count, setCount] = useLocalStorage('myCount', 0);

	return (
		<AppStyled>
			<div>
				<h2>Counter:</h2>
				<button onClick={() => setCount(0)}>Clear</button>
				<button onClick={() => setCount(count + 1)}>{count}</button>
			</div>

			<Parent />
		</AppStyled>
	);
}

export default App;
