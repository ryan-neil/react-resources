// components
import Header from './components/Header';
import SearchItem from './components/SearchItem';
import AddItem from './components/AddItem';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
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

function App() {
	const [ items, setItems ] = useState(
		// load local storage data (or API data)
		JSON.parse(localStorage.getItem('todolist')) || []
	);
	const [ newItem, setNewItem ] = useState('');
	const [ search, setSearch ] = useState('');

	useEffect(
		() => {
			// save local storage data (or API data), it's now 'items' not 'newItems'
			localStorage.setItem('todolist', JSON.stringify(items));
		},
		[ items ]
	);

	const addItem = (item) => {
		// set id value
		const id = items.length ? items[items.length - 1].id + 1 : 1; // check if 'items' array has a length, if yes get the last item index and subtract 1, if 'items' array has no length, set items.length to 1
		// create new item object
		const myNewItem = { id: id, checked: false, task: item };
		// create new item list array (add the new item to the end of the list)
		const listItems = [ ...items, myNewItem ];
		// update the state of the todo list (same as handleChecked and handleDelete functions)
		setItems(listItems);
	};

	const handleChecked = (id) => {
		// loop through items
		const listItems = items.map(
			// if the item id is equal to the id coming in
			// ? then update the current item's checked status to the opposite of what it currently is
			// : if it is not, return the item
			(item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);
	};

	const handleDelete = (id) => {
		// filter through items and return the items that weren't clicked
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
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
		return items.filter((item) =>
			item.task.toLowerCase().includes(search.toLowerCase())
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
