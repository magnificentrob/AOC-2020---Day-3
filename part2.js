const fs = require('fs');

var data = '';
var lines = '';
try {
	// read contents of the file
	data = fs.readFileSync('input.txt', 'UTF-8');
	// split the contents by new line
	lines = data.split(/\r?\n/);
} catch (err) {
	console.error(err);
}
function Slope1(){
	var i = 0;
	var trees = 0;
	var linecounter = 0;
	// print all lines
	lines.forEach((line) => {
		if (linecounter > 0) {
			if (i + 1 > 30) {
				i = 0;
			}
			else {
				i += 1;
			}
			if (line[i] == '#') {
				trees++;
			}
		}
		linecounter++;
	});
	return trees;
}
function Slope3(){
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
	return trees;
}
function Slope5(){
	var i = 0;
	var trees = 0;
	var linecounter = 0;
	// print all lines
	lines.forEach((line) => {
		if (linecounter > 0) {
			if (i + 5 > 30) {
				i = i - 30 + 4;
			}
			else {
				i += 5;
			}
			if (line[i] == '#') {
				trees++;
			}
		}
		linecounter++;
	});
	return trees;
}
function Slope7(){
	var i = 0;
	var trees = 0;
	var linecounter = 0;
	// print all lines
	lines.forEach((line) => {
		if (linecounter > 0) {
			if (i + 7 > 30) {
				i = i - 30 + 6;
			}
			else {
				i += 7;
			}
			if (line[i] == '#') {
				trees++;
			}
		}
		linecounter++;
	});
	return trees;
}
function Sloped2(){
	var x = 0;
	var trees = 0;
	for(var i =0; i < lines.length; i+=2){
		if (i != 0){
			if(x + 1 > 30){
				x = 0;
			}
			else{
				x +=1;
			}
			if(lines[i][x] == '#'){
				trees++;
			}
		}
	}
	return trees;
}

var a = Slope1();
var b = Slope3();
var c = Slope5();
var d = Slope7();
var e = Sloped2();
console.log(a*b*c*d*e)