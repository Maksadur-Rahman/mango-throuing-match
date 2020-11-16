
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.constraint;

var stone;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9ss;
var boyImage;
var sling;
var ground;

function preload()
{
	boyImage=loadImage("sprites/boy.png");
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//creating ground
   ground=new Ground(1200,680,1200,20);

   //creating the stone
   stone=new Stone(230,530,30);

   //creating mango
   mango1=new Mango(730,130,30);
   mango2=new Mango(800,80,30);
   mango3=new Mango(900,40,30);
   mango4=new Mango(700,220,30);
   mango5=new Mango(820,190,30);
   mango6=new Mango(920,120,30);
   mango7=new Mango(1020,120,30);
   mango8=new Mango(960,220,30);
   mango9=new Mango(1050,250,30);

   //creating constraint
   sling=new Sling(stone.body,{x:230,y:530});

   tree=new Tree(600,0,600,700);


	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background(0);
  drawSprites();
  ground.display();
  image(boyImage,600,70);
  tree.display();

  sling.display();

  mango1.display();
  mango2.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);

  
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
	launcherOb.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stone.body, {x:230, y:530}) 
		launcherOb.attach(stone.body);
	}
}


function detectCollision(stone, mango)
{
	var distance = dist(mango.body.position.x, mango.body.position.y, stone.body.position.x, stone.body.position.y)

	if(distance <= stone.r+mango.r)
	{
		Matter.Body.setStatic(mango.body, false);
	}
}
 




