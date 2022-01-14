import { useState, useContext } from 'react';
import DataProvider from '../context/DataContext';

const AddItem = () => {
	const [ newItem, setNewItem ] = useState('');
	const { items, setItems } = useContext(DataProvider);

	// handle add item
	const addItem = (item) => {
		// create the new item obj
		// set id
		const id = items.length ? items[items.length - 1].id + 1 : 1;
		// create obj
		const myNewItem = { id: id, checked: false, item: item };
		// add to list items array
		const listItems = [ ...items, myNewItem ];
		// update items state
		setItems(listItems);
	};

	// handle submit
	const handleSubmit = (e) => {
		// prevent default
		e.preventDefault();
		// add the item
		addItem(newItem);
		// reset the state
		setNewItem('');
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<label htmlFor="add-item" style={{ display: 'none' }}>
				Add Item
			</label>
			<input
				type="text"
				id="add-item"
				placeholder="Add item..."
				required
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default AddItem;
