import styled from 'styled-components';
const TableDataStyled = styled.td`
	border: 1px solid black;
	padding: 0.5rem;
`;

const Cell = ({ cellData }) => {
	return <TableDataStyled>{cellData}</TableDataStyled>;
};

export default Cell;
