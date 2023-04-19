// Ball Array OOP

class Ball {
  constructor(x, y,) {
    this.x = x;
    this.y = y;
    this.dx = random(-3, 5);
    this.dy = random(-3, 5);
    this.radius = random(10,40);
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = random(150,255);
  }

  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.radius*2);
  }
  update(){
    this.x += this.dx;
    this.y += this.dy;

    //bounce off wall
    if (this.x - this.radius <= 0 || this.x + this.radius >= width) {
      this.dx *= -1;
    }
    if (this.y - this.radius <= 0 || this.y + this.radius >= height) {
      this.dy *= -1;
    }
  }

  collisionCheck(otherBall){
    let distanceApart = dist(this.x, this.y, otherBall.x, otherBall.y);
    let radiiSum = this.radius + otherBall.radius;

    if (distanceApart <= radiiSum){
      //collsion

      // this.dx *= -1;
      // this.dy *= -1;
      
      let tempX = this.dx;
      let tempY = this.dy;
      this.dx = otherBall.dx;
      this.dy = otherBall.dy;
      otherBall.dx = tempX;
      otherBall.dy = tempY;
      // this.r = 255;
      // this.g = 0;
      // this.b = 0;
    }
  }
}

let ballArray = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(250);
  for (let someBall of ballArray){
    someBall.update();
    for (let otherBall of ballArray){
      if (someBall !== otherBall){
        someBall.collisionCheck(otherBall);
      }
    }
    someBall.display();
  }
}

function mousePressed(){
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}