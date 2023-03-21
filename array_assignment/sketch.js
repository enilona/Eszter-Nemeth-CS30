// Arrays and Object Notation
// Eszter Nemeth
// 2023 March 20
//
// Extra for Experts:
// -Before we learned about it in class I a had already used arrays inside of arrays in my code.

// explanation: This Generative art peice is designed so that a person can fiddle around with the different values and numbers to get completely different results. the first three grobal variables can be fiddled around with as well as the commented stuff inside the "drawShape" function. The code can also draw circes if the circle is uncommented in the "drawShape" function. It is also interesting to change the "noStroke" function inside the draw loop.

//establishing global variables
let NumberOfShapes = 7;
let rectdiv = 9;
let perimeterOfRect = 20;
let Elements = [];
let rowscols;
let  theSize = 20;
let xStart = 30;
let yStart = 30;
let yDist = 60;
let xDist = 60;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //controls how many rows and collums there are
  rowscols = windowHeight/xDist;
  createShape(Elements);
}

function draw() {
  background(220);
  //noStroke();
  displayShape();
  noLoop();
}

//goes through the lists and determines how to draw each shape
function displayShape(){
  for (i = 0; i < Elements.length; i++){
    shapes = Elements[i]
    for (j = 0; j < shapes.length; j++){
      C = shapes[j];
      drawShape(C);
    }
  }   
}
 
//controls what the shapes look like
function drawShape(C){
  fill(C.color);
  if (C.type > 5){
    rect(C.x - C.radius/2, C.y - C.radius/2, C.radius, C.radius)    
  }
  else {
    //translate(C.x,C.y)
    //rotate(y*0.03)
    rect(C.x - C.radius/2, C.y - C.radius/2, C.radius/rectdiv, C.radius/rectdiv) 
   // circle(C.x,C.y,C.radius)
  }
}

//main part of the array
function createShape(Elements){
  //the array inside of the array
  let StackOfShapes = [];
  
  //creates a grid-like structure to draw the shapes
  for ( ri = 0; ri < rowscols; ri++){
    for ( ci = 0; ci < rowscols; ci++){
      //starting point of the first shapes and number by which they increase throughout the grid
      y = yStart + ri * yDist;
      x = xStart + ci * xDist;
      //controls how many shapes are inside the first shapes(stacks)
      for (j = 0; j < NumberOfShapes; j++){
        //how much each shape decreases
        shapeSize = theSize - j*perimeterOfRect;
        shapeType = random(10)
        //creating object
        theShape = {
          type: shapeType,
          x: x, 
          y: y,
          radius: shapeSize,
          color: color(noise(random(100)) * 300, noise(random(100)) * 300, noise(random(100)) * 300,10),
          
        }  
        //adding objects to the group
        StackOfShapes.push(theShape);      
      }
      //adding the group to the total array
      Elements.push(StackOfShapes);
    }
  }
}
  