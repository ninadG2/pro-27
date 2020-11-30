
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;


var bob1;
var statiobject1;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new bob(700,320,70,70);
	rope1 = new rope(bob1.body, statiobject1, -70*2,0)
	statiobject1 = new staticbody(404,34,550,45);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  console.log(mouseX)
 

  bob1.show();
  staticbody1.display();

  drawSprites();
 
}



