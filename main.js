/*jslint browser: true, devel: true, closure: true */
var gameModule = (function (document) {

    "use strict";
    var count = 0,
        ballX,
        ballY,
        ballR,
        scores = 0;

    function gameOver() {
        console.log("Your finally scores =" + scores);
    }

    function startGame() {

        var canvas = document.getElementById('game'),
            ctx = canvas.getContext('2d'),
            r = Math.floor(Math.random() * 255),
            g = Math.floor(Math.random() * 255),
            b = Math.floor(Math.random() * 255),
            second = 500 + Math.floor(Math.random() * 1500);

        ballX = Math.floor(Math.random() * 640);
        ballY = Math.floor(Math.random() * 480);
        ballR = 10 + Math.floor(Math.random() * 90);


        canvas.width = 640;
        canvas.height = 480;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
        ctx.fill();

        if (count >= 10) {
            gameOver();
        } else {
            setTimeout(startGame, second);
            count = count + 1;
        }
    }

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            tmp;
        //console.log("Clicked  ("+x+","+y+")");

        tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);
        if (tmp <= ballR * ballR) {
            scores += (100 - ballR);
            console.log("You get it! Very Good!");
            console.log("Your  scores now:" + scores);
        } else {
            scores = scores - 50;
            console.log("Oh oh!!! You lost your scores");
            console.log("Your  scores now:" + scores);
        }

    }

    function start() {
        document.getElementById("main").addEventListener("click", touchEvent, false);
        startGame();
    }
    return {
        start: start
    };
}(document));

gameModule.start();