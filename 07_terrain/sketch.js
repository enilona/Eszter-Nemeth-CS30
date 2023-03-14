// Terrain Generation with Perlin Noise
//March 14 2023



let terrain = [];
let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnRectangles();
}

function draw() {
  background(220);

   
  //diplay rectangle
  for (let i = time; i < time + width; i++) {
    rect(terrain[i].x - time, height - terrain[i].height, 1, terrain[i].height);
  }
}


function spawnRectangles() {
  let time = 0;
  for(let x = 0; x < 2000; x++){
    let h = noise(time) * height;
    let thisRect = {
      x: x,
      height: h,
    };
    terrain.push(thisRect);
    time += 0.002;
  }
}