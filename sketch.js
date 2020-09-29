
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage,ground,groundIMG;
var FoodGroup, obstacleGroup,food,obstacle;
var survivalTime;
var bananaGroup, obstacleGroup;

var gameState = 1;

function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundIMG = loadImage("ground2.png")
 
}



function setup() {
  createCanvas(500,500);
  
  monkey = createSprite(200,200,20,20); 
  monkey.addAnimation("Run",monkey_running);
  monkey.scale = 0.2;
 
  
  ground = createSprite(250,450,500,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.addImage(groundIMG)

  bananaGroup = createGroup();
    obstacleGroup = createGroup();
  

}


function draw() {
  background("lightblue");

  if(gameState == 1){
  
  if(keyDown("space") && monkey.y>382.5){
   monkey.velocityY = -15
  }
  monkey.velocityY = monkey.velocityY + 0.5
  
  monkey.collide(ground);
  
  if(ground.x<0){
   ground.x = ground.width/2 
  }
  
  survivalTime = ceil(frameCount/frameRate())
  
    stroke("black")
  textSize(20);
  fill("black")
  text("Survival Time: "+survivalTime,100,50);
  
    if(monkey.isTouching(obstacleGroup)){
     gameState = 0; 
    }
    
     if(monkey.isTouching(bananaGroup)){
food.lifetime = 0;
     }
    
foods();  
  obstacles();
    
      drawSprites()

  }
  
  
}

function foods(){
 if(frameCount%80 === 0){
   food = createSprite(500,Math.round(random(120,200)),20,20);
   food.velocityX = -4;
       food.addImage(bananaImage)
food.scale = 0.2;
   food.lifetime = 140;
   bananaGroup.add(food);
 }
}

function obstacles(){
  if(frameCount%300 === 0){
   obstacle = createSprite(500,430,20,20);
       obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.3
       obstacle.lifetime = 140;
       obstacleGroup.add(obstacle);


  }
}




