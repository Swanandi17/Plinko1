const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground1,ground2,ground3;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() { 
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 795, 480, 10);
 // plinko = new Plinko(200,200,10);
  particle2 = new Particle(300,200,10);

  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75, 5));
    console.log("Plinko");
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175,5));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275,5));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375,5));
  } 

}

function draw() {
  Engine.update(engine);
  background("black");
  
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }

  ground.display();
  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }
  
  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

   for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  } 


 // plinko.display();
  particle2.display();
  ground.display();

  drawSprites();
  
  
}
