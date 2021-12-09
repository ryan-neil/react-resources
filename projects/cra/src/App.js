// components
import Header from './components/Header';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState } from 'react';
// styles
import './App.css';
import styled from 'styled-components';
const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

// data
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
	},
	{
		id: 4,
		checked: true,
		task: 'Clean fans'
	},
	{
		id: 5,
		checked: true,
		task: 'Wrap presents'
	}
];

function App() {
	const [ items, setItems ] = useState(tasks);

	const handleChecked = (id) => {
		const listItems = items.map(
			(item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
		localStorage.setItem('todolist', JSON.stringify(listItems));
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
		localStorage.setItem('todolist', JSON.stringify(listItems));
	};

	return (
		<Container className="App">
			<Header title="Todo List" />
			<TodoList
				items={items}
				handleChecked={handleChecked}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</Container>
	);
}

export default App;
