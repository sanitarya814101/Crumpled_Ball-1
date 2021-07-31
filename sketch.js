const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground;

var block1, block2, block3;

var paper;

var dustbin;

function setup() {
  createCanvas(1360, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Block(680, 390, 1360, 20, "red");

  block1 = new Block(920, 280, 10, 150, "yellow");
  block2 = new Block(1000, 350, 150, 10, "yellow");
  block3 = new Block(1080, 280, 10, 150, "yellow");

  paper = new Paper(200, 200);

  dustbin = new Dustbin(1000, 280, 200, 160);
}

function draw() {
  background(255, 255, 255);

  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  paper.display();
  dustbin.display();
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, { x: 12, y: -10 });
  }
}
