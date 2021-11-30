import { ThemeProvider } from 'styled-components';
import Theme from './components/styles/Theme.styled';
import GlobalStyles from './components/styles/Global.styled';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import content from './content';
import Card from './components/Card';

// map through our content and output a card for each object

function App() {
	return (
		<ThemeProvider theme={Theme}>
			<GlobalStyles />
			<Header />
			<Container>{content.map((item, idx) => <Card />)}</Container>
		</ThemeProvider>
	);
}

export default App;
