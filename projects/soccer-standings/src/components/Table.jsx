import { useContext } from 'react';
import StandingsContext from '../context/StandingsContext';
import HeadRow from './HeadRow';
import BodyRow from './BodyRow';
// styles
import { Container } from './styles/Utils.styled';

const Table = () => {
	const { standings } = useContext(StandingsContext);

	let cleanedData;
	if (standings) {
		cleanedData = standings.response[0].league.standings[0];
	}

	return (
		<Container>
			{standings && (
				<table>
					<thead>
						<HeadRow />
					</thead>
					<tbody>
						<>
							{cleanedData.map((item) => (
								<BodyRow key={item.team.id} item={item} />
							))}
						</>
					</tbody>
				</table>
			)}
		</Container>
	);
};

export default Table;
