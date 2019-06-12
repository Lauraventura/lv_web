window.addEventListener('mousemove', function(event) {
		mouse.x = event.clientX - canvas.offsetLeft;
		mouse.y = event.clientY - canvas.offsetTop;
	}, false);
window.addEventListener('mousedown', function(event) {
		switch(event.button){
			case 0:
				if (scene == 0 && mouse.x > 0 && mouse.x < canvas.width && mouse.y> 0 && mouse.y < canvas.height){
					scene =3;
				}
				else if (scene == 3 && mouse.x > 0 && mouse.x < canvas.width && mouse.y> 0 && mouse.y < canvas.height){
					if(TUTORIAL.sprite == TUTORIAL.sprite1){
						TUTORIAL.sprite = TUTORIAL.sprite2;
					}
					else{
						scene =1;
						ENGINE.restart();
					}
				}
				else if(scene==1){
					if (ENGINE.sightActivated){
						switch(ENGINE.geometry){
							case 0:
								var distanceX = mouse.x - canvas.width/2;
								var distanceY = mouse.y - canvas.height/2;
								var distance = Math.sqrt(Math.pow(distanceX,2)+Math.pow(distanceY,2))
								if(distance < ENGINE.radius){
									scene = 2;
								}
								break;
							case 1:
								if(mouse.x>canvas.width / 2- ENGINE.radius && mouse.x<canvas.width / 2+ENGINE.radius
									&& mouse.y>canvas.height/2 -ENGINE.radius && mouse.y < canvas.height/2 + ENGINE.radius){
									scene = 2;
								}
								break;
							case 2:
								var distanceX = mouse.x - canvas.width/2;
								var distanceY = mouse.y - canvas.height/2;
								var distance = Math.sqrt(Math.pow(distanceX,2)+Math.pow(distanceY,2))
								if(distance < ENGINE.radius){
									scene = 2;
								}
						}
					}
					else if (!ENGINE.sightActivated){
						if (mouse.x > 0 && mouse.x < canvas.width && mouse.y> 0 && mouse.y < canvas.height){
							scene = 2;
						}
					}

				}
				else if(scene == 2 && mouse.x > 0 && mouse.x < canvas.width){
					if (mouse.y>canvas.height/10*1.7 && mouse.y<canvas.height/10*3){
						scene = 1;
					}
					else if(mouse.y>canvas.height/10*3 && mouse.y<canvas.height/10*4.2){
						if(ENGINE.soundActivated){
							ENGINE.soundActivated = false;
							ENGINE.sightActivated = true;
							OPTIONS.sprite = OPTIONS.sprite3;
						}
						else if(!ENGINE.soundActivated){
							ENGINE.soundActivated = true;
							OPTIONS.sprite = OPTIONS.sprite1;
						}
					}
					else if(mouse.y>canvas.height/10*4.2 && mouse.y < canvas.height/10 *5.4){
						if(ENGINE.sightActivated){
							ENGINE.parametro = 15;
							ENGINE.sightActivated = false;
							ENGINE.soundActivated = true;
							OPTIONS.sprite = OPTIONS.sprite2;
						}
						else if(!ENGINE.sightActivated){
							ENGINE.parametro = 5;
							ENGINE.sightActivated = true;
							OPTIONS.sprite = OPTIONS.sprite1;
						}
					}
					else if (mouse.y>canvas.height/10*5.4 && mouse.y<canvas.height/10*6.6){
						scene= 0;
						START.setup();
					}
				}
				break;
		}
	},false);


//Custom function for cancel right click menu (internet)
document.oncontextmenu = function(e){
	var evt = new Object({keyCode:93});
	stopEvent(e);
}
function stopEvent(event){
	if(event.preventDefault != undefined)
  		event.preventDefault();
 	if(event.stopPropagation != undefined)
  		event.stopPropagation();
}