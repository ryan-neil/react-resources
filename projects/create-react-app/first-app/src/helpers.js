// export 2 array helper functions

// return a randomly selected item from an array of items
function choice(items) {
	const idx = items[Math.floor(Math.random() * items.length)];
	return idx;
}

// remove the first matching item from items, if item exists
// return it. Otherwise return undefined.
function remove(items, item) {
	for (let i = 0; i < items.length; i++) {
		if (items[i] === item) {
			return [ ...items.slice(0, i), ...items.slice(i + 1) ];
		}
	}
}

export { choice, remove };
