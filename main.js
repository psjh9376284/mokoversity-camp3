var gameModule = (function (){
	
	var setTimeoutVar,
		count = 0;
	function start(){

		var canvas = document.getElementById('game'),
		 	ctx = canvas.getContext('2d'),
		 	ballX = Math.floor(Math.random() * 300),
		 	ballY = Math.floor(Math.random() * 500),
		 	ballR = Math.floor(Math.random() * 100);

		canvas.width = 480;
		canvas.height = 320;

		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc( ballX, ballY, ballR, 0, Math.PI * 2, true);
		ctx.fill();

		if(count >= 10){

		}
		else{
			setTimeoutVar = setTimeout(start,1000);
			count++;
			console.log("count ="+count);
		}


	}

	return {
		start : start
	}
}) ();

gameModule.start();