import SocialIcons from './SocialIcons';
// Styles
import Container from './styles/Container.styled';
import Flex from './styles/Flex.styled';
import FooterStyled from './styles/Footer.styled';

export default function Footer() {
	return (
		<FooterStyled>
			<Container>
				<img src="./images/logo_white.svg" alt="" />

				<Flex>
					<ul>
						<li>
							Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Beatae voluptate porro fuga!
						</li>
						<li>+1-123-456-7891</li>
						<li>email@email.com</li>
					</ul>

					<ul>
						<li>About Us</li>
						<li>What We Do</li>
						<li>FAQ</li>
					</ul>

					<ul>
						<li>Careers</li>
						<li>Blog</li>
						<li>Contact Us</li>
					</ul>

					<SocialIcons />
				</Flex>

				<p>&copy; 2021 Huddle. All rights reserved</p>
			</Container>
		</FooterStyled>
	);
}
