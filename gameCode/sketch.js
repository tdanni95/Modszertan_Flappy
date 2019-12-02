var mode;
var bird;
var pipes = [];
var alive = true;
var points = 0;
var score = document.getElementById('score');
var cd = document.getElementById('countdown');
var msg = document.getElementById('message');
var felirat = document.querySelector('#points')
msg.style.display = 'block';

start.style.display = 'none';
function setup() {
	mode = 0;
	let cnv = createCanvas(windowWidth, windowHeight);
	cnv.position(0, 0);
	cnv.parent('sketch-holder');
	bird = new Bird();
<<<<<<< HEAD
	
	if (mode == 1) {
		pipes.push(new Pipe());
	}
=======
>>>>>>> 8c23d862b75df8daa325e9f6bc5f264d2f06194b
}

function draw() {
	if (mode == 1) {
		clear();
		felirat.style.visibility = "visible";
		for (var i = pipes.length - 1; i >= 0; i--) {
			if (pipes.length > 2) {
				pipes[i] = null;
			}
			pipes[i].show();
			pipes[i].update();

			if (pipes[i].hits(bird)) {
				reset.style.display = 'inline-block';
				while (pipes.length > 0) {
					pipes.pop();
				}
				felirat.style.color = "tomato";
				noLoop();
				
				
			}
			if (bird.x - 80 == pipes[i].x && pipes[i].passes(bird)) {
				points++;
			}

			if (pipes[i].offscreen()) {
				pipes.splice(i, 1);
			}
			
			score.innerHTML = points;
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
		bird.gravity = 0.7;
		bird.up();
	}

	if (keyCode === ENTER) {
		if (mode === 0) {
			var timeleft = 4;
			var downloadTimer = setInterval(function() {
				//cd.innerHTML = timeleft; kis fix hogy végigírja...
				timeleft -= 1;
				cd.innerHTML = timeleft;
				if (timeleft === 0) {
					clearInterval(downloadTimer);
					cd.style.display = 'none';
					msg.style.display = 'none';
					mode = 1;
				}
			}, 1000);
		}
	}
}
