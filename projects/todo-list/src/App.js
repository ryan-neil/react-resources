// components
import Header from './components/Header';
import SearchItem from './components/SearchItem';
import AddItem from './components/AddItem';
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

// default data
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
	const [ items, setItems ] = useState(
		JSON.parse(localStorage.getItem('todolist'))
	);
	const [ newItem, setNewItem ] = useState('');
	// 1. set search state
	const [ search, setSearch ] = useState('');

	const setStateAndSaveItemsLocally = (newItems) => {
		setItems(newItems);
		localStorage.setItem('todolist', JSON.stringify(newItems));
	};

	const addItem = (item) => {
		// set id value
		const id = items.length ? items[items.length - 1].id + 1 : 1; // check if 'items' array has a length, if yes get the last item index and subtract 1, if 'items' array has no length, set items.length to 1
		// create new item object
		const myNewItem = { id: id, checked: false, task: item };
		// create new item list array (add the new item to the end of the list)
		const listItems = [ ...items, myNewItem ];
		// update the state of the todo list (same as handleChecked and handleDelete functions)
		setStateAndSaveItemsLocally(listItems);
	};

	const handleChecked = (id) => {
		const listItems = items.map(
			(item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
		);
		setStateAndSaveItemsLocally(listItems);
	};

	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setStateAndSaveItemsLocally(listItems);
	};

	const handleSubmit = (e) => {
		// prevent page refresh
		e.preventDefault();
		// check for a new item
		if (!newItem) return;
		// add new item helper function
		addItem(newItem);
		// reset the input to default state
		setNewItem('');
	};

	const handleSearch = () => {
		return items.filter(
			// (item) => item.task.includes(search)
			// toLowerCase to remove casing
			(item) => item.task.toLowerCase().includes(search.toLowerCase())
		);
	};

	return (
		<Container className="App">
			<Header title="Todo List" />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem search={search} setSearch={setSearch} />
			<TodoList
				items={handleSearch()}
				handleChecked={handleChecked}
				handleDelete={handleDelete}
			/>
			<Footer length={items.length} />
		</Container>
	);
}

export default App;
