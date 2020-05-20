var x = 0;
var y = 0;

for (var i = 0; i < ar.length; i++) {
	for (var j = i + 1; j < ar.length; j++) {
		x = 0;
		x = ar[i] + ar[j];
		if (x % k == 0) {
			y++;
		}
	}
}

return y;