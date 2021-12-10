const LineItem = ({ item, handleChecked, handleDelete }) => {
	return (
		<li>
			<input
				type="checkbox"
				checked={item.checked}
				onChange={() => handleChecked(item.id)}
			/>
			<label
				style={item.checked ? { textDecoration: 'line-through' } : null}
			>
				{item.task}
			</label>
			<button onClick={() => handleDelete(item.id)}>Delete</button>
		</li>
	);
};

export default LineItem;
