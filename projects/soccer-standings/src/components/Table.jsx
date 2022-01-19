const Table = ({ items }) => {
	return (
		<main>
			<ul>
				{items.map((item) => <li key={item.team.id}>{item.team.name}</li>)}
			</ul>
		</main>
	);
};

export default Table;
