// Color switching 2D array assignment
// Eszter Nemeth
// 



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
let swap;
let swip;
let rgb = [];

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

  //creates a list of numbers
  numberList = createNumberList(numberList);
  newArray = [...numberList];
  //shuffles the list of numbers 
  shuffledArray = shuffleArray(newArray);

  getRGBvalues();

}

function draw() {
  background(220);
  displayGrid();
  if (key === " "){
    orderGrid();
  }
}

function orderGrid(){
  for (let y = 0; y < shuffledArray.length; y++){
      if (shuffledArray[y] > shuffledArray[y+1]){
        swip = shuffledArray[y];
        swap = shuffledArray[y+1];
        shuffledArray[y] = swap;
        shuffledArray[y+1] = swip;
        displayGrid;
      }
  }
}

function displayGrid(){
  for (let y = 0; y < ROWS; y++){
    //allows the array to look through all the numbers in the tens, twenties, etc
    y1 = y * 10;
    //fill (rgb)
    for (let x = 0; x < COLS; x++){
      fillRect(x*cellSize, y*cellSize, cellSize, cellSize);
      textAlign(CENTER,CENTER);
      textSize(15);
      text(shuffledArray[x+y1], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
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
    for (let x = 0; x < COLS; x++){
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


function getRGBvalues(){
  for (let i = 0; i < theColor.length; i++){
    rgb = theColor[i].split(",");
  }
  return rgb;
}