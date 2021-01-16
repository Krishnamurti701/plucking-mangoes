
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var boy,boyImage;
var tree,treeImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mangoImage;
var stone,stoneImage;

function preload(){
boyImage = loadImage("Images/boy.png")
treeImage = loadImage("Images/tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(500,625,1200,20);
	stone = new stone(100,460,23);
	mango1 = new Mango(100,460,23);
    mango2 = new Mango(855,385,35);
    mango3 = new Mango(670,260,35);
    mango4 = new Mango(730,320,35);
	mango5 = new Mango(710,320,36);
	mango6 = new Mango(780,250,35);
	mango7 = new Mango(825,170,33);
	mango8 = new Mango(880,260,35);
	mango9 = new Mango(940,220,35);
	attach= new Throw(stones.body,{x:100,y:465});
	tree= createSprite(775,368);
	tree.scale=0.42;

	boy= createSprite(160,550);
	boy.scale=0.125;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  fill("black")
  textSize(18)

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);

  drawSprites();
 
 stone.display();
 ground.display();
 boy.display();
 tree.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
}

function mouseDragged(){
Matter.body.setPosition(stones.body,{x:mouseX,y:mouseY});
}


