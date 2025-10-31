const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase, playerArcher;
var playerArrows = [];
var board1, board2;
var numberOfArrows = 10;

var score = 0;

function preload() {
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  

  for (var i = 0; i < playerArrows.length; i++) {
  
  }

  // Title
 

  // Score
 

  // Arrow Count
  

}

function keyPressed() {
  if (keyCode === 32) {
    if (numberOfArrows > 0) {
      
  }
}
}

function keyReleased() {
  if (keyCode === 32) {
    
  }
}

function gameOver() {
  
}


