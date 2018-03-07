var bird;
// var bldg;
var scene;
var bkgnd;

function setup(){
	var canvas = createCanvas(0.8*windowWidth, 0.8*windowHeight);
	canvas.parent('sketch-holder');
	bird = new bird(new p5.Vector(width/6, height/2));
	// bkgnd = loadImage("./static/hw06/city_bkgrnd.jpg");
	scene = new scene()
}

function draw(){
	// background(200, 200, 200);
	// image(bkgnd, 0, 0, width, height);
	scene.display();
	bird.display();
	checkKey();
	if (keyIsDown(32)){
		//jump or fly effect
		bird.spd.y += -1;
	}
	if (keyIsDown(99)){ //or 67, not sure which it was
		//then shoot laser

	}
	// keyPressed();
}

function checkKey(){
	//hold down shift to "run"
	if (keyIsDown(16) & keyIsDown(LEFT_ARROW)){
		bird.pos.x -= 15;
	}else if (keyIsDown(LEFT_ARROW)){
		bird.pos.x -= 6;
	}
	if (keyIsDown(16) & keyIsDown(RIGHT_ARROW)){
		bird.pos.x += 15;
	}else if (keyIsDown(RIGHT_ARROW)){
		bird.pos.x += 6;
	}
}

// function keyPressed(){
// 	console.log(keyCode);
// }