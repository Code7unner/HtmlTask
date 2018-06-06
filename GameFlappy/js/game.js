
var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

var gap = 90;
var score = 0;
var newBlock = 100;
var scoreConst = 5;

//-------Press-------
document.addEventListener("keydown", moveUp);

function moveUp() {
	yPos -= 25;
}

//-------Blocks------
var pipe = [];

pipe[0] = {
	x : cvs.width,
	y : 0
}

// ------Bird--------
var xPos = 10;
var yPos = 150;
var grav = 1.5;

function draw() {
	ctx.drawImage(bg, 0, 0);

	for (var i = 0; i < pipe.length; i++) {
		ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
		ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
		pipe[i].x--;

		if (pipe[i].x == newBlock) {
			pipe.push({
				x : cvs.width,
				y : Math.floor(Math.random() * pipeUp.height) - 
				pipeUp.height
			})
		}

		if (xPos + bird.width >= pipe[i].x
			&& xPos <= pipe[i].x + pipeUp.width
			&& (yPos <= pipe[i].y + pipeUp.height
				|| yPos + bird.height >= pipe[i].y + pipeUp.height+ gap)
				|| yPos + bird.height >= cvs.height - fg.height) {
			location.reload();
		}

		if (pipe[i].x == scoreConst) {
			score++;
		}
	}

	ctx.drawImage(fg, 0, cvs.height - fg.height);
	ctx.drawImage(bird, xPos, yPos);

	yPos += grav;

	ctx.fillStyle = "#000";
	ctx.font = "24px Verdana";
	ctx.fillText("Score: " + score, 10, cvs.height - 20);                                                        

	requestAnimationFrame(draw);
}

pipeBottom.onload = draw;