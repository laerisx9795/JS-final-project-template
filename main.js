var bgImg = document.createElement("img");

bgImg.src="images/map.png";

var canvas = document.getElementById("game-canvas");

var ctx = canvas.getContext("2d");

function draw(){
  ctx.drawImage(bgImg,0,0);
}

//setTimeout(draw,1000);

setInterval(draw,16);


var chaImg = document.createElement("img2");

chaImg.src="images/jason.gif";

var canvas2 = document.getElementById("krkt");

var ctx = canvas2.getContext("2d");

function draw2(){
  ctx.drawImage(chaImg,10,20);
}

//setTimeout(draw,1000);

setInterval(draw2,16);
