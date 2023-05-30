// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let theColors = ["red","green", "blue", "orange", "purple", "pink", "white", "yellow"];


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  fractalCircle(width/2,width, 10);
  let theDepth = Math.floor(map(mouseX, 0, width, 0, 10));
  fractalCircle(width/2, width, theDepth);
}

function fractalCircle(x, diameter, depth){
  //base case
  fill(theColors[depth]);
  circle(x, height/2, diameter);


  if ( depth > 0){
    depth--;
    //leftside circle
    fractalCircle(x-diameter/4, diameter/2, depth);
    //rightcircle
    fractalCircle(x+diameter/4, diameter/2, depth);
  }
}