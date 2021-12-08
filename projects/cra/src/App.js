// components
import Header from './components/Header';
import { Main, TodoList } from './components/Main';
import Footer from './components/Footer';
// styles
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const tasks = [
	{
		id: 1,
		checked: true,
		task: 'Wash dishes'
	},
	{
		id: 2,
		checked: false,
		task: 'Vacuum bedroom'
	},
	{
		id: 3,
		checked: true,
		task: 'Call mom'
	}
];

function App() {
	return (
		<Container className="App">
			<Header />
			{/* <Main /> */}
			<TodoList tasks={tasks} />
			<Footer />
		</Container>
	);
}

export default App;
