// components
import ItemList from './ItemList';
// styles
import styled from 'styled-components';
const TodoStyled = styled.main`
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h3 {
		font-size: 1.4rem;
		font-weight: 400;
	}
`;

const TodoList = ({ items, handleChecked, handleDelete }) => {
	return (
		<TodoStyled>
			{items.length ? (
				<ItemList
					items={items}
					handleChecked={handleChecked}
					handleDelete={handleDelete}
				/>
			) : (
				<h3>Your list is empty...</h3>
			)}
		</TodoStyled>
	);
};

export default TodoList;
