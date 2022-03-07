import { useState, createContext } from 'react';
// api
import { data } from '../api/items';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [items, setItems] = useState(data);

	return (
		<DataContext.Provider
			value={{
				items,
				setItems,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
