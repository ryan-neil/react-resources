// this is the skeleton for the data context

// import 'createContext' from react
import { useState, useEffect, createContext } from 'react';

// define the 'dataContext' and set it equal to the imported 'createContext'
const DataContext = createContext({});

// data provide provides the data to our different components
// 'children' refers to the components that are within the 'dataProvider', the data will then be available to the children of the 'dataProvider'
export const DataProvider = ({ children }) => {
	// we add the, what have been, props inside the value prop of our DataContext.Provider component
	return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

export default DataContext;
