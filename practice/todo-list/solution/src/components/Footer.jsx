import { useContext } from 'react';
import DataProvider from '../context/DataContext';

const Footer = () => {
	const { items } = useContext(DataProvider);

	return (
		<footer>
			<h2>{items.length} Items in List</h2>
		</footer>
	);
};

export default Footer;
