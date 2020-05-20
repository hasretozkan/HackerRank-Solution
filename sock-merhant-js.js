var z = 0;

ar.sort(function(a, b){return a - b});

for (var i = 0; i < ar.length; i++) {
	const result = ar.filter(number => number == ar[i]);
	z += Math.floor(result.length / 2);
	i = i + result.length - 1;
}

return z;
