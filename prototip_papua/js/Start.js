function Start() {
	this.sprite = new Image();
	this.sprite.src = "img/start.jpg";

	this.setup = function(){
		this.timer = 0;
		this.timerEnd = 5000;
		ENGINE.soundActivated = true;
		ENGINE.sightActivated = true;
		OPTIONS.sprite = OPTIONS.sprite1;
		TUTORIAL.sprite = TUTORIAL.sprite1;
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