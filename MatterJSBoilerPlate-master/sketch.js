
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25;
var slingshot,ground,stand,stand2;
var stone;
var text;
function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	 
	engine = Engine.create();
	world = engine.world;
	

	//Create the Bodies Here.

	 stone = new Stone(100,400,70,70)
	 slingshot = new SlingShot(stone.body,{x:100, y:400});
	 ground = new Ground(750,700,1500,30);

	 stand = new Stand(500,600,400,20);
	 stand2 = new Stand(1000,400,400,20);

	 //first layer1
	 box1 = new Box(410,565);
	 box2 = new Box(440,565);
	 box3 = new Box(470,565);
	 box4 = new Box(500,565);
	 box5 = new Box(530,565);
	 box6 = new Box(560,565);
	 box7 = new Box(590,565);

	 //second layer1
	 box8 = new Box2(440,515);
	 box9 = new Box2(470,515);
	 box10 = new Box2(500,515);
	 box11 = new Box2(530,515);
	 box12 = new Box2(560,515);
	 
	 //third layer1
	 box13 = new Box3(470,465)
	 box14 = new Box3(500,465)
	 box15 = new Box3(530,465)

	 //final layer1
	 box16 = new Box4(500,415)
	
	 //first layer2
	 box17 = new Box(910,365)
	 box18 = new Box(940,365)
	 box19 = new Box(970,365)
	 box20 = new Box(1000,365)
	 box21 = new Box(1030,365)

	//second layer2
	box22 = new Box2(940,315)
	box23 = new Box2(970,315);
	box24 = new Box2(1000,315);

	//final layer2
	box25 = new Box3(970,265)

	text = new Text(500,500);
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(55,43,43);
  ground.display();
  stand.display();
  stand2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  text.display();
  stone.display();
  slingshot.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}



