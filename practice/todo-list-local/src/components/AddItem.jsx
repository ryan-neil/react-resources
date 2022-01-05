const AddItem = () => {
	return (
		<form>
			<label htmlFor="add-form" style={{ display: 'none' }}>
				Add Item
			</label>
			<input type="text" id="add-form" placeholder="Add an Item" />
			<button type="submit">Submit</button>
		</form>
	);
};

export default AddItem;
