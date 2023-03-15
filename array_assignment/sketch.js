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

}

function draw() {
  background(220);

  drawCircle();
}

function drawCircle(){


  for (let y = 0; y < height; y += 25) {
    for (let x = 0; x < width; x += 25){
      let x = noise(change1) * width;
      let y = noise(change2) * height;
      circle(x,y,25,25);
      x = x + 1;
      y = y + 50;
    }
    change1 += 0.001;
    change2 += 0.001;
  }


}


function spawnCircle(theX,theY,theSize,thing){
  let theCircles = {
    x: theX,
    y: theY,
    s:theSize,
  };
  thing.push(theCircles);
}