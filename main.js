var gameModule = (function (){
	
	var setTimeoutVar,
		count = 0;
	function start(){

		var canvas = document.getElementById('game'),
		 	ctx = canvas.getContext('2d'),
		 	ballX = Math.floor(Math.random() * 300),
		 	ballY = Math.floor(Math.random() * 500),
		 	ballR = 10+Math.floor(Math.random() * 90),
		 	r = Math.floor(Math.random() * 255),
		 	g = Math.floor(Math.random() * 255),
		 	b = Math.floor(Math.random() * 255),
		 	second = 500+Math.floor(Math.random() * 1500);

		canvas.width = 480;
		canvas.height = 640;

		ctx.fillStyle = "rgb("+r+","+g+","+b+")";

		ctx.beginPath();
		ctx.arc( ballX, ballY, ballR, 0, Math.PI * 2, true);

		ctx.fill();

		if(count >= 10){

		}
		else{
			if(ballR >= 50){
				setTimeoutVar = setTimeout(start,second);
			}
			else{
				setTimeoutVar = setTimeout(start,second);
			}				
			count++;
			console.log("count ="+count);

		}

	}
	function gameover(){

	}
	return {
		start : start
	}
}) ();

gameModule.start();