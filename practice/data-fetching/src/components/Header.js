import styled from 'styled-components';
const HeaderContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	button {
		flex: 1;
	}
`;

function Header() {
	return (
		<HeaderContainer>
			<button>Users</button>
			<button>Posts</button>
			<button>Comments</button>
		</HeaderContainer>
	);
}

export default Header;
