import styled from 'styled-components';
const StyledHeader = styled.header`
	width: 100%;
	text-align: center;
	background-color: royalblue;
	color: white;
	padding: .5rem 0;
	h2 {
		font-size: 1.6rem;
		font-weight: 400;
	}
`;

const Header = ({ title }) => {
	return (
		<StyledHeader>
			<h2>{title}</h2>
		</StyledHeader>
	);
};

Header.defaultProps = {
	title: 'Todo List'
};

export default Header;
