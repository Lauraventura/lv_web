var ctx = document.getElementById ('canvas').getContext('2d');
var ctx = canvas.getContext('2d');

var tNow = 0;
var tThen = 0;
var deltaT = 0;
var scene = 0;

var mouse = {x:canvas.width/2, y:canvas.height/2};

var START = new Start;
var TUTORIAL = new Tutorial;
var ENGINE = new Engine;
var OPTIONS = new Options;

START.setup();

window.main = function() {
	window.requestAnimationFrame(main);
	tNow = performance.now();
	deltaT = tNow - tThen;
	tThen = tNow;

	switch(scene){
		case 0:
			START.update();
			START.draw();
			break;
		case 1:
			ENGINE.update();
			ENGINE.draw();
			break;
		case 2:
			OPTIONS.update();
			OPTIONS.draw();
			break;
		case 3:
			TUTORIAL.update();
			TUTORIAL.draw();
			break;
		default:
			START.update();
			START.draw();
		break;
	}
}
main();