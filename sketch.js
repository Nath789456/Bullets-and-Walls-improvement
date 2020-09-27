var bullet,wall, thickness;
var speed, weight;



function setup() {
  createCanvas(1600,400);
  speed=random(223,321);

  bullet=createSprite(100,300,5,30);
  bullet.velocityX= speed;
  bullet.shapeColor="red";

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(20,230,100);

  
  weight=random(30,52);
  thickness=random(22,83);
  
 
}

function draw() {
  background(0,0,0);  
  

if(hasCollided(bullet,wall)){


  bullet.velocityX=0;
  var damage= 0.5* weight* speed* speed/(thickness* thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

   if(damage<10){
     wall.shapeColor=color(0,255,0);
}
  }
  
  drawSprites();
}

function hasCollided(lbullet,lWall){
      bulletRightEdge=lbullet.x +lbullet.width;
      wallLeftEdge=lWall.x;
      if(bulletRightEdge>wallLeftEdge){
        return true;
      }
      else{
        return false;
      }
}