function Tutorial() {
	this.sprite1 = new Image();
	this.sprite1.src = "img/start2.jpg";
	this.sprite2 = new Image();
	this.sprite2.src = "img/start3.jpg";
	this.sprite = this.sprite1;

	this.setup = function(){
		this.timer = 0;
		this.timerEnd = 5000;
	}

	//una funcion update
	this.update = function(){
		/*
		this.timer += deltaT;
		if(this.timer > this.timerEnd){
			scene = 1;
			ENGINE.restart();
		}
		*/
	}
	//una funcion draw
	this.draw = function() {
		ctx.clearRect(0,0,canvas.width,canvas.height);
		ctx.drawImage(this.sprite,0,0,canvas.width,canvas.height);
	}
}