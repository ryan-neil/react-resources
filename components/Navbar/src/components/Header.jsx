import {
	StyledHeader,
	Nav,
	Img,
	H1,
	Tag,
	SearchContainer,
	InputSearchIcon,
	Input,
	SearchIcon,
	SunIcon,
	MoonIcon
} from './styles/Header.styled';
import Container from './styles/utils/Container.styled';
import { Flex } from './styles/utils/Flex.styled';

function Header(props) {
	function toggleTheme() {
		return props.theme === 'light'
			? props.setTheme('dark')
			: props.setTheme('light');
	}

	const themeIcon =
		props.theme === 'light' ? (
			<MoonIcon onClick={toggleTheme} />
		) : (
			<SunIcon onClick={toggleTheme} />
		);

	return (
		<StyledHeader>
			<Container>
				<Nav>
					{/* Logo */}
					<Flex>
						<Img src="./logo.svg" />
						<H1>GoSurf</H1>
						<Tag>Beta</Tag>
					</Flex>
					{/* SearchBar */}
					<SearchContainer>
						<InputSearchIcon />
						<Input type="text" placeholder="Search spot" />
					</SearchContainer>
					{/* Widgets */}
					<Flex>
						<SearchIcon />
						{themeIcon}
					</Flex>
				</Nav>
			</Container>
		</StyledHeader>
	);
}

export default Header;
