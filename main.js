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

var btnImg = document.createElement("img");

btnImg.src="images/tower-btn.png";

var Jason={
  x:200,
  y:50
};

var enemy={
  x:345,
  y:50
};

var btn={
  x:590,
  y:430
}

function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.drawImage(chaImg,Jason.x,Jason.y);
  ctx.drawImage(enemyImg,enemy.x,enemy.y);
  ctx.drawImage(btnImg,btn.x,btn.y,50,50);
}

setInterval(draw,16);

//游標
/*$("#game-canves").on("mousemove", function(event){
  corsor={
    x:event.offsetX,
    y:event.offsetY
  };
});

var isBuilding = false;
var tower = {};
var ccursor = {};
$("#game-canves").on("click", function(){
  if(isCollided(cursor.x, cursor.y, 590, 430, 50, 50)){
    if(isBuilding){
      isBuilding=false;
    }else{
      
    }
  }
}



if(isBuilding &&()){
  tower.x
}
*/
