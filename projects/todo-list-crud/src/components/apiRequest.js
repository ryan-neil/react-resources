// helper fetch function to be used all create, update, and delete operations
const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
	try {
		// the options object determines the CRUD operation
		const response = await fetch(url, optionsObj);
		// error handling
		if (!response.ok) throw Error('Please reload the app');
	} catch (err) {
		// if error, update the error message
		errMsg = err.message;
	} finally {
		// the function will only return an error message, either null or the error message
		return errMsg;
	}
};

export default apiRequest;
