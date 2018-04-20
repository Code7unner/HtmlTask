window.onload = init;

var map;
var ctxMap;

var pl;
var ctxPl;

var drawBtn;
var clearBtn;

var gameWidth = 800;
var gameHeight = 594;

var background = new Image();
background.src = "img/bg.jpg";

var tiles = new Image();
tiles.src = "img/car.png";

var player;
var enemy;

var isPlaying;

var requestAnimFrame = window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame;

function init() {
	map = document.getElementById("map");
	ctxMap = map.getContext("2d");

	pl = document.getElementById("player");
	ctxPl = pl.getContext("2d");

	map.width = gameWidth;
	map.height = gameHeight;
	pl.width = gameWidth;
	pl.height = gameHeight;

	drawBtn = document.getElementById("drawBtn");
	clearBtn = document.getElementById("clearBtn");

	drawBtn.addEventListener("click", drawRect, false);
	clearBtn.addEventListener("click", clearRect, false);

	player = new Player();
	enemy = new Enemy();

	drawBg();
	startloop();

	document.addEventListener("keydowm", checkKeyDown, false);
	document.addEventListener("keyup", checkKeyUp, false);
}

function loop() {
	if (isPlaying) {
		draw();
		update();
		requestAnimFrame(loop);
	}
}

function startloop() {
	isPlaying = true;
	loop();
}

function stoploop() {
	isPlaying = false;
}

function draw() {
	player.draw();
	enemy.draw();
}

function update() {
	player.update();
}

//Objects-------------------
function Player() {
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = 0;
	this.drawY = 0;
	this.width = 210;
	this.height = 75; 

	//For keys
	this.isUp = false;
	this.isDown = false;
	this.isLeft = false;
	this.isRight = false;

	this.speed = 5;
}

function Enemy() {
	this.srcX = 0;
	this.srcY = 70;
	this.drawX = 600;
	this.drawY = 50;
	this.width = 210;
	this.height = 90;

	this.speed = 8;
}

Enemy.prototype.draw = function() {
	ctxMap.drawImage(tiles, this.srcX, this.srcY, this.width, this.height,
		this.drawX, this.drawY, this.width, this.height);
}

Player.prototype.draw = function() {
	clearCtxPlayer();
	ctxPl.drawImage(tiles, this.srcX, this.srcY, this.width, this.height,
		this.drawX, this.drawY, this.width, this.height);
}

Player.prototype.update = function() {
	this.chooseDir();
}

Player.prototype.chooseDir = function() {
	if (this.isUp) {
		this.drawY -= this.speed;
	}
	if (this.isDown) {
		this.drawY += this.speed;
	}
	if (this.isRight) {
		this.drawX += this.speed;
	}
	if (this.isLeft) {
		this.drawX -= this.speed;
	}
}	

function checkKeyDown(e ) {
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);

	if (keyChar == "W") {
		player.isUp = true;
		e.preventDefault();
	}
	if (keyChar == "S") {
		player.isDown = true;
		e.preventDefault();
	}
	if (keyChar == "D") {
		player.isRight = true;
		e.preventDefault();
	}
	if (keyChar == "A") {
		player.isLeft = true;
		e.preventDefault();
	}
}

function checkKeyUp(e) {
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);

	if (keyChar == "W") {
		player.isUp = false;
		e.preventDefault();
	}
	if (keyChar == "S") {
		player.isDown = false;
		e.preventDefault();
	}
	if (keyChar == "D") {
		player.isRight = false;
		e.preventDefault();
	}
	if (keyChar == "A") {
		player.isLeft = false;
		e.preventDefault();
	}
}

function drawRect() {
	ctxMap.fillStyle = "#3D3D3D";
	ctxMap.fillRect(10, 10, 100, 100);
}

function clearRect() {
	ctxMap.clearRect(0, 0, gameWidth, gameHeight);
}

function drawBg() {
	ctxMap.drawImage(background, 0, 0, gameWidth, gameHeight,
		0, 0, gameWidth, gameHeight);
}

function clearCtxPlayer() {
	ctxPl.clearRect(0, 0, gameWidth, gameHeight);
}
