// Perlin demo with bubbles
// Eszter Nemeth


let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnBubble();
  noStroke();
  //window.setInterval(spawnBubble, 500);
}

function mousePressed(){
  spawnBubble();
}

function draw() {
  background(255);


  //javascript convenience for loop
  for (const bubble of theBubbles) {
    //move
    bubble.x = noise(bubble.time) * width;
    bubble.y = noise(bubble.time + 100) * height;



    //display
    fill(bubble.color);
    circle(bubble.x, bubble.y, bubble.size);

    //change time
    bubble.time += 0.01;
  }

  // classic for loop:
  // for (let i = 0; i < theBubbles.length; i++){
  //   fill(theBubbles[i].color)
  //   circle(theBubbles[i].x, theBubbles[i].y, theBubbles[i].size)
  // }
}



function spawnBubble(){
  let bubble = {
    x: random(width),
    y:random(height),
    size: random(5,50),
    color: color(random(255), random(255), random(255), random(255)),
    time: random(20),
  };
  theBubbles.push(bubble);
}