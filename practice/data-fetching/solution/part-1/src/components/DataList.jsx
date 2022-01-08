import ListItem from './ListItem';

const DataList = ({ items }) => {
	return (
		<main>
			<ul>
				{items.map((item) => (
					<ListItem key={item.id} item={item} />
				))}
			</ul>
		</main>
	);
};

export default DataList;
