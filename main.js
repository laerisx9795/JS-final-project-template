var bgImg = document.createElement("img");

bgImg.src="images/map.png";

var canvas = document.getElementById("game-canvas");

var ctx = canvas.getContext("2d");



//setTimeout(draw,1000);




/*var chaImg = document.createElement("img");

chaImg.src="images/jason.gif";

var canvas2 = document.getElementById("krkt");

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

var twrImg = document.createElement("img");

twrImg.src="images/tower.png";

/*var Jason={
  x:200,
  y:50
};*/

var enemy={
  x:98,
  y:450
};

var btn={
  x:590,
  y:430
}

//游標
$("#game-canves").on("mousemove", function(event){
  cursor={
    x:event.offsetX,
    y:event.offsetY
  };
});

function isCollided(pointX, pointY, targetX, targetY, targetWidth, targetHeight){
  if(pointX >= targetX && pointX <= targetX + targetWidth && pointY >= targetY && pointY <= targetY + targetHeight){
    return true;
  }else{
    return false;
  }
}

var isBuilding = false;
var tower = {};
var cursor = {};
$("#game-canves").on("click", function(){
  alert("True");
  if(isCollided(cursor.x, cursor.y, 590, 430, 50, 50)){
    if(isBuilding){
      isBuilding=false;
    }else{
      isBuilding=true;
    }
  }
});

function draw(){
  ctx.drawImage(bgImg,0,0);
  //ctx.drawImage(chaImg,Jason.x,Jason.y);
  ctx.drawImage(enemyImg,enemy.x,enemy.y);
  ctx.drawImage(btnImg,btn.x,btn.y,50,50);
  ctx.drawImage(twrImg,tower.x,tower.y,20,20);
}

setInterval(draw,16);

//點擊按鈕 讓防禦塔跟著游標移動
//點擊任意位置 建立防禦塔
