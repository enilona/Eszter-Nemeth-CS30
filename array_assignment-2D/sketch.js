// Color switching 2D array assignment
// Eszter Nemeth
// 

//https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html


let grid;
let numberList = [];

const ROWS = 10;
const COLS = 10;
let cellSize;
let loadFile;
let theColor;
let someColor;
let number;
let shuffledArray = [];
let newArray;

function preload(){
  loadFile = "colors_list.txt";
  theColor = loadStrings(loadFile);
  loadFile = "numbersList.txt";
  number = loadStrings(loadFile);
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomGrid(ROWS,COLS);

  numberList = createNumberList(numberList);
  newArray = [...numberList];

  shuffledArray = shuffleArray(newArray);

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

      rect (x*cellSize, y*cellSize, cellSize, cellSize);
      textAlign(CENTER,CENTER);
      textSize(15);
      text(shuffledArray[(ROWS-x)+ (COLS-y)], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
    }
  }
}

// using Fisher Yates algorithm
function shuffleArray(values){
  let index = values.length,
    randomIndex;
  
  // While there remain elements to shuffle.
  while (index !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * index);
    index--;
  
    // And swap it with the current element.
    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }
  
  return values;
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

function createNumberList(numbers){
  for (let i = 0; i < ROWS * COLS; i++){
    numbers.push(i);
  }
  return numbers;
}
