const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//const Body = Matter.Body;

var paperObj, dustbinObj, groundObj;
function setup() {
	createCanvas(800, 500);
//	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paperObj = new Paper(150,90,40);
	 dustbinObj = new dustbin(600,470);
	 groundObj=new ground(width/2,500,width,20);
	 slingObj = new sling( paperObj.body,{x:210, y:160});

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
  background(230);
 // Engine.update(engine);
  
  paperObj.display();
  dustbinObj.display(); 
  groundObj.display();
  slingObj.display();
 
}

function mouseDragged ()  {
    Matter.Body.setPosition(paperObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased ()  {
	slingObj.fly ();
}

