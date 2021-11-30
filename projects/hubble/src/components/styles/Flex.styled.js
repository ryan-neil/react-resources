import styled from 'styled-components';

const Flex = styled.div`
	display: flex;
	align-items: center;

	/* > = any direct descendant (setting the general columns) */
	& > div,
	& > ul {
		flex: 1;
	}

	/* Responsive Queries */
	@media (max-width: ${({ theme }) => theme.mobile.width}) {
		flex-direction: column;
		text-align: center;
	}
`;

export default Flex;
