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
	ul {
		width: auto;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	li {
		width: 100%;
		list-style: none;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		padding: 0.35rem 0.5rem;
		background-color: #e7e9eb;
		border-radius: .35rem;
		input {
			cursor: pointer;
		}
		button {
			border: none;
			background: transparent;
			padding: 0.25rem;
			cursor: pointer;
			font-size: 0.7rem;
			color: white;
			background-color: crimson;
			border-radius: .35rem;
			&:hover {
				opacity: 0.9;
			}
		}
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
