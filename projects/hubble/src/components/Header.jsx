import {
	StyledHeader,
	Nav,
	Logo,
	H1,
	Paragraph,
	Image
} from './styles/Header.styled';
import Container from './styles/Container.styled';
import Flex from './styles/Flex.styled';
import Button from './styles/Button.styled';

function Header() {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src="./images/logo.svg" alt="Logo" />
					<Button>Try it free!</Button>
				</Nav>

				<Flex>
					<div>
						<H1>Build the Community Your Fans Will Love</H1>
						<Paragraph>
							Huddle re-imagines the way we build communities.
							You have a voice, but so does your audience.
							Create connections with your users as you engage
							in genuine discussions.
						</Paragraph>
						<Button bg="#ff0099" color="#ffffff">
							Get Started For Free
						</Button>
					</div>

					<Image
						src="./images/illustration-mockups.svg"
						alt="Illustration Mock Up"
					/>
				</Flex>
			</Container>
		</StyledHeader>
	);
}

export default Header;
