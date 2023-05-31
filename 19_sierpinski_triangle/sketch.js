// Sierpinski triangle


let triangleVertices = [
  {x: 500, y: 50},
  {x: 50, y: 750},
  {x:950, y: 750},
];

let theColors = ["paleturquoise", "lightpink","lemonchiffon", "lightgrey","lightcoral" ,"white", "black"];

let depth = 0;

function setup() {
  createCanvas(1000, 800);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, depth);
}
function mousePressed(){
  if (depth < 8){
    depth++;
  }
}

function sierpinski(points, depth){
  fill(theColors[depth]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (depth > 0){
    //bottom left
    sierpinski([getMidpoint(points[0], points[1]), points[1], getMidpoint(points[1],points[2])], depth-1);
  }
  if (depth > 0){
    //bottom right
    sierpinski([getMidpoint(points[0], points[2]), getMidpoint(points[1],points[2]), points[2]], depth-1);
  }
  if (depth > 0){
    //top
    sierpinski([ points[0], getMidpoint(points[0], points[1]), getMidpoint(points[0],points[2])], depth-1);
  }
}

function getMidpoint(point1, point2){
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let theMidpoint = {x: xDiff/2, y: yDiff/2};
  return theMidpoint;
}