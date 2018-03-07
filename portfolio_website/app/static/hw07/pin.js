function pin (pos, rad, color) {
    this.pos = pos;
    this.rad = rad;
    this.color = color;
}

pin.prototype.display = function() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
    // console.log("Pin display called!");
};