import { useLocalStorage } from '../hooks/useLocalStorage';

const Counter = () => {
	const [count, setCount] = useLocalStorage('myCount', 0);

	return (
		<div>
			<h2>Counter:</h2>
			<button onClick={() => setCount(0)}>Clear</button>
			<button onClick={() => setCount(count + 1)}>{count}</button>
		</div>
	);
};

export default Counter;
