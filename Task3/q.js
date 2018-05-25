
$(".ss").keyup(function(e){
	this.value = this.value.replace(/[^0-9.]/g,'');
});

function isNum(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}

/*---------------Task_1--------------------------------*/

function getCircleS() {
	var radius = document.getElementById("radius").value;
	var answer = document.getElementById("answer");

	answer.textContent = '';

	if (!isNum(radius)) {
		answer.textContent = "Введите числовые значения";
		return false;
	}

	radius = parseFloat(radius);
	if (radius < 0) {
		answer.textContent = "Радиус не может быть отрицательным";
		return false;
	}
	answer.textContent = "Площадь: " + 
		(Math.PI*radius*radius);
	return false;
}

function getRectangleS() {
	var length = document.getElementById("length-rec").value;
	var height = document.getElementById("height-rec").value;
	var answer = document.getElementById("answer");

	answer.textContent = '';

	if (!isNum(length) || !isNum(height) ) {
		answer.textContent = "Введите числовые значения!";
		return false;
	}

	length = parseFloat(length);
	height = parseFloat(height);
	if (length < 0 || height < 0) {
		answer.textContent = 
		"Значения сторон не могут быть отрицательными!";
		return false;
	}	

	answer.textContent = "Площадь': " + 
		(length*height);
	return false;
}

function getTriangleS() {
	var length = document.getElementById("length-tri").value;
	var height = document.getElementById("height-tri").value;
	var answer = document.getElementById("answer");

	answer.textContent = '';

	if (!isNum(length) || !isNum(height) ) {
		answer.textContent = "Введите числовые значения!";
		return false;
	}

	length = parseFloat(length);
	height = parseFloat(height);
	if (length < 0 || height < 0) {
		answer.textContent = 
		"Значения сторон не могут быть отрицательными!";
		return false;
	}	

	answer.textContent = "Площадь: " + 
		(length*height*0.5);
	return false;
}

/*---------------------Task_2---------------------------*/

function getFibNum() {
	var answer = 1, first = 1;

	for (var i = 3; i <= 10; i++) {
		var next = answer + first;
		first = answer;
		answer = next;
	}
	answer_2.textContent = answer;
	return false;
}

/*----------------------------------------------------*/

