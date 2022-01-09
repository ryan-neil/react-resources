const AddItem = ({ handleSubmit, newItem, setNewItem }) => {
	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<label style={{ display: 'none' }}>Add item</label>
			<input
				type="text"
				placeholder="Add Item"
				required
				value={newItem}
				onChange={(e) => setNewItem(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default AddItem;
