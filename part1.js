const fs = require('fs');

try {
	// read contents of the file
	const data = fs.readFileSync('input.txt', 'UTF-8');

	// split the contents by new line
	const lines = data.split(/\r?\n/);

	var i = 0;
	var trees = 0;
	var linecounter = 0;
	// print all lines
	lines.forEach((line) => {
		if (linecounter > 0) {
			if (i + 3 > 30) {
				i = i - 30 + 2;
			}
			else {
				i += 3;
			}
			if (line[i] == '#') {
				trees++;
			}
		}
		linecounter++;
	});
	console.log(linecounter + " " + trees);
} catch (err) {
	console.error(err);
}