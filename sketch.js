const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var engine;
var world;

var rightButton;
var upButton;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  rightButton=createImg("right.png");
  rightButton.position(220,30);
  rightButton.size(50,50);
  rightButton.mouseClicked(rForce);

  upButton=createImg("up.png");
  upButton.position(20,30);
  upButton.size(50,50);
  upButton.mouseClicked(uForce);  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ballOptions={
  restitution:0.95  
  }
  ball=Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

}
function rForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.005,y:0});  
}
function uForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.005});  
}
