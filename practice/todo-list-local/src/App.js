import Header from './components/Header.jsx';
import AddItem from './components/AddItem.jsx';
import TodoList from './components/TodoList.jsx';
import Footer from './components/Footer.jsx';
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
		checked: false,
		item: 'Wash dishes'
	},
	{
		id: 2,
		checked: true,
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

	// handle checked item
	const handleChecked = (id) => {
		const listItems = items.map(
			(item) =>
				item.id === id
					? { ...item, checked: !item.checked }
					: item
		);
		setItems(listItems);
	};
	// handle deleted item
	const handleDelete = (id) => {
		const listItems = items.filter((item) => item.id !== id);
		setItems(listItems);
	};
	// add an item
	// handle submit

	return (
		<AppStyled>
			<Header title="Todo List" />
			<AddItem />
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
