//manages the platforms
//what if scene instead managed the platforms and the bird?
//then scene could check collisions with platforms
//also, instead of explicitly making buildings we just randomly create them and allow
//them to persist until they reach x = 0 giving a scrolling effect. to this end we
//will have no mor than 2 buildings on the screen at one time

function scene (bkgrnd_img = "", noImage = false){
	//two buildings just off of screen to the right
	this.bldgs = [new platform(new p5.Vector(width, 0.6*height), 20, color(211, 211, 211)), 
					new platform(new p5.Vector(width + 60, 0.6*height), 30, color(211, 211, 211))];
	//load in a background image, there is a default
	if (bkgrnd_img != ""){
		this.bkgrnd_img = loadImage(bkgrnd_img);
	} else {
		this.bkgrnd_img = loadImage("city_bkgrnd.jpg");
	}
	// this.init();
	//we need a scroll speed for the whole scene
	this.spd = -3;
}

// scene.prototype.init = function() {
// 	for (var i = 0; i < this.num_bldg; i++){
// 		this.bldgs.push(new platform(this.pos[i], this.widths[i], this.colors[i]));
// 	}
// }

scene.prototype.display = function() {
	//update according to scene speed
	this.update();
	//render the background
	if (this.noImage){
		background(255);
	} else{
		image(this.bkgrnd_img, 0, 0, width, height);
	}
	//render the buildings
	for (var i = 0; i < this.bldgs.length; i++){
		this.bldgs[i].display();
	}
}

scene.prototype.update = function(){
	for (var i = 0; i < this.bldgs.length; i++){
		this.bldgs[i].pos.x += this.spd;
		// console.log("this.bldgs[" + i + "].pos.x = " + this.bldgs[i].pos.x);

		//if a building is off screen to the left then recycle it
		if (this.bldgs[i].pos.x + this.bldgs[i].width < 0){
			if (i == 0){
				this.bldgs[i].pos.x = width;
			} else {
				//then we are in the other bldg and its location depends on the first
				this.bldgs[i].pos.x = this.bldgs[0].pos.x + this.bldgs[0].width + random(60, 120);
			}
			//change its width and height a little too
			this.bldgs[i].width = random(30, 60);
			this.bldgs[i].pos.y = random(0.2, 0.8)*height;
		}
	}
}