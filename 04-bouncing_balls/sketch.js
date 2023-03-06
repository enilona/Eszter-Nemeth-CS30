// Bouncing Balls Demo
//Using arrays and object notation

let shapes = []; 


function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBall(width/2, height/2);
}

function draw() {
  background(220);
  moveShapes();
  displayShapes();

}

function mousePressed(){
  spawnBall(mouseX,mouseY);
}

function moveShapes(){
  for(let i = 0; i < shapes.length; i++){
    shapes[i].x += shapes[i].dx;
    shapes[i].y += shapes[i].dy;
    if (shapes[i].x > width || shapes[i].x < 0) {
      shapes[i].x -= shapes[i].dx;
    }
  }
}

function displayShapes(){
  for (let i = 0; i < shapes.length; i++){
    fill(shapes[i].theColor);
    circle(shapes[i].x, shapes[i].y, shapes[i].diameter);

  }
}

function spawnBall(tempx,tempy){
  let newBall = {
    x: tempx,
    y: tempy,
    dx: random(-5,5),
    dy: random(-5,5),
    diameter: random(5,100),
    theColor: color(random(255), random(255), random(255), random(255) )
  }
  
  shapes.push(newBall);
}