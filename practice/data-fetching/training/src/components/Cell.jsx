import styled from 'styled-components';
const TdStyled = styled.td`border: 1px solid slategrey;`;

const Cell = ({ cellData }) => {
	return <TdStyled>{cellData}</TdStyled>;
};

export default Cell;
