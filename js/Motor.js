function Engine() {
	this.radius = 50;
	this.parametro = 5;
	this.state = 0;
	this.geometry = 0;
	this.soundActivated = true;
	this.soundTimer = 0;
	this.sightActivated = true;

	this.sprite = new Image();
	this.sprite.src= "img/black.jpg"
	
	this.restart = function(){
		coinSound.volume = 0;

		this.timer = 0;
		this.solutions = 0;
		this.ratio = 0;
		this.minutes = 0;
		this.newModel();
	}
	this.newModel = function() {

		switch(this.state){
			case 0:
				this.red = Math.floor(Math.random()*256);
				this.green = 0;//Math.floor(Math.random()*256);
				this.blue = Math.floor(Math.random()*256);
				break;
			case 1:
				this.red = Math.floor(Math.random()*256);
				this.green = Math.floor(Math.random()*256);
				this.blue = 0;//Math.floor(Math.random()*256);
				break;
			case 2:
				this.red = 0;//Math.floor(Math.random()*256);
				this.green = Math.floor(Math.random()*256);
				this.blue = Math.floor(Math.random()*256);
				break;
			default:
				this.red = Math.floor(Math.random()*256);
				this.green = 0;//Math.floor(Math.random()*256);
				this.blue = Math.floor(Math.random()*256);
				break;
		}
	}

	this.ratioCalculation = function(){
		this.timer += deltaT;
		this.minutes = (this.timer/1000/60);
		this.ratio = Math.ceil(this.solutions/this.minutes);
		//console.log(this.solutions + " " + this.minutes + " " +this.ratio);
	}

	this.playSound = function(){
		this.soundTimer += deltaT;
		var interval = 500;
		if(this.soundTimer > interval){
			var distanceRed = this.red - this.red2;
			var distanceGreen =this.green2 - this.green2
			var distanceBlue = this.blue -this.blue2;
			var distance = Math.sqrt(Math.pow(distanceRed,2)+Math.pow(distanceGreen,2)+Math.pow(distanceBlue,2));
			//console.log(distance);
			if (distance < 36){coinSound.volume = 1;}
			else if (distance < 72){coinSound.volume = 0.9;}
			else if (distance < 108){coinSound.volume = 0.6;}
			else if (distance < 144){coinSound.volume = 0.5;}
			else if (distance < 180){coinSound.volume = 0.3;}
			else if (distance < 216){coinSound.volume = 0.2;}
			else if (distance < 250){coinSound.volume = 0.1;}
			else if (distance < 288){coinSound.volume = 0.1;}
			else if (distance < 324){coinSound.volume = 0.0;}
			else if (distance < 360){coinSound.volume = 0.0;}
			coinSound.currentTime = 0;
			coinSound.play();
			this.soundTimer = 0;
		}
	}
	//una funcion update
	this.update = function(){
		this.ratioCalculation();
		
		if(this.soundActivated){
			this.playSound();
		}

		if(mouse.x>0 && mouse.x<canvas.width 
			&& mouse.y>0 && mouse.y<canvas.height){
				switch(this.state){
					case 0:
						this.red2 = Math.floor(mouse.x / canvas.width * 256);
						this.green2 = 0;
						this.blue2 = Math.floor(mouse.y / canvas.height *256);
						break;
					case 1:
						this.red2 = Math.floor(mouse.x / canvas.width * 256);
						this.green2 = Math.floor(mouse.y / canvas.height *256);
						this.blue2 = 0;
						break;
					case 2:
						this.red2 = 0;
						this.green2 = Math.floor(mouse.x / canvas.width * 256);
						this.blue2 = Math.floor(mouse.y / canvas.height *256);
						break;
					default:
						this.red2 = Math.floor(mouse.x / canvas.width * 256);
						this.green2 = 0;
						this.blue2 = Math.floor(mouse.y / canvas.height *256);
						break;
				}
		}

		if(this.red >= this.red2-this.parametro && this.red <= this.red2+this.parametro
			&& this.green >= this.green2-this.parametro && this.green <= this.green2+this.parametro
			&& this.blue >= this.blue2-this.parametro && this.blue <= this.blue2+this.parametro){
			this.state = Math.floor(Math.random()*3)
			this.newModel();
			this.solutions +=1;
			this.geometry = Math.floor(Math.random()*3)
			prizeSound.currentTime = 0;
			prizeSound.play();
		}
	}

	//una funcion draw
	this.draw = function() {
		if(this.sightActivated){
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.fillStyle = 'rgb('+this.red2+', '+this.green2+', '+this.blue2+')';
	      	ctx.fillRect(0,0,canvas.width,canvas.height);

			ctx.fillStyle = 'rgb('+this.red+', '+this.green+', '+this.blue+')';
			ctx.fill();
    	  	switch(this.geometry){
    	  		case 0:
					ctx.beginPath();
					ctx.arc(canvas.width / 2,canvas.height/2,50,0, 2 * Math.PI);
					break;
      			case 1:
      				ctx.fillRect(canvas.width/2 - this.radius, canvas.height/2 - this.radius, this.radius*2, this.radius*2);
      				break;
      			case 2:
      				ctx.beginPath();
      				ctx.moveTo(canvas.width/2,canvas.height/2-this.radius);
      				ctx.lineTo(canvas.width/2+this.radius,canvas.height/2+this.radius);
      				ctx.lineTo(canvas.width/2-this.radius,canvas.height/2+this.radius);
      				ctx.lineTo(canvas.width/2,canvas.height/2-this.radius);
      				ctx.closePath();
      				break;

      		}
      	}
      	else if(!this.sightActivated){
      		ctx.clearRect(0,0,canvas.width,canvas.height);
			ctx.drawImage(this.sprite,0,0,canvas.width,canvas.height);
		}
	}
}