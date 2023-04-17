// Color switching 2D array assignment
// Eszter Nemeth
// Apr 15 2023
// Extra for Experts:
//I learned what interpolation is and how it can be used to enhance my code.
//
//Note: I do not has ESlint on my home laptop so there may be errors that I am unaware of. Nonetheless, the code works :)



let grid;
//list that holds numbers used to keep track of how the squares are moving
let numberList = [];
//the basic colors that are interpolated, these numbers can be changed to make the colors look different
let baseColors = [[255,0,0],[255,0,255],[0,0,255],[0,255,255],[0,255,110],[255,255,0],[255,0,0]];
//the lower the number the wider the range of colors when displayed
let interpolationLength = 500;

//the ROWS and COLS always need to be <= the square root of the (interpolationLength * 6)
const ROWS = 54;
const COLS = 54;
let cellSize;
let theColor = [];
let shuffledArray = [];
let newArray;
let y1;
let swap;
let swip;
let first;
let last;
let choice;
let type = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  userInput();
  
  //creates the list of RGB values
  theColor = createRGBList();

  grid = createRandomGrid(ROWS,COLS);
  if (width < height) {
    cellSize = width/ROWS;
  }
  else{
    cellSize = height/ROWS;
  }

  //creates a list of numbers
  numberList = fillList(numberList);
  newArray = [...numberList];
  //shuffles the list of numbers 
  shuffledArray = shuffleArray(newArray);
 
}

function draw() {
  background(220);
  displayGrid();
  //the grid will begin to order itself when the space key is pressed
  if (key === " "){
    orderGrid();
  }
}

// Gets user input
function userInput(){
  let choice = prompt("Do you want bubble sort or magic bubble sort? Type 'bubble' or 'magic'");
  if (choice === "bubble"){
    type = 0;
  }
  if (choice === "magic"){
    type = 1;
  }
}

//puts the colors in order based on RGB value
function orderGrid(){
  if (type === 0){
  //looks through the entire grid and switches the squares if they are not in order(works from top to bottom)
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
  else if (type === 1){
    //looks through the entire grid and switches the squares if they are not in order(works from top to bottom)
    for (let y = 0; y < shuffledArray.length-1; y++){
      if (shuffledArray[y][0] > shuffledArray[y+1][0]){
        swip = shuffledArray[y];
        swap = shuffledArray[y+1];
        shuffledArray[y] = swap;
        shuffledArray[y+1] = swip;
        displayGrid;
      }
    }
    //looks through the entire grid and switches the squares if they are not in order(works from bottom to top)
    //I came up with the idea of doing bubble sort on the grid from two different directions
    //I recommend uncommenting the code below because it looks very cool!
    for (let y = shuffledArray.length-1; y > 0; y--){
      if (shuffledArray[y][0] < shuffledArray[y-1][0] && type === 1){
        swip = shuffledArray[y];
        swap = shuffledArray[y-1];
        shuffledArray[y] = swap;
        shuffledArray[y-1] = swip;
        displayGrid;
      }
    }
  }
}


function displayGrid(){
  for (let y = 0; y < ROWS; y++){
    //allows the array to look through all the numbers in the tens, twenties, etc
    y1 = y * ROWS;
    for (let x = 0; x < COLS; x++){
      //fills the grid with color
      fill(shuffledArray[x+y1][1],shuffledArray[x+y1][2],shuffledArray[x+y1][3]);
      rect(x*cellSize, y*cellSize, cellSize, cellSize);

      //this part is now unecessary however I left it in because it helped me find issues that I had with the code
      // textAlign(CENTER,CENTER);
      // textSize(15);
      // text(shuffledArray[x+y1][0], x*cellSize + cellSize/2, y*cellSize + cellSize/2);
    }
  }
}

// using Fisher Yates algorithm to shuffle the values in the array
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

//adapted from one of the demos in class to create a grid
function createRandomGrid(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++){
    }
  }
  return newGrid;
}

//fills the list with the rgb values
function fillList(numbers){
  for (let i = 0; i < ROWS * COLS; i++){
    let rgb = theColor[i];
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

//creates the list of RGB values
function createRGBList(){
  let red = [];
  let green = [];
  let blue = [];
  for (let i = 0; i < baseColors.length-1; i++){
    //start and end values for interpolation
    first = baseColors[i];
    last = baseColors[i+1];
    //interpolating each color
    red = red.concat(interpolate(first[0],last[0],interpolationLength));
    green = green.concat(interpolate(first[1],last[1],interpolationLength));
    blue = blue.concat(interpolate(first[2],last[2],interpolationLength));
  }
  let list = [];
  //adding interpolated values to a list
  for (let i = 0; i < red.length; i++){
    let element = [];
    element.push(red[i]);
    element.push(green[i]);
    element.push(blue[i]);

    list.push(element);
  }
  return list;
}

//fills in the list in between the values that are give with the baseColors
function interpolate(start, end, theLength){
  //how much the numbers should increase by
  difference = (end-start)/(theLength-1);
  let emptyArray = [];
  for (let i = 0; i < theLength; i++){
    //giving the interpolated numbers to the array
    emptyArray.push(start + i*difference)
  }
  return emptyArray;
}

