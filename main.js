var bgImg = document.createElement("img");

bgImg.src="images/map.png";

var canvas = document.getElementById("game-canvas");

var ctx = canvas.getContext("2d");

function draw(){
  ctx.drawImage(bgImg,0,0);
}

//setTimeout(draw,1000);

setInterval(draw,16);


var chaImg = document.createElement("img");

chaImg.src="images/jason.gif";

var canvas = document.getElementById("krkt");

var ctx = canvas.getContext("2d");

function draw2(){
  ctx.drawImage(chaImg,0,0);
}

setInterval(draw2,16);
