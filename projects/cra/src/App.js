import './App.css';

import Lottery from './components/Parent';

function App() {
	return (
		<div className="App">
			<Lottery />
			<Lottery title="Mini Lotto" numBalls={4} maxNum={10} />
		</div>
	);
}

export default App;
