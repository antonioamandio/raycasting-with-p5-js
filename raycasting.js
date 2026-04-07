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

function setup() {
  createCanvas(gameWidth, gameHeight);
  noStroke();
}

function draw() {
  background(190, 190, 255);
  fill(130);
  rect(0, gameHeight / 2, gameWidth, gameHeight / 2);
}
