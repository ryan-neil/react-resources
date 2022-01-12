// external
import { useState, useEffect, createContext } from 'react';
// internal
import useAxiosFetch from '../hooks/useAxiosFetch';

// define the 'dataContext' and set it equal to the imported 'createContext'
const DataContext = createContext({});

// dataProvider provides the data to our different components, 'children' refers to the components that are within the 'dataProvider', the data will then be available to the children of the 'dataProvider'
export const DataProvider = ({ children }) => {
	// states
	const [ posts, setPosts ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ searchResults, setSearchResults ] = useState([]);
	// hooks
	const { data, fetchError, isLoading } = useAxiosFetch(
		'http://localhost:9001/posts'
	);

	// update the post state data for the rest of the app to use, this only happens when the 'data' changes
	useEffect(
		() => {
			setPosts(data);
		},
		[ data ]
	);

	// filtered search results useEffect
	useEffect(
		() => {
			// filter out our results
			const filteredResults = posts.filter(
				(post) =>
					post.body.toLowerCase().includes(search.toLowerCase()) ||
					post.title.toLowerCase().includes(search.toLowerCase())
			);
			// update search state
			setSearchResults(filteredResults.reverse());
		},
		[ posts, search ]
	);

	// add the component props inside the value prop of DataContext.Provider component
	return (
		<DataContext.Provider
			value={{
				// Nav props
				search,
				setSearch,
				// Home props
				searchResults,
				fetchError,
				isLoading,
				// EditPost props
				posts,
				setPosts
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

export default DataContext;
