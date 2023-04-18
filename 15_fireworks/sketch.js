// Fireworks OOP



class Spark {
  constructor(x, y, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.alpha = 255;
    this.size = 3;
  }

  display(){
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.size);
  }
  update(){
    this.x += this.dx;
    this.y += this.dy;

    this.alpha = this.alpha - 2;
  }

  isDead(){
    return this.alpha <= 0;
  }
}

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = fireworks.length-1; i >= 0; i--){
    fireworks[i].update();
    fireworks[i].display();

    //remove if needed
    if (fireworks[i].isDead()) {
      fireworks.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (let i = 0; i < 200; i++){
    spawnSpark();
  }
}

function spawnSpark(){
  let theSpark = new Spark(mouseX, mouseY, random(-5,5), random(-5,5),);
  fireworks.push(theSpark);
}

circleThing(){
  for (let i =0; i < 360; i++){
    this.x = Math.cos(360/i);
    this.y = Math.sin(360/i);
  }
}