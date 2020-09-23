const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var score;
var bg,backg,bgtrue;
var ground, stand1, stand2, stand3, stand4;
var boxpink1, boxpink2, boxpink3, boxpink4, boxpink5, boxpink6, boxpink7, boxpink8, boxpink9, boxpink10, boxpink11, boxpink12;
var boxyellow1, boxyellow2, boxyellow3, boxyellow4, boxyellow5, boxyellow6, boxyellow7, boxyellow8;
var boxblue1, boxblue2, boxblue3, boxblue4;
var poly, polyimg, polyopt;
var sling;

async function preload() {
  polyimg = loadImage('polygon.png');

  bg = await getTime();


  if(bg>6&&bg<18){
    backg = "rgb(90,150,255)";
    bgtrue = 1;

  }
  else{
    backg = "rgb(10,10,100)";
    bgtrue = 1;
  }
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-15, width, 30);
  stand1 = new Ground(350,240,120,15);
  stand2 = new Ground(500,160,120,15);
  stand3 = new Ground(650,240,120,15);
  stand4 = new Ground(500,320,120,15);

  boxpink1 = new Box(stand1.body.position.x-35,stand1.body.position.y-27.5,25,40,255,192,203);
  boxpink2 = new Box(stand1.body.position.x,stand1.body.position.y-27.5,25,40,255,192,203);
  boxpink3 = new Box(stand1.body.position.x+35,stand1.body.position.y-27.5,25,40,255,192,203);

  boxpink4 = new Box(stand2.body.position.x-35,stand2.body.position.y-27.5,25,40,255,192,203);
  boxpink5 = new Box(stand2.body.position.x,stand2.body.position.y-27.5,25,40,255,192,203);
  boxpink6 = new Box(stand2.body.position.x+35,stand2.body.position.y-27.5,25,40,255,192,203);

  boxpink7 = new Box(stand3.body.position.x-35,stand3.body.position.y-27.5,25,40,255,192,203);
  boxpink8 = new Box(stand3.body.position.x,stand3.body.position.y-27.5,25,40,255,192,203);
  boxpink9 = new Box(stand3.body.position.x+35,stand3.body.position.y-27.5,25,40,255,192,203);

  boxpink10 = new Box(stand4.body.position.x-35,stand4.body.position.y-27.5,25,40,255,192,203);
  boxpink11 = new Box(stand4.body.position.x,stand4.body.position.y-27.5,25,40,255,192,203);
  boxpink12 = new Box(stand4.body.position.x+35,stand4.body.position.y-27.5,25,40,255,192,203);

  boxyellow1 = new Box(stand1.body.position.x-17.5,stand1.body.position.y-67.5,25,40,255,255,0);
  boxyellow2 = new Box(stand1.body.position.x+17.5,stand1.body.position.y-67.5,25,40,255,255,0);

  boxyellow3 = new Box(stand2.body.position.x-17.5,stand2.body.position.y-67.5,25,40,255,255,0);
  boxyellow4 = new Box(stand2.body.position.x+17.5,stand2.body.position.y-67.5,25,40,255,255,0);

  boxyellow5 = new Box(stand3.body.position.x-17.5,stand3.body.position.y-67.5,25,40,255,255,0);
  boxyellow6 = new Box(stand3.body.position.x+17.5,stand3.body.position.y-67.5,25,40,255,255,0);

  boxyellow7 = new Box(stand4.body.position.x-17.5,stand4.body.position.y-67.5,25,40,255,255,0);
  boxyellow8 = new Box(stand4.body.position.x+17.5,stand4.body.position.y-67.5,25,40,255,255,0);
  
  boxblue1 = new Box(stand1.body.position.x,stand1.body.position.y-107.5,25,40,44,193,242);
  boxblue2 = new Box(stand2.body.position.x,stand2.body.position.y-107.5,25,40,44,193,242);
  boxblue3 = new Box(stand3.body.position.x,stand3.body.position.y-107.5,25,40,44,193,242);
  boxblue4 = new Box(stand4.body.position.x,stand4.body.position.y-107.5,25,40,44,193,242);

  polyopt = {
    restitution: 1,
    density: 3,
    friction: 1
  }

  poly = Bodies.polygon(150,150,12,25,polyopt);
  World.add(world, poly);

  sling = new Slingshot(poly,{x:150, y:100});

  score = 0;
}

function draw() {

  if(bgtrue==1){
    background(backg);  
  }
  Engine.update(engine);
  rectMode(CENTER);
  imageMode(CENTER);

  boxpink1.score();
  boxpink2.score();
  boxpink3.score();
  boxpink4.score();
  boxpink5.score();
  boxpink6.score();
  boxpink7.score();
  boxpink8.score();
  boxpink9.score();
  boxpink10.score();
  boxpink11.score();
  boxpink12.score();

  boxyellow1.score();
  boxyellow2.score();
  boxyellow3.score();
  boxyellow4.score();
  boxyellow5.score();
  boxyellow6.score();
  boxyellow7.score();
  boxyellow8.score();

  boxblue1.score();
  boxblue2.score();
  boxblue3.score();
  boxblue4.score();

  ground.display();
  stand1.display();
  stand2.display();
  stand3.display();
  stand4.display();

  boxpink1.display();
  boxpink2.display();
  boxpink3.display();

  boxpink4.display();
  boxpink5.display();
  boxpink6.display();

  boxpink7.display();
  boxpink8.display();
  boxpink9.display();

  boxpink10.display();
  boxpink11.display();
  boxpink12.display();

  boxyellow1.display();
  boxyellow2.display();

  boxyellow3.display();
  boxyellow4.display();

  boxyellow5.display();
  boxyellow6.display();

  boxyellow7.display();
  boxyellow8.display();

  boxblue1.display();
  boxblue2.display();
  boxblue3.display();
  boxblue4.display();

  image(polyimg, poly.position.x, poly.position.y,50,50);

  sling.display();

  text("SCORE:"+score,720,40);
}

function mouseDragged(){
  Body.setPosition(poly,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed() {
  if (keyCode == 32){
    Body.setPosition(poly,{x:150,y:150})
    sling.reload(poly);
  }
}

async function getTime(){
  var fetcher = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var  response= await fetcher.json();
  var dateTime = response.datetime;
  var time = dateTime.slice(11,13);
  
  return time;
}
