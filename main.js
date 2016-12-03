var gameSpeed = 80;
//var gameSpeed = prompt("輸入敵人刷新速率");
var Time = prompt("輸入遊戲時間");

var bgImg = document.createElement("img");
bgImg.src="images/102101.png";

//HP
var treeHp = 100;
var Score = 0;
var Money = 50;
//ctx.font="24px Arial";
//ctx.fillStyle="White";

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
setInterval(draw2,16);
*/

var enemyImg = document.createElement("img");
enemyImg.src="images/slime.gif";

var targetImg = document.createElement("img");
targetImg.src="images/crosshair.png";

/*var canvasEnemy = document.getElementById("enemy");
var ctx = canvasEnemy.getContext("2d");
*/
/*function drawEnemy(){
  ctxEnemy.drawImage(enemyImg,0,0);
}
setTimeout(draw,1000);
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


var enemyPath=[
  {x:128,y:384},
  {x:512,y:384},
  {x:512,y:192},
  {x:224,y:192},
  {x:224,y:64},
  {x:64,y:64},
  {x:64,y:96}
];

var FPS=60;
/*var enemy={
  x:96,
  y:480-32,
  speedx:0 ,  //設定速度
  speedy:-64 ,
  speed : 64,
  pathDes: 0,
  move: function(){
          if(isCollided(enemyPath[this.pathDes].x,enemyPath[this.pathDes].y,this.x,this.y,this.speed/FPS,this.speed/FPS)){
            //          目標路徑點.x              ,目標路徑點.y              ,現在.x, 現在.y,偵測範圍大小  ,偵測範圍大小
            //console.log("true")
            //把史萊姆移到目標路徑點上 改變speedx和speedy 行進方向 以及下一個目標路徑點
            this.x=enemyPath[this.pathDes].x;
            this.y=enemyPath[this.pathDes].y;
            this.pathDes++;
            enemyPath[this.pathDes];
            if(this.x>enemyPath[this.pathDes].x){
              this.speedx = -64;
              this.speedy = 0;
            }else if(this.x<enemyPath[this.pathDes].x){
              this.speedx = 64;
              this.speedy = 0;
            }else if(this.y>enemyPath[this.pathDes].y){
              this.speedx = 0;
              this.speedy = -64;
            }else{
              this.speedx = 0;
              this.speedy = 64;
            }
          }
          this.x=this.x+this.speedx/FPS;
          this.y=this.y+this.speedy/FPS;  //speedy/FPS 速度/每秒改變張數 每秒改變距離
        }
};*/

function Enemy(){
  this.x=128;
  this.y=480-32;
  this.speedx=0 ;  //設定速度
  this.speedy=-64 ;
  this.speed = 64;
  this.pathDes= 0;
  this.hp = 10;
  this.move= function(){
          if(isCollided(enemyPath[this.pathDes].x,enemyPath[this.pathDes].y,this.x,this.y,this.speed/FPS,this.speed/FPS)){
            if(this.pathDes === enemyPath.length-1){
              this.hp=0;
              treeHp -= 10;
              //console.log("true");
            }else{
              //          目標路徑點.x              ,目標路徑點.y              ,現在.x, 現在.y,偵測範圍大小  ,偵測範圍大小
              //console.log("true")
              //把史萊姆移到目標路徑點上 改變speedx和speedy 行進方向 以及下一個目標路徑點
              this.x=enemyPath[this.pathDes].x;
              this.y=enemyPath[this.pathDes].y;
              this.pathDes++;
              enemyPath[this.pathDes];
              if(this.x>enemyPath[this.pathDes].x){
                this.speedx = -64;
                this.speedy = 0;
              }else if(this.x<enemyPath[this.pathDes].x){
                this.speedx = 64;
                this.speedy = 0;
              }else if(this.y>enemyPath[this.pathDes].y){
                this.speedx = 0;
                this.speedy = -64;
              }else{
                this.speedx = 0;
                this.speedy = 64;
              }
            }
          }
            
          this.x=this.x+this.speedx/FPS;
          this.y=this.y+this.speedy/FPS;  //speedy/FPS 速度/每秒改變張數 每秒改變距離
          /*if(this.x=enemyPath[6].x,this.y=enemyPath[6].y){
            this.hp = 0;
          }*/
        }
}
var enemy=new Enemy();
var enemies =[];

//紀錄遊戲時間
var clock=0;

/*//每80個"遊戲時間"產生一個敵人
//可以用prompt改變遊戲難度(幾個遊戲時間產生一個敵人)
if((clock%80)==0){
  var newEnemy = new Enemy();
  enemies.push(newEnemy);
  //console.log(clock);
}*/



var btn={
  x:590,
  y:430
}

