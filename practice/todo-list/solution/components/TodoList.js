import ListItem from './ListItem';

const TodoList = ({ items, handleChecked, handleDelete }) => {
	return (
		<ul>
			{items.map((item) => (
				<ListItem
					key={item.id}
					item={item}
					handleChecked={handleChecked}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	);
};

export default TodoList;
