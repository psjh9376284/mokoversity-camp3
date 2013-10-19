var gameModule = (function (){
	
	var setTimeoutVar,
		count = 0;
	var color=["black","red","green","pink","orange","purple","yellow","blue","gray","brown"];
	function start(){

		var canvas = document.getElementById('game'),
		 	ctx = canvas.getContext('2d'),
		 	ballX = Math.floor(Math.random() * 300),
		 	ballY = Math.floor(Math.random() * 500),
		 	ballR = Math.floor(Math.random() * 100);

		canvas.width = 480;
		canvas.height = 320;

		ctx.fillStyle = color[Math.floor(Math.random()*9)];
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
	function gameover(){

	}
	return {
		start : start
	}
}) ();

gameModule.start();