import LineItem from './LineItem';

const ItemList = ({ items, handleChecked, handleDelete }) => {
	return (
		<ul>
			{items.map((item) => {
				return (
					<LineItem
						key={item.id}
						item={item}
						handleChecked={handleChecked}
						handleDelete={handleDelete}
					/>
				);
			})}
		</ul>
	);
};

export default ItemList;
