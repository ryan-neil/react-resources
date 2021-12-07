import styled from 'styled-components';

const StyledHeader = styled.header`
	width: 100%;
	text-align: center;
	background-color: royalblue;
	color: white;
	padding: .5rem 0;
`;

const Header = () => {
	return (
		<StyledHeader>
			<h2>Header section</h2>
		</StyledHeader>
	);
};

export default Header;
