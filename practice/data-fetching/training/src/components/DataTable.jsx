import Row from './Row';
import styled from 'styled-components';
const DivStyled = styled.div`
	width: 100%;
	height: auto;
`;

const Table = ({ items }) => {
	return (
		<DivStyled>
			<table>
				<tbody>
					{items.map((item) => (
						<Row key={item.id} item={item} />
					))}
				</tbody>
			</table>
		</DivStyled>
	);
};

export default Table;
