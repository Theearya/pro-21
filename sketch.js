var bullet,wall,speed,weight,def



function setup() {
  createCanvas(800,400);
  bullet=createSprite(50, 200, 30, 10);
  wall=createSprite(700, 200, 60, 100);
  thickness=random(22,83);
  speed=random(223,321)
  weight=random(30,52)
  bullet.velocityX=speed
  
}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
  
    
    def=0.5*weight*speed*speed/(thickness*thickness*thickness)
    text(def,50,50)
    if(def>10){
      wall.shapeColor='red'
    }
    
    if(def<10){
      wall.shapeColor='green'
    }
  }  
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletEdge=bullet.x+bullet.width
  if (bulletEdge>=wall.x){
    return true
  }
  return false
}