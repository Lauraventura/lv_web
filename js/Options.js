function Options() {
		this.sprite1 = new Image();
		this.sprite1.src = "img/menu1.jpg";
		this.sprite2 = new Image();
		this.sprite2.src = "img/menu2.jpg";
		this.sprite3 = new Image();
		this.sprite3.src = "img/menu3.jpg";

	this.sprite = this.sprite1;

	this.setup = function(){
	}

	//una funcion update
	this.update = function(){

	}
	//una funcion draw
	this.draw = function() {
		ctx.drawImage(this.sprite,0,0,canvas.width,canvas.height);
		ctx.fillStyle="#ffffff";
		ctx.font=" 27px Varela Round";
		ctx.textAlign="center"; 
		ctx.fillText((ENGINE.ratio),canvas.width/10*2.5,canvas.height/10*7.6);

	}
}