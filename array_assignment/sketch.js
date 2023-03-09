// Arrays and Object Notation
// Eszter Nemeth
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10)
  drawLine(random(width));
}

function draw() {
  //background(220);
  
}


function drawLine(theLength){
  stroke(random(250),80,200)
  strokeWeight(2)
  //fill(random(100,100),random(100,200),random(100,200))
  //curve(100,100,250,250,300,300,400,400)
  curve(0,random(height),random(width),random(height),random(width),random(height),width, random(height));
  

}
