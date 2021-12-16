import ListItem from './ListItem';
import styled from 'styled-components';
const UlStyled = styled.ul`
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const DataList = ({ items }) => {
	return (
		<UlStyled>
			{items.map((item) => <ListItem key={item.id} item={item} />)}
		</UlStyled>
	);
};

export default DataList;
