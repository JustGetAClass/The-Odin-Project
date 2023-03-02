const fibonacci = function (count) {
	let output = [1, 1];
	if (count < 0) return `OOPS`;
	if (count === 0) return 0;
	let a = 0;
	let b = 1;
	for (let i = 1; i < count; i++) {
		let temp = b;  //temp = 1
		b = a + b; // b = 0 + 1
		a = temp  // a = 1
	}
	return b;
};

// Do not edit below this line
module.exports = fibonacci;
