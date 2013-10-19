(function (){
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
}) ();