//游標
$("#game-canvas").on("mousemove", function(event){
  cursor = {
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
/*var tower = {
  range:96,
  aimingEnemyId:null,
  shoot:function(){
        ctx.beginPath(); //開始畫線
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(enemies[this.aimingEnemyId].x,enemies[this.aimingEnemyId].y);
        ctx.strokeStyle='yellow';
        ctx.lineWidth=3;
        ctx.stroke();
  },
  fireRate:1,
  readyToShootTime:1,
  damage:5,
  searchEnemy:function(){
              this.readyToShootTime -= 1/FPS;
              for(var i=0; i<enemies.length; i++){
                var distance = Math.sqrt(Math.pow(this.x-enemies[i].x,2) + Math.pow(this.y-enemies[i].y,2));
                //console.log(this.x+","+this.y);
                //console.log(distance);
                if(distance<=this.range){
                  this.aimingEnemyId = i;
                  //console.log(this.aimingEnemyId);
                  if(this.readyToShootTime<=0){
                    this.shoot(this.aimingEnemyId);
                    this.readyToShootTime = this.fireRate;
                    enemies[i].hp -= this.damage;
                  }
                  return;
                }
              }
              this.aimingEnemyId = null;
             },
};*/

function tower(x,y){
  this.x=x;
  this.y=y;
  this.range = 96;
  this.aimingEnemyId = null;
  this.shoot = function(){
                ctx.beginPath(); //開始畫線
                ctx.moveTo(this.x,this.y);
                ctx.lineTo(enemies[this.aimingEnemyId].x,enemies[this.aimingEnemyId].y);
                ctx.strokeStyle='yellow';
                ctx.lineWidth=3;
                ctx.stroke();
  };
  this.fireRate = 1;
  this.readyToShootTime = 1;
  this.damage = 5;
  this.searchEnemy = function(){
                      this.readyToShootTime -= 1/FPS;
                      for(var i=0; i<enemies.length; i++){
                        var distance = Math.sqrt(Math.pow(this.x-enemies[i].x,2) + Math.pow(this.y-enemies[i].y,2));
                        //console.log(this.x+","+this.y);
                        //console.log(distance);
                        if(distance<=this.range){
                          this.aimingEnemyId = i;
                          //console.log(this.aimingEnemyId);
                          if(this.readyToShootTime<=0){
                            this.shoot(this.aimingEnemyId);
                            this.readyToShootTime = this.fireRate;
                            enemies[i].hp -= this.damage;
                          }
                          return;
                        }
                      }
                      this.aimingEnemyId = null;
                     };
};

//var towerBuild =new tower();
var Towers =[];

var cursor = {};
$("#game-canvas").on("click", function(){
  if(isCollided(cursor.x, cursor.y, 590, 430, 50, 50)){ //判斷點擊位置是否在按鈕內
    if(isBuilding){ //isBuilding == true  也就是已經點擊過一次 再點一次取消 沒有點擊在按鈕內
      isBuilding=false; //再點一次取消
    }else{
      isBuilding=true; //一開始isBuilding == false   所以點擊後令isBuilding == true
    }
  }else if(isBuilding==true && Money>=25){ //已經點擊過第一次 且第二次點擊位置不在按鈕內 建造
      Towers.push(new tower(cursor.x-cursor.x%32 , cursor.y-cursor.y%32));
      Money -= 25;
      isBuilding=false;  //回復原來狀態
  }
});

function draw(){
  ctx.drawImage(bgImg,0,0);
  ctx.fillText("HP:"+treeHp,15,20);
  ctx.fillText("Score:"+Score,15,42);
  ctx.fillText("Money:"+Money,15,64);
  ctx.fillText("Time:"+Time,15,86);
  ctx.font="22px Arial";
  ctx.fillStyle="white";
  //每80個"遊戲時間"產生一個敵人
  //可以用prompt改變遊戲難度(多少遊戲時間產生一個敵人)
  if(clock%gameSpeed==0){
    var newEnemy = new Enemy();
    enemies.push(newEnemy);
    //console.log(clock);
  } 
  for(var i=0;i<enemies.length;i++){
    /*if(enemies[i].x=64,enemies[i].y=128){
      enemies[i].hp=0;
      hp = hp - 10;
    }*/
    if(enemies[i].hp<=0){ //敵人的生命值如果歸零 就刪掉敵人
       if(enemies[i].pathDes != enemyPath.length-1){
        Score += 10;
        Money += 8;
      }
      enemies.splice(i,1);
      //console.log(enemies[0].x,enemies[0].y);
    }
      enemies[i].move();
      ctx.drawImage(enemyImg,enemies[i].x,enemies[i].y);
    //console.log("true");
  }
  //enemy.move(); //不註解掉會多扣一次
  //ctx.drawImage(chaImg,Jason.x,Jason.y);
  //如果不註解掉 第一隻史萊姆不會被刪除
  //ctx.drawImage(enemyImg,enemy.x,enemy.y);
  ctx.drawImage(btnImg,btn.x,btn.y,50,50);
  for(var i=0; i<Towers.length; i++){
    if(isBuilding){ //畫出建造的塔 isBuilding == true
      ctx.drawImage(twrImg,cursor.x,cursor.y,32,32);
    }
    //ctx.drawImage{twrImg,tower.x,tower.y,32,32};
    ctx.drawImage(twrImg,Towers[i].x,Towers[i].y,32,32); //畫出本來存在的塔(已建造好的)
    Towers[i].searchEnemy();
    if(Towers[i].aimingEnemyId != null){
      var id = Towers[i].aimingEnemyId;
      ctx.drawImage(targetImg,enemies[id].x,enemies[id].y);
      //console.log("true");
    }
  }
  if(treeHp==0){
    gameOver();
  }
  if(Time==0&&treeHp>0){
    gameClear();
  }
  clock++;
  //gameSpeed++;
  Time--;
}

var intervalID = setInterval(draw,16);
//clearInterval(intervalID);

function gameOver(){
  ctx.fillText("GAME OVER",270,200);
  ctx.fillText("Score:"+Score,300,300);
  ctx.font="100px Arial";
  ctx.fillStyle="Black";
  clearInterval(intervalID);
}

function gameClear(){
  ctx.fillText("GAME CLEAR",270,200);
  ctx.fillText("Score:"+Score,300,300);
  ctx.font="100px Arial";
  ctx.fillStyle="Black";
  clearInterval(intervalID);
}

//第一次點擊後 不會顯示塔跟隨在游標旁(第二次開始會)
