import Cell from './Cell';

const BodyRow = ({ item }) => {
	return (
		<tr>
			<Cell data={item.rank} />
			<Cell data={item.team.name} />
			<Cell data={item.all.played} />
			<Cell data={item.all.win} />
			<Cell data={item.all.draw} />
			<Cell data={item.all.lose} />
			<Cell data={item.all.goals.for} />
			<Cell data={item.all.goals.against} />
			<Cell
				data={
					item.goalsDiff > 0 ? `+${item.goalsDiff}` : item.goalsDiff
				}
			/>
			<Cell data={item.points} />
			<Cell data={item.form} />
		</tr>
	);
};

export default BodyRow;
