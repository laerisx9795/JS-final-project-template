var bgImg = document.createElement("img");

bgImg.src="images/map.png";

var canvas = document.getElementById("game-canvas");

var ctx = canvas.getContext("2d");



//setTimeout(draw,1000);




var chaImg = document.createElement("img");

chaImg.src="images/jason.gif";

/*var canvas2 = document.getElementById("krkt");

var ctx2 = canvas2.getContext("2d");

function draw2(){
  ctx2.drawImage(chaImg,30,30);
}

setTimeout(draw2,1000);

//setInterval(draw2,16);
*/

var enemyImg = document.createElement("img");

enemyImg.src="images/rukia.gif";

/*var canvasEnemy = document.getElementById("enemy");

var ctx = canvasEnemy.getContext("2d");
*/
/*function drawEnemy(){
  ctxEnemy.drawImage(enemyImg,0,0);
}

//setTimeout(draw,1000);

setInterval(drawEnemy,16);
*/

function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(chaImg,100,90);
  ctx.drawImage(enemyImg,100,100);
}

setInterval(draw,16);
