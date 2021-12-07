import { useState } from 'react';
// Global Styles
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styled';
import { mode } from './components/styles/utils/Theme.styled';
// Components
import Header from './components/Header.jsx';

function App() {
	const [ theme, setTheme ] = useState('light');

	return (
		<ThemeProvider theme={mode[theme]}>
			<div>
				<GlobalStyles />
				<Header theme={theme} setTheme={setTheme} />
			</div>
		</ThemeProvider>
	);
}

export default App;
