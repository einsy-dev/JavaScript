// canvas.hetContext("2d");
// ctx.fillRect(25, 25, 100, 100); creates filled rectangle
// ctx.clearRect(45, 45, 60, 60); clears rectangle
// ctx.strokeRect(50, 50, 50, 50); creates rectangle border

// canvas.hetContext("2d");
// ctx.beginPath(); starts new path
// ctx.moveTo(75, 50); moves pen to 75, 50
// ctx.lineTo(100, 75); draws line to 100, 75
// ctx.lineTo(100, 25); draws line to 100, 25
// ctx.fill();	// fills path with current fill style


// arc(x, y, radius, startAngle, endAngle, anticlockwise)
//
// canvas.hetContext("2d");
// ctx.beginPath(); starts new path
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 2PI = circle
// ctx.moveTo(110, 75);	// moves pen to 110, 75
// ctx.arc(75, 75, 35, 0, Math.PI, false); // PI = half circle to left of arc 
// ctx.moveTo(65, 65); // moves pen to 65, 65
// ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 2PI = circle 
// ctx.moveTo(95, 65); // moves pen to 95, 65
// ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 2PI = circle
// ctx.stroke(); // strokes path with current stroke style

// quadraticCurveTo(cp1x, cp1y, x, y)
//
// ctx.beginPath(); starts new path
// ctx.moveTo(75, 25); // moves pen to 75, 25
// ctx.quadraticCurveTo(25, 25, 25, 62.5);	// draws curve to 25, 62.5
// ctx.quadraticCurveTo(25, 100, 50, 100);	// draws curve to 50, 100
// ctx.quadraticCurveTo(50, 120, 30, 125);	// draws curve to 30, 125
// ctx.quadraticCurveTo(60, 120, 65, 100);	// draws curve to 65, 100
// ctx.quadraticCurveTo(125, 100, 125, 62.5);	// draws curve to 125, 62.5
// ctx.quadraticCurveTo(125, 25, 75, 25);	// draws curve to 75, 25
// ctx.stroke();	// strokes path with current stroke style

// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
//
// ctx.beginPath(); starts new path
// ctx.moveTo(75, 40);	// moves pen to 75, 40
// ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);	// draws curve to 50, 25
// ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);	// draws curve to 20, 62.5
// ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);	// draws curve to 75, 120
// ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);	// draws curve to 130, 62.5
// ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);	// draws curve to 100, 25
// ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);	// draws curve to 75, 40
// ctx.fill();	// fills path with current fill style

// new Path2D(); // пустой path объект
// new Path2D(path); // копирование из другого path
// new Path2D(d); // path из SVG
//
// var rectangle = new Path2D(); // пустой path объект
// rectangle.rect(10, 10, 50, 50);	// создание прямоугольника
// var circle = new Path2D();	// пустой path объект
// circle.moveTo(125, 35);	// создание круга
// circle.arc(100, 35, 25, 0, 2 * Math.PI);	// создание круга
// ctx.stroke(rectangle);	// создание прямоугольника
// ctx.fill(circle);	// создание круга



// for (var i = 0; i < 6; i++) {
// 	for (var j = 0; j < 6; j++) {
// 		ctx.strokeStyle =
// 			"rgb(0," +
// 			Math.floor(255 - 42.5 * i) +
// 			"," +
// 			Math.floor(255 - 42.5 * j) +
// 			")";
// 		ctx.beginPath();
// 		ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true);
// 		ctx.stroke();
// 	}
// }



// ctx.fillStyle = "#FD0";
// ctx.fillRect(0, 0, 75, 75);
// ctx.fillStyle = "#6C0";
// ctx.fillRect(75, 0, 75, 75);
// ctx.fillStyle = "#09F";
// ctx.fillRect(0, 75, 75, 75);
// ctx.fillStyle = "#F30";
// ctx.fillRect(75, 75, 75, 75);
// ctx.fillStyle = "#FFF";

// // устанавливаем значение прозрачности
// ctx.globalAlpha = 0.2;

