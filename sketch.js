var bullet, wall;
var speed;
var weight;
var thickness;
var damage;

function setup() {
  createCanvas(1600,400);
  weight = Math.round(random(30,52));
  speed = Math.round(random(223,321));
  thickness = Math.round(random(22,83));

  bullet = createSprite(50, 200, 50, 2.5);
  bullet.velocityX = speed;
  bullet.shapeColor = 'white'
  wall = createSprite(1200, 200, thickness, height/2);
  
}

function draw() {
  background(0); 
  damage = (0.5 * weight * speed * speed) / thickness*thickness*thickness;
  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    if(damage<10){
      wall.shapeColor = 'green';
    }else{
      wall.shapeColor = 'red';
    }
  } 
  
  
  drawSprites();
}