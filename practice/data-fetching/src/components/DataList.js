import styled from 'styled-components';
const DataListContainer = styled.div`
	width: 100%;
	margin-top: 1rem;
`;

function DataList({ setItems }) {
	return (
		<DataListContainer>
			<ul>
				{setItems.map((item) => {
					return <li>{item}</li>;
				})}
			</ul>
		</DataListContainer>
	);
}

export default DataList;
