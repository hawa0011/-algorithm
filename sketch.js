// create variables
var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);

  //fixed rect 
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";

  //moving rect 
  movingRect=createSprite(200,300,40,50);
  movingRect.shapeColor="blue";
  
}

function draw() {
  background("black"); 
  //move with mouse  
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;

//condition to show collision 
if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
  && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 
  ) 
  {
fixedRect.shapeColor="red";
movingRect.shapeColor="red";
}
else { 
  fixedRect.shapeColor="blue";
  movingRect.shapeColor="blue";
}

  drawSprites();
}