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

/*----------------------Task_3--------------------------*/

function markElement(a, isRed, inv) {
    if ((isRed && !inv) || (!isRed && inv)) {
        if (a.style.color === "")
            a.style.color = "#f00";
        else
            a.style.color = "#880";
    } else {
        if (a.style.color === "")
            a.style.color = "#0f0";
        else
            a.style.color = "#880";
    }
    return a;
}

function showMatrix(matrix, domElem) {
    let cellSize = Math.max.apply(null, matrix.map(row => {
        return Math.max.apply(null, row.map(value => {
            return value.toString().length;
        })) + 1;
    }));
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            let content = matrix[i][j] + " ";
            while (content.length < cellSize) {
                content = " " + content;
            }
            domElem.textContent += content;
        }
        domElem.textContent += "\r\n";
    }
}
function highlightMatrix(matrix, domElem, colIndex, inv) {
    let cellSize = Math.max.apply(null, matrix.map(row => {
        return Math.max.apply(null, row.map(value => {
            return value.toString().length;
        })) + 1;
    }));
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            let content = matrix[i][j] + " ";
            while (content.length < cellSize) {
                content = " " + content;
            }
            var cell = document.createElement("span");
            cell.innerHTML = content;
            if (i === j) {
                cell = markElement(cell, 1, inv);
            }
            if (j === colIndex) {
                cell = markElement(cell, 0, inv);
            }
            domElem.appendChild(cell);
        }
        let br = document.createElement("br");
        domElem.appendChild(br);
    }
}

let src = [];
for (let i = 0; i < 8; ++i) {
    let row = [];
    for (let j = 0; j < 8; ++j) {
        row.push(Math.floor(Math.random()*101)-50);
    }
    src.push(row);
}
let dst = src;
let max_positive = [-1, -1];
for (let i = 0; i < 8; ++i) {
    let curr_positive = 0;
    for (let j = 0; j < 8; ++j) {
        curr_positive += src[j][i] > 0;
    }
    if (curr_positive > max_positive[1]) {
        max_positive[0] = i;
        max_positive[1] = curr_positive;
    }
}
highlightMatrix(src, document.getElementById("task3-src"), max_positive[0], 0);
for (let i = 0; i < 8; ++i) {
    let a = src[i][i];
    let b = src[i][max_positive[0]];
    dst[i][i] = b;
    dst[i][max_positive[0]] = a;
}
highlightMatrix(dst, document.getElementById("task3-dst"), max_positive[0], 1);

/*-------------------------Task_4----------------------------*/

function getRandomInt(min, max) {
    return min + Math.round(Math.random()*(max-min));
}
function getArray(n, min, max) {
    let result = [];
    for (let i = 0; i < n; ++i) {
        result.push(getRandomInt(min, max));
    }
    return result;
}
function getResultArray(a) {
    return a.sort((a, b) => {
        return parseFloat(a)-parseFloat(b);
    });
}

function getSnakeMatrix() {
    let output = document.getElementById("task4-result");
    output.textContent = "";
    let size = document.getElementById("task4-size").value;
    if (!isNum(size) || size < 2 || !Number.isInteger(size = parseFloat(size))) {
        output.textContent = "Некорректный размер матрицы!";
        return false;
    }
    let arrMin = document.getElementById("task4-min").value;
    let arrMax = document.getElementById("task4-max").value;
    if (!isNum(arrMin) || !Number.isInteger(arrMin = parseFloat(arrMin))) {
        output.textContent = "Некорректный минимум!";
        return false;
    }
    if (!isNum(arrMax) || !Number.isInteger(arrMax = parseFloat(arrMax))) {
        output.textContent = "Некорректный максимум!";
        return false;
    }

    let numbers = getResultArray(getArray(size*size, Math.min(arrMin, arrMax), Math.max(arrMin, arrMax)));
    let result = new Array(size);
    let step = -1;
    let j = size-1;

    for (let i = size-1; i >= 0; --i) {
        result[i] = new Array(size);
        while (j >= 0 && j <= size-1) {
            result[i][j] = numbers.shift();
            j += step;
        }
        step = -step;
        j = Math.min(j, size-1);
        j = Math.max(j, 0);
    }

    showMatrix(result, output);
    return false;
}
