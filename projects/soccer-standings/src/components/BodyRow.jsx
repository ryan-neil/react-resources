import Cell from './Cell';
import ClubCell from './ClubCell';
import FormCell from './FormCell';

const BodyRow = ({ item }) => {
	return (
		<tr>
			<Cell data={item.rank} />
			<ClubCell badge={item.team.logo} data={item.team.name} />
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
			<FormCell data={item.form} />
		</tr>
	);
};

export default BodyRow;