// // Рисуем полупрозрачные круги
// for (i = 0; i < 7; i++) {
// 	ctx.beginPath();
// 	ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
// 	ctx.fill();
// }




//   for (var i = 0; i < 10; i++) {
//     ctx.lineWidth = 1 + i;
//     ctx.beginPath();
//     ctx.moveTo(5 + i * 14, 5);
//     ctx.lineTo(5 + i * 14, 140);
//     ctx.stroke();
//   }




// for (var i = 0; i < 3; i++) {
// 	for (var j = 0; j < 3; j++) {
// 		ctx.save();
// 		ctx.fillStyle = "rgb(" + 51 * i + ", " + (255 - 51 * i) + ", 255)";
// 		ctx.translate(10 + j * 50, 10 + i * 50);
// 		ctx.fillRect(0, 0, 25, 25);
// 		ctx.restore();
// 	}
// }

// ctx.save();
// // blue rect
// ctx.fillStyle = "#0095DD";
// ctx.fillRect(30, 30, 100, 100);
// ctx.rotate((Math.PI / 180) * 25);
// // grey rect
// ctx.fillStyle = "#4D4E53";
// ctx.fillRect(30, 30, 100, 100);
// ctx.restore();

// // right rectangles, rotate from rectangle center
// // draw blue rect
// ctx.fillStyle = "#0095DD";
// ctx.fillRect(150, 30, 100, 100);

// ctx.translate(200, 80); // translate to rectangle center
// // x = x + 0.5 * width
// // y = y + 0.5 * height
// ctx.rotate((Math.PI / 180) * 25); // rotate
// ctx.translate(-200, -80); // translate back

// // draw grey rect
// ctx.fillStyle = "#4D4E53";
// ctx.fillRect(150, 30, 100, 100);

function clock() {
	var now = new Date();
	var ctx = document.getElementById("canvas").getContext("2d");
	ctx.save();
	ctx.clearRect(0, 0, 150, 150);
	ctx.translate(75, 75);
	ctx.scale(0.4, 0.4);
	ctx.rotate(-Math.PI / 2);
	ctx.strokeStyle = "black";
	ctx.fillStyle = "white";
	ctx.lineWidth = 8;
	ctx.lineCap = "round";

	// Hour marks
	ctx.save();
	for (var i = 0; i < 12; i++) {
		ctx.beginPath();
		ctx.rotate(Math.PI / 6);
		ctx.moveTo(100, 0);
		ctx.lineTo(120, 0);
		ctx.stroke();
	}
	ctx.restore();

	// Minute marks
	ctx.save();
	ctx.lineWidth = 5;
	for (i = 0; i < 60; i++) {
		if (i % 5 != 0) {
			ctx.beginPath();
			ctx.moveTo(117, 0);
			ctx.lineTo(120, 0);
			ctx.stroke();
		}
		ctx.rotate(Math.PI / 30);
	}
	ctx.restore();

	var sec = now.getSeconds();
	var min = now.getMinutes();
	var hr = now.getHours();
	hr = hr >= 12 ? hr - 12 : hr;

	ctx.fillStyle = "black";

	// write Hours
	ctx.save();
	ctx.rotate(
		hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec,
	);
	ctx.lineWidth = 14;
	ctx.beginPath();
	ctx.moveTo(-20, 0);
	ctx.lineTo(80, 0);
	ctx.stroke();
	ctx.restore();

	// write Minutes
	ctx.save();
	ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(-28, 0);
	ctx.lineTo(112, 0);
	ctx.stroke();
	ctx.restore();

	// Write seconds
	ctx.save();
	ctx.rotate((sec * Math.PI) / 30);
	ctx.strokeStyle = "#D40000";
	ctx.fillStyle = "#D40000";
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(-30, 0);
	ctx.lineTo(83, 0);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.beginPath();
	ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.fillStyle = "rgba(0,0,0,0)";
	ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.restore();

	ctx.beginPath();
	ctx.lineWidth = 14;
	ctx.strokeStyle = "#325FA2";
	ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
	ctx.stroke();

	ctx.restore();

	window.requestAnimationFrame(clock);
}

window.requestAnimationFrame(clock);
