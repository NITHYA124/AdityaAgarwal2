const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,ground2;
var box,boxinv;
var player;
var station;
var platform,platform2,platform3,platform4;
var play;

var gamestate = "start";


function setup() {

  createCanvas(1200,600);
  //engine = Engine.create();
  //world = engine.world; 
  setstart();
  setlevel1();

}

function draw(){
  background("white");
  
  //Engine.update(engine);
 if(gamestate==="start"){
   // setstart();
   textSize(100)
  fill("purple")
        text(" The Parcel Game",350,400) 
        text.visible=true
       
 // setlevel1();
  startstate();
}
drawSprites();
  if(gamestate==="level1"){
    playlevel1();
    if(keyDown(RIGHT_ARROW)){
      player.x = player.x+5;
    }
  
    if(keyDown(LEFT_ARROW)){
      player.x = player.x - 5;
    }
  
    if(keyDown("space")){
      player.velocityY =  - 10;
    }
    player.velocityY = player.velocityY + 0.5; 
  
  }
 
  if(gamestate==="level2"){
    textSize(50)
    text("u entered next level",300,200)
  }
}
  function setstart(){
  
  play=createSprite(500,500,50,50)

  
}
function startstate(){


  if(mousePressedOver(play)){
    
    clear();
    gamestate="level1";
  }
}
function setlevel1()
{
  player = createSprite(200,530,40,40);
 player.visible=false
  play.visible=true;
  box = createSprite(700,540,40,40);
 box.visible=false;
  boxinv= createSprite(720,540,10,40);
  boxinv.visible=false;
  box.debug=true;
  box.setCollider("rectangle",0,0,40,40)
  station = createSprite(900,570,200,20);
  station.shapeColor = "red";
station.visible=false;
  station.setCollider("rectangle",0,0,200,25);
  ground = createSprite(400,570,800,20);
  ground.visible=false;
  ground2 = createSprite(1100,570,200,20);
  ground2.shapeColor="green"
 ground2.visible=false;
  
}
function playlevel1(){
  player.visible=true;
 box.visible=true;
 station.visible=true;
  ground.visible=true
  ground2.visible=true;
  play.visible=false;
  
 if(box.isTouching(station)){
  textSize(20);
  fill("black");
  text("You  Delivered The Parcel !",600,400);
  gamestate = "level2";
 }

  

  player.collide(ground);
  player.collide(station);
  player.collide(ground2);

  if(player.isTouching(box))
  {
    box.x=box.x+5
    boxinv.x=boxinv.x+5
    }
    if(player.isTouching(boxinv))
    {
      box.x=box.x-5
      boxinv.x=boxinv.x-5
      }
      

}

/*function level2(){

  ground = createSprite(400,570,800,20);
  ground2 = createSprite(1100,570,200,20);
  station = createSprite(900,570,200,20);
  station.shapeColor = "red";

  platform = createSprite(700,340,50,20);
  platform2 = createSprite(200,530,20,20);
  platform3 = createSprite(400,450,20,20);
  platform4 = createSprite(600,390,20,20);
  

  station.setCollider("rectangle",0,0,200,25);

  

  player = createSprite(200,530,40,40);
}*/