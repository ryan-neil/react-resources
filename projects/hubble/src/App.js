import { ThemeProvider } from 'styled-components';
import { ThemeStyles } from './components/styles/Theme.styled';
import GlobalStyles from './components/styles/Global.styled';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';

function App() {
	return (
		<ThemeProvider theme={ThemeStyles}>
			<GlobalStyles />
			<Header />
			<Container>
				<h2>We're Firing!!</h2>
			</Container>
		</ThemeProvider>
	);
}

export default App;
