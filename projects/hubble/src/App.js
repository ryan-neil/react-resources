import { ThemeProvider } from 'styled-components';
// Globals
import Theme from './components/styles/Theme.styled';
import GlobalStyles from './components/styles/Global.styled';
// Components
import Header from './components/Header.jsx';
import Container from './components/styles/Container.styled';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
// Content
import content from './assets/content';

// map through our content and output a card for each object

function App() {
	return (
		<ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((i, idx) => (
            <Card key={idx} item={i}/>
            ))}
        </Container>
        <Footer/>
      </>
		</ThemeProvider>
	);
}

export default App;
