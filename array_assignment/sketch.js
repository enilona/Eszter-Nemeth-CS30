// Arrays and Object Notation
// Eszter Nemeth
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let Elements = [];
let NumberOfCircles = 3;
let xStart = 30;
let yStart = 30;
let yDist = 60;
let xDist = 60;
let colorValue = noise(random(100)) * 200;


function setup() {
  createCanvas(500, 500);
  createCircle(Elements);

}

function draw() {
  background(220);
  displayCircle();
  noLoop();
  
}

function displayCircle(){
  for (i = 0; i < Elements.length; i++){
    circles = Elements[i]
    for (j = 0; j < circles.length; j++){
      C = circles[j];
      drawCircle(C);
    }
  }   
}
 
function drawCircle(C){
  fill(C.color);
  rect(C.x - C.radius/2, C.y - C.radius/2, C.radius, C.radius)

}

function createCircle(Elements){
  let StackOfShapes = [];
  R = 60;
  // for (i = 0; i <= NumberOfElements; i++){
    
  for ( ri = 0; ri < 8; ri++){
    for ( ci = 0; ci < 8; ci++){
      y = yStart + ri * yDist;
      x = xStart + ci * xDist;
      for (j = 0; j < NumberOfCircles; j++){
    
        Rc = R - j*20;
      
        theCircle = {
          x: x, 
          y: y,
          radius: Rc,
    
          color: color(colorValue, colorValue, colorValue),
        }  
        StackOfShapes.push(theCircle);      
      }
      Elements.push(StackOfShapes);
    }
  }
}
  

  

