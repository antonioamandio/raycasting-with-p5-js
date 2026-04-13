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

// clear the canvas for the next frame
function draw() {
  background(190, 190, 255);
  
  // Draw the ground
  fill(130);
  rect(0, height / 2, width, height / 2);
  
  for (let x = 0; x < width; x++)
  {
    const multiplier = 2 * (x / width) - 1;
    const cameraPixel = p5.Vector.mult(cameraPlane, multiplier);
    
    const rayDir = p5.Vector.add(dir, cameraPixel);
    
    // Cálculo dos raios e desenho
  }
}
