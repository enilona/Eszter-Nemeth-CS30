// Color switching 2D array assignment
// Eszter Nemeth
// 



let grid;

const ROWS = 35;
const COLS = 35;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomGrid(ROWS,COLS);

  if (width < height) {
    cellSize = width/ROWS;
  }
  else{
    cellSize = height/ROWS;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < ROWS; y++){
    for (let x = 0; x < COLS; x++){
      // if (grid[y][x] === 1){
      //   fill("black");
      // }
      // else if (grid[y][x] === 0){
      //   fill("white");
      // }
      rect (x*cellSize, y*cellSize, cellSize, cellSize)
    }
  }
}

function createRandomGrid(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x =0; x < COLS; x++){
      if (random(100) < 50){
        newGrid[y].push(0);
      }
      else{
        newGrid[y].push(1);    
      }
    
    }
  }
  return newGrid;
}
