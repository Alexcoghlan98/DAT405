let angle = 0;
let r = 255; //declaring the range of colours
let g = 255; //declaring the range of colours
let b = 255; //declaring the range of colours
let speed = 3.0;
let diameter = 50;
let x1
let y1
var x = 100;
var y = 100;

function setup() {
  var canvas = createCanvas(594, 841); //This is the size of the canvas that the work will be placed on
  canvas.parent("canvasContainer");
  x1 = width/2;
  y1 = height/2;
  background(200); //this is the colour of the background
}

function draw()
 {
  x1 += random(-speed, speed); //these two lines of code dictate the speed of the shape on the canvas
  y1 += random(-speed, speed);
  //x1 = constrain(x1, 0, width);
  //y1 = constrain(y1, 0, height);

  fill(r, g, b, 255); //this shows the colour that the shape will be
  r = random(255);
  g = random(255);
  b = random(255);
  ellipse(x, y, 50, 50);

  if (keyIsDown(LEFT_ARROW)){
    x-=5; //When the left arrow is pressed on the keyboard the shape will move to the left
  }
  if (keyIsDown(RIGHT_ARROW)){
    x+=5; //When the right arrow is pressed on the keyboard the shape will move to the right
  }

  if (keyIsDown(UP_ARROW))
    y-=5; //When the up arrow is pressed on the keyboard the shape will move to the up

  if (keyIsDown(DOWN_ARROW))
    y+=5; //When the down arrow is pressed on the keyboard the shape will move to the down

  //clear();

  fill (r, g, b, 120);
  ellipse(x, y, diameter, diameter);

}

function mousePressed(){
  clear(); //When the user left clicks on the mouse then the canvas will clear and so the user can start over
    background(200);
  }
//let x2 = map(x, 0, width, width, 0);
//let y2 = map(y, 0, height, height, 0);
