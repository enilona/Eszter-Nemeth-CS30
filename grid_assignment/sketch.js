// Color switching 2D array assignment
// Eszter Nemeth
// 



let grid;
let numberList = [1,2,3,4,5,6,7,8,9];

const ROWS = 35;
const COLS = 35;
let cellSize;
let loadFile;
let theColor;
let someColor;

function preload(){
  loadFile = "colors_list.txt";
  theColor = loadStrings(loadFile);
  
}

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
  background(parseInt(theColor[7]));
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < ROWS; y++){
    for (let x = 0; x < COLS; x++){

      fill(theColor[7]);
      rect (x*cellSize, y*cellSize, cellSize, cellSize);
      textAlign(CENTER,CENTER);
      textSize(20);
      text(grid[y][x], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
    }
  }
}

function numbersInGrid(){

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
