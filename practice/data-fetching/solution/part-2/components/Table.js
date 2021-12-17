import Row from './Row';

import styled from 'styled-components';
const TableStyled = styled.div`
	margin-top: 4rem;
	width: 100%;
`;

const Table = ({ items }) => {
	return (
		<TableStyled>
			<table>
				<tbody>
					{items.map((item) => <Row key={item.id} item={item} />)}
				</tbody>
			</table>
		</TableStyled>
	);
};

export default Table;
