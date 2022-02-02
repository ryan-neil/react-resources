// styles
import styled from 'styled-components';
const StyledTd = styled.td`
	ul {
		display: flex;
		align-items: center;
		list-style: none;
		gap: 0.5rem;
		li {
			padding: 0.2rem 0.4rem;
			border-radius: 0.25rem;
		}
	}
`;

const win = {
	color: '#45fa39',
	backgroundColor: 'rgba(69, 250, 57, 0.2)'
};

const lose = {
	color: '#da3633',
	backgroundColor: 'rgba(218, 54, 51, 0.2)'
};

const draw = {
	backgroundColor: `${({ theme }) => theme.colors.secondaryBG}`
};

const FormCell = ({ data }) => {
	let arr = [];
	for (let i of data) {
		arr.push(i);
	}

	// https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/

	return (
		<StyledTd>
			<ul>
				{arr.map((item, idx) => (
					<li key={idx} style={item === 'W' ? win : {}}>
						{item}
					</li>
				))}
			</ul>
		</StyledTd>
	);
};

export default FormCell;
