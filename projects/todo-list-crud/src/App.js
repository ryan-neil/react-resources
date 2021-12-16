// components
import Header from './components/Header';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import apiRequest from './components/apiRequest';
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
	justify-content: space-between;
`;

function App() {
	const API_URL = 'http://localhost:9001/items';

	const [ items, setItems ] = useState([]);
	const [ newItem, setNewItem ] = useState('');
	const [ search, setSearch ] = useState('');
	const [ fetchError, setFetchError ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(true);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				// fetch db data
				const res = await fetch(API_URL);
				// look for an error from response
				if (!res.ok)
					throw Error('An error occurred while fetching the data.');
				// receive data in json format
				const listItems = await res.json();
				console.log(listItems);
				// update state to the returned items
				setItems(listItems);
				// update the fetch error
				setFetchError(null);
			} catch (err) {
				console.log(err.message);
				setFetchError(err.message);
				// call 'isLoading'
			} finally {
				setIsLoading(false);
			}
		};

		// simulate delayed fetch call
		setTimeout(() => {
			fetchItems();
		}, 1000);
	}, []);

	const addItem = async (item) => {
		// set id value
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		// create new item object
		const myNewItem = { id: id, checked: false, task: item };
		// create new item list array (add the new item to the end of the list)
		const listItems = [ ...items, myNewItem ];
		// update the state of the todo list (same as handleChecked and handleDelete functions)
		setItems(listItems);

		// define the new item type and content to be sent to REST API -> (db.json)
		const postOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(myNewItem)
		};
		// define the request and send to our API
		const result = await apiRequest(API_URL, postOptions);
		// the apiRequest will only return an error message, either null or the message so we update the fetch error to display in our JSX we created previously
		if (result) setFetchError(result);
	};

	const handleSearch = () => {
		return items.filter((item) =>
			item.task.toLowerCase().includes(search.toLowerCase())
		);
	};

	const handleChecked = async (id) => {
		const listItems = items.map(
			// if the item id is equal to the id coming in ? then update the current item's checked status to the opposite of what it currently is : if it is not, return the item
			(item) =>
				item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(listItems);

		// get the item that has been selected (checked)
		const myItem = listItems.filter((item) => item.id === id);
		// define UPDATE options
		const updateOptions = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ checked: myItem[0].checked })
		};

		// define our request URL (this will be a bit different than the URL for GET and POST)
		const requestURL = `${API_URL}/${id}`;
		// define our result
		const result = await apiRequest(requestURL, updateOptions);
		// again, the apiRequest will only return an error message, either null or the message so we can update setFetchError with this
		if (result) setFetchError(result);
	};

	const handleDelete = async (id) => {
		// filter through items and return the items that weren't clicked
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);

		// define DELETE options
		const deleteOptions = {
			method: 'DELETE'
		};
		// define the request URL (same as UPDATE)
		const requestURL = `${API_URL}/${id}`;
		// define our result
		const result = await apiRequest(requestURL, deleteOptions);
		// again, the apiRequest will only return an error message, either null or the message so we can update setFetchError with this
		if (result) setFetchError(result);
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

	return (
		<Container className="App">
			<Header title="Todo List" />
			<AddItem
				newItem={newItem}
				setNewItem={setNewItem}
				handleSubmit={handleSubmit}
			/>
			<SearchItem search={search} setSearch={setSearch} />
			<main>
				{/* Display loading */}
				{isLoading && <p>Loading items...</p>}
				{/* Display fetch error */}
				{fetchError && (
					<p style={{ color: 'red' }}>{`Error: ${fetchError}`}</p>
				)}
				{/* If no error and not loading data, display todo list */}
				{!fetchError &&
				!isLoading && (
					<TodoList
						items={handleSearch()}
						handleChecked={handleChecked}
						handleDelete={handleDelete}
					/>
				)}
			</main>
			<Footer length={items.length} />
		</Container>
	);
}

export default App;
