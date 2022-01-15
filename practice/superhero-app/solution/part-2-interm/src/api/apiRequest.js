// create the request to send to the api database

const apiRequest = async (url = '', optionsObj = null, errMsg = null) => {
	try {
		const res = await fetch(url, optionsObj); // the options object determines the requests CRUD operation
		if (!res.ok) throw Error('Please reload the app.');
	} catch (err) {
		errMsg = err.message;
	} finally {
		return errMsg; // the function only returns the error message
	}
};

export default apiRequest;
