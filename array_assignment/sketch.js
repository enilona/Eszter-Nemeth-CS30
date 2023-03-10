// Arrays and Object Notation
// Eszter Nemeth
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let centerPoint;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
  
  
}

function draw() {
  //background(220);
  drawLine(random(width));
}


function drawLine(theLength){
  let x1 = random(height)
  stroke(80,random(250),150)
  strokeWeight(1)
  fill(random(100,100),random(100,200),random(100,200))
  line(0,x1,width,x1)
  //centerPoint = 

  //curve(100,100,250,250,300,300,400,400)
  //curve(0,random(height),random(width),random(height),random(width),random(height),width, random(height));
  
}

