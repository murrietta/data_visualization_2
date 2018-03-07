//board manages the pins and balls
//also want it to manage a sort of histogram at the bottom
//of the board
function board(numRows, numMarbles){
	//pins and balls are dependent on the width of the canvase
	//we want the balls to have radius 0.03*width and then the pins
	//will be 0.01*width with a 0.005 buffer
	//so we'll have x pins where x is width/(2*0.03*width + 2*0.01*width + 0.005)
	this.sep = (0.03*width + 0.01*width + 2*0.005);
	this.numPinsInRow = round(width/this.sep);
	this.numRows = numRows;
	this.numMarbles = numMarbles;
	this.grav = 0.05;	//perhaps make this an argument so we can try different weights
						//instead of different numbers of rows

	//init the pins
	this.pins = [];
	this.bins = [];
	for (i = 0; i < this.numRows; i++){
		this.pins.push([]);
		for (j = 0; j < this.numPinsInRow; j++){
			shift = 1 + (i%2)/2;
			if (7 < j & j < 17){
				clr = color(255, 255, 255);
			} else {
				clr = color(153, 76, 0);	
			}
			this.pins[i].push(new pin(new p5.Vector((j + shift)*this.sep, (i + 1)*this.sep), 0.007*width, clr));
			if (i == this.numRows - 1){
				this.bins.push([(j + shift)*this.sep, 0]);	//first value is the right edge of the bin, second is the frequency
			}
		}
	}
	// console.log(this.bins);

	//init the marbles
	this.marbles = [];
	for (i = 0; i < this.numMarbles; i++){
		this.marbles.push(new marble(new p5.Vector(width/2, 0), this.grav, 0.01*width, color(188, 198, 204), 30*(i+1) + frameCount));
	}
}

board.prototype.display = function(prob){	//pass in prob to allow dynamic changing
	for (i = 0; i < this.numRows; i++){
		for (j = 0; j < this.numPinsInRow; j++){
			this.pins[i][j].display();
		}
	}
	for (k = 0; k < this.numMarbles; k++){
		//woo, now the process intensive part, check collisions with pins
		for (i = 0; i < this.numRows; i++){
			for (j = 0; j < this.numPinsInRow; j++){
				// console.log(i + ", " + j);
				this.checkPinCollision(this.marbles[k], this.pins[i][j], prob);
			}
		}
		this.checkEdgeCollision(this.marbles[k]);
		this.marbles[k].display();
		//loop over the bins now and display a rectangle of suitable height
		//corresponding to the number of marbles in that bin
		mult = 10; //rect height multiplier
		for (i = 0; i < this.numPinsInRow; i++){
			if (this.bins[i][1] > 0){
				fill(135,206,250,10);
				rect(this.bins[i][0] - 1.5*this.sep, height - mult*this.bins[i][1], this.sep, mult*this.bins[i][1]);
			}
		}
	}
}

//the balls won't bounce off of eachother for now but will just pass through each other
//they do have to bounce off the pins though
board.prototype.checkPinCollision = function(m, p, prob){
	//m is a marble, p is a pin
	//lets also throw in the effect that we can only interact with pins
	//that are below our marble
	if (m.pos.y < p.pos.y){
		dx = m.pos.x - p.pos.x;
		dy = m.pos.y - p.pos.y;
		dist = Math.sqrt(dx*dx + dy*dy);
		if (dist < m.rad + p.rad) {
			// console.log("pin collision detected!");
	    	//now we decide whether to go right or left
	    	rn = Math.random() + 0.01;
	    	if (rn <= prob){
	    		//go right if the random number is less than or equal to the probability
	    		//to go right we just take the absolute value of the speed and adjust the
	    		//marble to be on the right side of the pin
	    		m.spd.x = Math.abs(m.spd.x);
	    		m.pos.x = p.pos.x + p.rad + m.rad;
	    	} else {
	    		m.spd.x = -Math.abs(m.spd.x);
	    		m.pos.x = p.pos.x - p.rad - m.rad;
	    	}
	    	//now we adjust y, instead of allowing marbles to bounce up we place it
	    	//at the same height as the pin
	    	m.pos.y = p.pos.y;
	    	m.spd.y *= -0.2;
		}
	}
}

board.prototype.checkEdgeCollision = function(m){
    // if (m.pos.x > width - this.img.width){
    //     m.pos.x = width - this.img.width;
    //     // m.spd.x *= -1;
    //     m.spd.x = 0;
    // } else if (m.pos.x < 0){
    //     m.pos.x = 0;
    //     // m.spd.x *= -1;
    //     m.spd.x = 0;
    // }
    if (m.pos.y > height - m.rad){
        m.pos.y = height - m.rad;
        m.spd.y = 0;
        m.spd.x = 0;
        //at this point we need to determine which bin a marble landed in
        if (m.isbinned == false){
	        if (m.pos.x <= this.bins[0][0]){
	        	this.bins[0][1] += 1;
	        }
	        for (i = 1; i < this.numPinsInRow; i++){
	        	if (this.bins[i-1][0] < m.pos.x & m.pos.x <= this.bins[i][0]){
	        		this.bins[i][1] += 1;
	        	}
	        }	
	        m.isbinned = true;
        }
    }
}