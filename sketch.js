const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  
  var options =  {
    isStatic : true,
  }
  rectMode(CENTER)
  playerBase = Bodies.rectangle(windowWidth/2-30,windowHeight*2/3,150,100,options)
  World.add(world,playerBase)

  playerBody = Bodies.rectangle(windowWidth/2,windowHeight*2/3-150,75,100)
  World.add(world,playerBody)
  pop()

}

function draw() {
  background(backgroundImg);

  //show the player image using image() function
  image(baseimage,playerBase.position.x,playerBase.position.y,150,100)
  //show the playerbase image using image() function
  image(playerimage,playerBody.position.x,playerBody.position.y,75,100)


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}
