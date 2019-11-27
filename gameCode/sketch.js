var bird;
var pipes = [];
function setup() {
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.position(0, 0);
	cnv.parent('sketch-holder');
	bird = new Bird();
	pipes.push(new Pipe());
}

function draw() {
	clear();
	for (var i = pipes.length - 1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].hits(bird)) {
			console.log('HIT');
		}

		if (pipes[i].offscreen()) {
			pipes.splice(i, 1);
		}
	}

	bird.update();
	bird.show();

	if (frameCount % 75 == 0) {
		pipes.push(new Pipe());
	}
}

function keyPressed() {
	if (key == ' ') {
		bird.up();
	}

	if (key == 'p') {
		//TODO pause
	}
}
