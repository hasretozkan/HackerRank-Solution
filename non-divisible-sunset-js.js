let values = new Array(k).fill(0);
let result = 0;

s.reduce((target, item, index) => {
	values[item % k] += 1;

	return target;
}, []);

for (let i of Array.from(
	{ length: (k + 1) / 2 - 1 },
	(value, index) => index + 1
	)) {
	result += Math.max(values[i], values[k - i]);
}

!(k % 2) && !!values[k / 2] && (result += 1);

values[0] && (result += 1);

return result;