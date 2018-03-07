var vboard; //had to change it to vboard from board because after
			//running once it no longer can reference the constructor
			//but only the local variable
var prob;

function setup() {
	reset();
}
function draw(){
 	background(0);
	prob = document.getElementById("prob").value/100;
 	vboard.display(prob);
}
function reset(){
	var canvas = createCanvas(710, 400);
	canvas.parent('sketch-holder');
 	background(0);
	numRows = document.getElementById("num_rows").value;
	numMarbs = document.getElementById("num_marbles").value;
	// console.log("RESET PRESSED!");
	vboard = new board(10, numMarbs);
}