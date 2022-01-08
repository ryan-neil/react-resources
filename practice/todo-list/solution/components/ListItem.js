const ListItem = ({ item, handleChecked, handleDelete }) => {
	return (
		<li key={item.id}>
			<input
				type="checkbox"
				checked={item.checked}
				onChange={() => handleChecked(item.id)}
			/>
			<label>{item.item}</label>
			<button onClick={() => handleDelete(item.id)}>Delete</button>
		</li>
	);
};

export default ListItem;
