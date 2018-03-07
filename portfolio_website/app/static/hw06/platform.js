function platform (pos, width, color) {
	//height is inferred from pos.y
    this.pos = pos;
    this.width = width;
    this.color = color;
}

platform.prototype.display = function() {
    fill(this.color);
    rect(this.pos.x, this.pos.y, this.width, height - this.pos.y);
    //apparently there's no need to pass an explicit reference to the canvas
    //I can just access the canvas' height attribute as in the last line
};