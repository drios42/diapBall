var x=10;
var y=50;

var speed =3;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);
  
  text("X Position of my circle: "+x, 20,30);
  
  stroke(0, 255, 255);
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
  
  x = x + speed;
  
  if(x>=width){
    speed = -3;
  }
   if(x<=0){
    speed = 3;
  }

}