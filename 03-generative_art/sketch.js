// Generative Art
// 2023, March, 03


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  lotsOfLines(150,800);
}

function draw() {
}

function lotsOfLines(collums, rows) {
  for (let x = 0; x < collums; x++) {
    for (let y = 0; y < rows; y++) {
      let spaceAmount = width/collums;
      diagonalLine(x*spaceAmount, y*spaceAmount, spaceAmount);
    }
  }
}


function diagonalLine(x, y, spacing){
  if (random(100) > 50){
    //positive slope
    line(x - spacing/2, y + spacing/2, x + spacing/2, y - spacing/2);
  }
  else {
    //negative slope
    line(x + spacing/2, y + spacing/2, x - spacing/2, y - spacing/2);   
  }
}