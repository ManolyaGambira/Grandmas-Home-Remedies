var canvas, background;

var information;

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 20);

  information = new Information();
}

function draw() {
  background("paleGreen"); 
  
  information.display();

  drawSprites();
}