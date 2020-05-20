function breakingRecords(scores) {
	var highest = scores[0];
	var lowest = scores[0];
	var highestScore = 0;
	var lowestScore = 0;

	for (var i = 1; i < scores.length; i++) {
		if (scores[i] > highest) {
			highestScore++;
			highest = scores[i];
		}

		if (scores[i] < lowest) {
			lowestScore++;
			lowest = scores[i];
		}
	}

	return [highestScore, lowestScore];
}