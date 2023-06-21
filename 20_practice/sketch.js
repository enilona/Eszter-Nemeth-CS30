// Practice


class Ball{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = random(-8,8);
    this.dy = random(-8,8);
    this.r = random(200);
    this.b = random(200);
    this.g = random(200);
    this.opac = random(100, 200);
    this.size = random(20,60);
  }

  update(){
    this.x += this.dx;
    this.y += this.dy;

    if(this.x < 0 + this.size/2 || this.x > width - this.size/2){
      this.dx *= -1
    }
    if(this.y < 0 + this.size/2 || this.y > height - this.size/2){
      this.dy *= -1
    }
  }

  display(){
    noStroke();
    fill(this.r, this.g, this.b, this.opac);
    circle(this.x, this.y, this.size);
  }

  collisionCheck(otherball){
    let distanceApart = dist(this.x, this.y, otherball.x, otherball.y);
    let radiiSum = this.size/2 + otherball.size/2;

    if (distanceApart < radiiSum){
      //collision
      let swip = this.dx;
      let swap =this.dy;
      this.dx = otherball.dx;
      this.dy = otherball.dy;
      otherball.dx = swip;
      otherball.dy = swap;
    }
  }

}

let ballArray = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
}


function draw(){
  background(255);
  for (let someBall of ballArray){
    someBall.update();
    for (let otherball of ballArray){
      if (someBall !== otherball){
        someBall.collisionCheck(otherball);
      }
    }
    someBall.display();
  }
}


function mousePressed(){
  let theBall = new Ball(mouseX, mouseY);
  ballArray.push(theBall);
}