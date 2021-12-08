import styled from 'styled-components';
import { useState } from 'react';

const MainStyled = styled.main`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Main = () => {
	return (
		<MainStyled>
			<h1>Main section</h1>
		</MainStyled>
	);
};

const TodoList = ({ tasks }) => {
	const [ items, setItems ] = useState(tasks);

	const handleCheck = (id) => {
		// if the item id is = to the id coming in, return a new item which is the same item but toggling the 'checked' status, if not equal, return the item that already exists
		const listItems = items.map(
			(i) => (i.id === id ? { ...i, checked: !i.checked } : i)
		);

		setItems(listItems);
	};

	const lis = items.map((i) => {
		return (
			<li key={i.id}>
				<input
					type="checkbox"
					checked={i.checked}
					onChange={() => handleCheck(i.id)}
				/>
				<label>{i.task}</label>
				<button>Delete</button>
			</li>
		);
	});

	return (
		<MainStyled>
			<ul>{lis}</ul>
		</MainStyled>
	);
};

// export default Main;
export { Main, TodoList };
