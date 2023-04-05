// Color switching 2D array assignment
// Eszter Nemeth
// 

https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html


let grid;
let numberList = [1,2,3,4,5,6,7,8,9,10,11,12,14,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];

const ROWS = 10;
const COLS = 10;
let cellSize;
let loadFile;
let theColor;
let someColor;
let number;
let randomNumber;
let randomNumberList = [];

function preload(){
  loadFile = "colors_list.txt";
  theColor = loadStrings(loadFile);
  loadFile = "numbersList.txt";
  number = loadStrings(loadFile);
  
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
  background(220);
  displayGrid();
}

function displayGrid(){
  for (let y = 0; y < ROWS; y++){
    for (let x = 0; x < COLS; x++){

      //let randomNumber = random(numberList);
    
      rect (x*cellSize, y*cellSize, cellSize, cellSize);
      // textAlign(CENTER,CENTER);
      // textSize(15);
      // text(numberList[x], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
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
