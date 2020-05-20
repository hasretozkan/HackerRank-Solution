var x = 0;
var y = 0;

for (var i = 0; i < s.length; i++) {
	y = 0;

	for (var j = i; j < i + m; j++) {
		y += s[j];
	}

	if (y == d) {
		x++;
	}
}

return x;