import styled from 'styled-components';

const Container = styled.div`
	width: ${({ theme }) => theme.web.width};
	max-width: 100%;
	padding: 0 20px;
	margin: 0 auto;
`;

export default Container;