const gamemap = [
  [1,1,1,1,1,1,1,1,1,1],
  [1,1,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,0,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,0,0,0,0,0,0,1,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,1],
  [1,1,0,0,0,0,0,0,1,1],
  [1,1,1,1,1,1,1,1,1,1],
]

const gameWidth = 320;
const gameHeight = 200; 

let pos;
let dir;
let cameraPlane;

function setup() {
  createCanvas(gameWidth, gameHeight);
  noStroke();

  pos = createVector(5, 5);
  dir = createVector(0, -1);
  cameraPlane = createVector(0.66, 0);
}

function draw() {
  background(190, 190, 255);
  fill(130);
  rect(0, height / 2, width, height / 2);
}
