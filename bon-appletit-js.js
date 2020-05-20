var y = 0;

for (var i = 0; i < bill.length; i++) {
	if (i != k) {
		y += bill[i];
	}
}

y = y / 2;

if (b - y == 0) {
	console.log('Bon Appetit');
} else {
	console.log(b - y);
}