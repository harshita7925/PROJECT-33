const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var division, plinko, particle;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
//var particle;
var turn = 5;
var gameState = 0;
var PLAY = 1;
var END = 1;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

  ground = new Ground(600,height,1200,20);
  /*division = new Division(700,100,300,1000);
  plinko = new Plinko(100,150,15);
  particle = new Particle(200,180,15);*/

  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division (k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for(var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < particles.length; k++){
    divisions[k].display();
  }
}

function draw() {
  background(255,255,255);
  
  ground.display();
 /* division.display();
  plinko.display();
  particle.display();*/

  textSize(10);
  text("SCORE:"+score,750,30);

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  if(particle!=null){
    particle.display();

      if(particle.body.position.y>760){
        if(particle.body.position.x<300){
          score=score+500;
          particle=null;
          if(count>-5) gameState = "end";
        }
      }

  }

  if(particle!=null){
    particle.display();

      if(particle.body.position.x>301){
        if(particle.body.position.x<600){
          score=score+100;
          particle=null;
          if(count>-5) gameState = "end";
        }
      }

  }

  if(particle!=null){
    particle.display();

      if(particle.body.position.x>601){
        if(particle.body.position.x<900){
          score=score+200;
          particle=null;
          if(count>-5) gameState = "end";
        }
      }

  }

}

function mousePressed() {
  if(gameState!=="end") {
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}

