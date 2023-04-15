// Color switching 2D array assignment
// Eszter Nemeth
// 



let grid;
let numberList = [];

const ROWS = 17;
const COLS = 17;
let cellSize;
let loadFile;
let theColor;
let colors;
let numbers;
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

  //getRGBvalues();

}

function draw() {
  background(220);
  displayGrid();
  if (key === " "){
    orderGrid();
  }
}

///////////////////////////////////////////////////
function orderGrid(){
  toString(shuffledArray);
  for (let y = 0; y < shuffledArray.length-1; y++){
      if (shuffledArray[y][0] > shuffledArray[y+1][0]){
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
    y1 = y * ROWS;
    for (let x = 0; x < COLS; x++){
      fill(shuffledArray[x+y1][1],shuffledArray[x+y1][2],shuffledArray[x+y1][3]);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
      textAlign(CENTER,CENTER);
      textSize(15);
      text(shuffledArray[x+y1][0], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
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
    }
  }
  return newGrid;
}

function createNumberList(numbers){
  for (let i = 0; i < ROWS * COLS; i++){
    let rgb = theColor[i].split(",");
    let r = rgb[0];
    let g = rgb[1];
    let b = rgb[2];
    let element = [];
    element.push(i);
    element.push(r)
    element.push(g)
    element.push(b)

    numbers.push(element);
  }
  return numbers;
}


// function getRGBvalues(){
//   for (let i = 0; i < theColor.length; i++){
//     rgb = rgb + theColor[i].split(",");
//   }
//   return rgb;
// }