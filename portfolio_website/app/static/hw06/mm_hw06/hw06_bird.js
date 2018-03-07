function bird (pos) {
    this.pos = pos;
    this.img = loadImage("bird2.png");
    this.scale = 0.1;
    this.spd = new p5.Vector(random(-2, 2), random(1, 2));
    this.grav = 0.5;
    this.friction = 0.875;
    this.damping = 0.786;
}

bird.prototype.display = function() {
    this.pos.x += this.spd.x;
    this.spd.y += this.grav;
    this.pos.y += this.spd.y;
    this.checkCollision();
    image(this.img, this.pos.x, this.pos.y, 
        this.scale*this.img.width, 
        this.scale*this.img.height);
};

bird.prototype.checkCollision = function(){
    if (this.pos.x > width - this.scale*this.img.width){
        this.pos.x = width - this.scale*this.img.width;
        // this.spd.x *= -1;
        this.spd.x = 0;
    } else if (this.pos.x < 0){
        this.pos.x = 0;
        // this.spd.x *= -1;
        this.spd.x = 0;
    }
    if (this.pos.y > height - this.scale*this.img.height){
        this.pos.y = height - this.scale*this.img.height;
        // this.spd.y *= -1;
        // this.spd.y *= this.damping;
        // this.spd.x *= this.friction;
        this.spd.y = 0;
        this.spd.x = 0;
    } else if (this.pos.y < 0){
        this.pos.y = 0;
        this.spd.y *= -0.25;
    }
}