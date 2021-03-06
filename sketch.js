const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,compPlayer,playerBase

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  

  engine = Engine.create();
  world = engine.world;
	
   playerBase = new Playerbase(300,random(450,height-300),180,150)
   computerBase = new Computerbase(1100,random(450,height-300),180,150)
   player = new Player(285,playerBase.body.position.y-160,50,180)
   compPlayer = new Player(1085,computerBase.body.position.y-160,50,180)

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   player.display()
   compPlayer.display()
   playerBase.display()
   computerBase.display()


   //display Player and computerplayer


}
