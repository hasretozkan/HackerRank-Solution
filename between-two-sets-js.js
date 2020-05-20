function getTotalX(a, b) {
	const lowLimit = a[a.length—1];
	const highLimit = b[0];
	let consideredMultiples = [];
	for (let i = lowLimit; i <= highLimit; i += lowLimit) {
		consideredMultiples.push(i);
	}
	consideredMultiples = consideredMultiples.filter(multiple => {
		return a.reduce((shouldFilter, val) => {
			if (multiple % val !== 0) {
				return false;
			} else if (shouldFilter) {
				return true
			}
		}, true);
	});
	consideredMultiples = consideredMultiples.filter(multiple => {
		return b.reduce((shouldFilter, val) => {
			if (val % multiple !== 0) {
				return false;
			}
			else if (shouldFilter) {
				return true
			}
		}, true);
	});
	return consideredMultiples.length;
}