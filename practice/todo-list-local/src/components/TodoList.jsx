import styled from 'styled-components';
const StyledUl = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	li {
		list-style: none;
		display: flex;
		align-items: center;
		gap: 1rem;
	}
`;

const TodoList = ({ items, handleChecked, handleDelete }) => {
	return (
		<StyledUl>
			{items.map((item) => (
				<li key={item.id}>
					<input
						type="checkbox"
						id="checkbox"
						checked={item.checked}
						onChange={() => handleChecked(item.id)}
					/>
					<label htmlFor="checkbox">{item.item}</label>
					<button onClick={() => handleDelete(item.id)}>
						Delete
					</button>
				</li>
			))}
		</StyledUl>
	);
};

export default TodoList;
