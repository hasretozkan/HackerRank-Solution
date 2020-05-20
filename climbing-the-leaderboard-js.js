var x = 0;
var ans = [];
var y = 0;

for (var i = 0; i < alice.length; i++) {
	scores.push(alice[i]);
	scores.sort(function(a, b){return b - a});
	x = 0;
	y = 0;
	for (var j = 0; j < scores.length; j++) {
		if (scores[j] != scores[j-1]) {
			x++;
		}

		if (alice[i] == scores[j]) {
			y = j;
			break;
		}
	}
	scores.splice(y,1);
	ans.push(x);
}

return ans;
