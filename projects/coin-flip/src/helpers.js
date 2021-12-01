function choice(arr) {
	let randomIndex = Math.floor(Math.random() * arr.length);
	// return the array at that random index
	return arr[randomIndex];
}

export { choice };
