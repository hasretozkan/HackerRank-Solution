var x = 0;
var y = 0;
var z = 0;
arr = arr.sort(function(a, b){return b - a});

for (var i = 0; i < arr.length; i++) {
	x = 0;
	for (var j = i; j < arr.length; j++) {
		if (arr[i] == arr[j]) {
			x++;
		} else {
			break;
		}
	}
	if (y <= x) {
		y = x;
		z = arr[i]
	}
}

return z;