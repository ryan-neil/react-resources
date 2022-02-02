import { useContext } from 'react';
import StandingsContext from '../context/StandingsContext';
import HeadRow from './HeadRow'
import BodyRow from './BodyRow'

const Table = () => {
	const { standings } = useContext(StandingsContext);

	let cleanedData;
	if (standings) {
		cleanedData = standings.response[0].league.standings[0];
	}

  console.log(standings);

	return (
		<main>
      {standings && (
			<table>
        <thead>
          <HeadRow />
        </thead>
				<tbody>
          <>
            {cleanedData.map((item) => (
              <BodyRow key={item.team.id} item={item}/>
            ))}
          </>
				</tbody>
			</table>
      )}
		</main>
	);
};

export default Table;
