import Header from './components/Header';
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState } from 'react';
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

const data = [
	{
		id: 1,
		checked: true,
		item: 'Wash dishes'
	},
	{
		id: 2,
		checked: false,
		item: 'Vacuum bedroom'
	},
	{
		id: 3,
		checked: true,
		item: 'Call mom'
	}
];

function App() {
	const [ items, setItems ] = useState(data);
	const [ newItem, setNewItem ] = useState('');

	// handle checked
	const handleChecked = (id) => {
		// update the object being checked
		const listItems = items.map((item) => {
			return item.id === id ? { ...item, checked: !item.checked } : item;
		});
		// update state with new checked state
		setItems(listItems);
	};

	// handle delete
	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		// update state to new filtered array
		setItems(listItems);
	};

	// handle add new item
	const addItem = (item) => {
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		const myNewItem = { id: id, checked: false, item: item };
		const listItems = [ ...items, myNewItem ];
		setItems(listItems);
	};

	// handle submitting new item
	const handleSubmit = (e) => {
		e.preventDefault();
		addItem(newItem);
		setNewItem('');
	};

	return (
		<AppStyled>
			<Header title="Todo List" />
			<AddItem
				handleSubmit={handleSubmit}
				newItem={newItem}
				setNewItem={setNewItem}
			/>
			<TodoList
				items={items}
				handleChecked={handleChecked}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</AppStyled>
	);
}

export default App;
