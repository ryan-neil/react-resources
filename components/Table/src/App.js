import Table from './components/Table';
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

const list = [
	{
		id: 1,
		name: 'Katie',
		age: 28
	},
	{
		id: 2,
		name: 'Ryan',
		age: 30
	},
	{
		id: 3,
		name: 'Peter',
		age: 34
	}
];

function App() {
	return (
		<AppStyled>
			<Table />
		</AppStyled>
	);
}

export default App;
