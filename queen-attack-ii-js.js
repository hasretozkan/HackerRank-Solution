let up = n - r_q;
let right = n - c_q;
let down = r_q - 1;
let left = c_q - 1;

let up_left = Math.min(up, left);
let up_right = n - Math.max(c_q, r_q);
let down_left = Math.min(c_q, r_q) - 1;
let down_right = Math.min(r_q - 1, n - c_q);

for (let i of Array.from({ length: k }, (value, index) => index)) {
	let { 0: r_o, 1: c_o } = obstacles[i];

	r_o == r_q &&
	(c_o > c_q
		? (up = Math.min(up, c_o - c_q - 1))
		: (down = Math.min(down, c_q - c_o - 1)));

	c_o == c_q &&
	(r_o > r_q
		? (right = Math.min(right, r_o - r_q - 1))
		: (left = Math.min(left, r_q - r_o - 1)));

	Math.abs(c_o - c_q) == Math.abs(r_o - r_q) &&
	(c_o > c_q && r_o > r_q && (up_right = Math.min(up_right, c_o - c_q - 1)),
		c_o > c_q &&
		r_o < r_q &&
		(down_right = Math.min(down_right, c_o - c_q - 1)),
		c_o < c_q && r_o > r_q && (up_left = Math.min(up_left, c_q - c_o - 1)),
		c_o < c_q &&
		r_o < r_q &&
		(down_left = Math.min(down_left, c_q - c_o - 1)));
}

return right + left + up + down + down_left + up_left + down_right + up_right;