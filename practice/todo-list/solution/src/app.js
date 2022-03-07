// internal
import { DataProvider } from './context/DataContext';
import Header from './components/Header';
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
// styles
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
			<DataProvider>
				<Header title="Todo List" />
				<AddItem />
				<TodoList />
				<Footer />
			</DataProvider>
		</AppStyled>
	);
}

export default App;
