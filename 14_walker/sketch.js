// OOP walker demo


class Walker {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.color = "red";
    this.speed = 5;
    this.size = 5;
  }

  display(){
    noStroke();
    fill(this.color);
    circle(this.x, this.y, this.size);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    if (choice < 50) {
      //down
      this.y += this.speed;
    }
    if (choice < 75) {
      //left
      this.x -= this.speed;
    }
    if (choice < 100) {
      //right
      this.x += this.speed;
    }
  }
}

let kevin;
let wasi;

function setup() {
  createCanvas(windowWidth, windowHeight);
  kevin = new Walker(width/2,height/2);
  wasi = new Walker(width/2,height/2);
  wasi.color = "blue";
}

function draw() {
  kevin.move();
  kevin.display();
  wasi.move();
  wasi.display();
}
