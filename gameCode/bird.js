function Bird() {
	this.y = height / 2;
	this.x = 65;

	this.gravity = 0.7;
	this.lift = -12;
	this.velocity = 0;

	this.show = function() {
		fill(255);
		ellipse(this.x, this.y, 32, 32);
	};

	this.up = function() {
<<<<<<< HEAD
		this.velocity = -12;
=======
		this.velocity = this.lift;
>>>>>>> 579ed2f87a823afb5981f35ab5030bbb4591a12b
	};

	this.update = function() {
		this.velocity += this.gravity;
		// this.velocity *= 0.9;
		this.y += this.velocity;

		if (this.y > height) {
			this.y = height;
			this.velocity = 0;
		}

		if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}
	};
}
