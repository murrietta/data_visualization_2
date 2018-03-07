function marble (pos, grav, rad, color, birthFrame) {
    this.pos = pos;
    this.spd = new p5.Vector(0, 0);
    this.grav = grav;
    this.friction = 0.875;
    this.damping = 0.786;
    this.rad = rad;
    this.color = color;
    this.birthFrame = birthFrame;
    this.isbinned = false;
}

marble.prototype.display = function() {
    if (frameCount >= this.birthFrame){
        this.pos.x += this.spd.x;
        this.spd.y += this.grav;
        this.pos.y += this.spd.y;
        fill(this.color);
        ellipse(this.pos.x, this.pos.y, this.rad, this.rad);   
    }
};