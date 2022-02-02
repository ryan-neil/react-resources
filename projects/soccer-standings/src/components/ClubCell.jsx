// styles
import styled from 'styled-components';
const StyledTableData = styled.td`
	display: flex;
	align-items: center;
	gap: 1rem;
	img {
		width: 1.6rem;
		height: 1.6rem;
	}
`;

const ClubCell = ({ badge, data }) => {
	return (
		<StyledTableData>
			<img src={badge} alt="Club Logo" />
			{data}
		</StyledTableData>
	);
};

export default ClubCell;
