
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base;
var box1, box2, box3, box4;
var box5, box6, box7;
var box8, box9;
var box10;
var polygon;
var slingShot;
var score = 0;
//var bg, backgroundColor;

// function preload() {
//   getBackgroundColor();
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	base = new Ground(580, 500, 280, 10);
	box1 = new Box(500, 474, 50, 50);
	box2 = new Box(551, 474, 50, 50);
	box3 = new Box(601, 474, 50, 50);
	box4 = new Box(651, 474, 50, 50);

	box5 = new Box(525, 424, 50, 50);
	box6 = new Box(576, 424, 50, 50);
	box7 = new Box(626, 424, 50, 50);

	box8 = new Box(550, 374, 50, 50);
	box9 = new Box(601, 374, 50, 50);

	box10 = new Box(575, 324, 50, 50);

	polygon = new Bird(100, 400);

	slingShot = new SlingShot(polygon.body, {x:100, y:400});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  base.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  polygon.display();
  slingShot.display();
  
  drawSprites();
  textSize(28);
  text("Score :"+score, 600, 50);
 
}

function mouseDragged() {
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
	slingShot.fly();
}

function keyPressed() {
	if(keyCode === 32) {
		slingShot.attach(polygon.body);
	}
}

// async function getBackgroundColor() {
//   var response = await fetch("http://worldclockapi.com/api/json/est/now");
//   var responseJSON = await response.json();
//   var dateTime = responseJSON.currentDateTime;
//   var hour = dateTime.slice(11, 13);
//   if(hour >= 6 && hour <= 18) {
//       bg = 0;
//   }
//   else {
//       bg = 0;
//   }
//   backgroundColor = bg;
//}
