function Pipe(img) {
	this.spacing = 200;
	this.top = random(height / 6, 3 / 4 * height);
	this.bottom = height - (this.top + this.spacing);
	this.x = width;
	this.w = 80;
	this.speed = 5;

	this.hits = function(bird) {
		if (bird.y < this.top || bird.y > height - this.bottom) {
			if (bird.x > this.x && bird.x < this.x + this.w) {
				return true;
			}
		}
		return false;
	};

	this.passes = function(bird) {
		if (bird.y > this.top || bird.y < height + this.bottom) {
			return true;
		}
		return false;
	};

	this.show = function() {
		//fill(255);
		image(img, this.x, 0, this.w, this.top);
		image(img, this.x, height - this.bottom, this.w, this.bottom);
		/* rect(this.x, 0, this.w, this.top);
		rect(this.x, height - this.bottom, this.w, this.bottom); */
	};

	this.update = function() {
		this.x -= this.speed;
	};

	this.offscreen = function() {
		if (this.x < -this.w) {
			return true;
		} else {
			return false;
		}
	};
}
