// Arrays and Object Notation
// Eszter Nemeth
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



let change1 = 0;
let change2 = 100;
let circles=[];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(3);

}

function draw() {
  background(220);
  drawCircles();
  //justaCircle();
}

function drawCircles(){

  for (let y = 0; y < height; y += 45) {
    for (let x = 0; x < width; x += 45){
      let colorThing = noise(random(200));
      let changeAmount1 = random(200,300);
      let changeAmount2 = random(200,300);
      let changeAmount3 = random(200,300);
      fill(colorThing*changeAmount1,colorThing*500,colorThing*500);
      circle(x,y,45,45);
    }
  }
}

function justaCircle(){
  fill("red");
  let x = noise(change1) * width;
  let y = noise(change2) * height;
  circle(x,y,30);
  circle(x+30,y,30);
  x = x + 1;
  y = y + 1;
  change1 += 0.0001;
  change2 += 0.0001;
  noFill();
}
