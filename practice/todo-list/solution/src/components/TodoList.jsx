import { useContext } from 'react';
import ListItem from './ListItem';
import DataProvider from '../context/DataContext';

const TodoList = () => {
	const { items, setItems } = useContext(DataProvider);

	// Update an item
	const handleChecked = (id) => {
		const itemsList = items.map((item) =>
			item.id === id ? { ...item, checked: !item.checked } : item
		);
		setItems(itemsList);
	};

	// Delete an item
	const handleDelete = (id) => {
		const itemsList = items.filter((item) => item.id !== id);
		setItems(itemsList);
	};

	return (
		<div>
			<ul>
				{items.map((item) => (
					<ListItem
						key={item.id}
						item={item}
						handleChecked={handleChecked}
						handleDelete={handleDelete}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
