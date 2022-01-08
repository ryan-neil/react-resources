import Cell from './Cell';

const Row = ({ item }) => {
	return (
		<tr>
			{Object.entries(item).map(([ key, val ]) => (
				<Cell ket={key} cellData={JSON.stringify(val)} />
			))}
		</tr>
	);
};

export default Row;
