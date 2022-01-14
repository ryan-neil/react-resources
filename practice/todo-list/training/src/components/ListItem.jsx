const ListItem = ({ item, handleChecked, handleDelete }) => {
	return (
		<li>
			<input
				type="checkbox"
				id="todo-checkbox"
				checked={item.checked}
				onChange={() => handleChecked(item.id)}
			/>
			<label htmlFor="todo-checkbox">{item.item}</label>
			<button onClick={() => handleDelete(item.id)}>Delete</button>
		</li>
	);
};

export default ListItem;
