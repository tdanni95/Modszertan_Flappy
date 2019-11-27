var mode;
var bird;
var pipes = [];
var alive = true;
var points = 0;
var score = document.getElementById('score');
var cd = document.getElementById('countdown');
var msg = document.getElementById('message');
msg.style.display = 'block';

start.style.display = 'none';
function setup() {
	mode = 0;
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.position(0, 0);
	cnv.parent('sketch-holder');
	bird = new Bird();
	if (mode == 1) {
		pipes.push(new Pipe());
	}
}

function draw() {
	if (mode == 1) {
		clear();
		for (var i = pipes.length - 1; i >= 0; i--) {
			if (pipes.length > 2) {
				pipes[i] = null;
			}
			console.log(pipes.length);
			pipes[i].show();
			pipes[i].update();

			if (pipes[i].hits(bird)) {
				reset.style.display = 'inline-block';
				while (pipes.length > 0) {
					pipes.pop();
				}
				noLoop();
			}
			if (bird.x - 80 == pipes[i].x && pipes[i].passes(bird)) {
				points++;
			}

			if (pipes[i].offscreen()) {
				pipes.splice(i, 1);
			}

			score.innerHTML = 'Score: ' + points;
		}

		bird.update();
		bird.show();

		if (frameCount % 90 == 0) {
			pipes.push(new Pipe());
		}
	}
}

function keyPressed() {
	if (key == ' ') {
		bird.up();
	}

	if (keyCode === ENTER) {
		if (mode == 0) {
			var timeleft = 3;
			var downloadTimer = setInterval(function() {
				cd.innerHTML = timeleft;
				timeleft -= 1;
				if (timeleft <= 0) {
					clearInterval(downloadTimer);
					cd.style.display = 'none';
					msg.style.display = 'none';
					mode = 1;
				}
			}, 1000);
		}
	}
}
