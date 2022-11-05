

var hider, seeker;
var hiderImg, seekerImg;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12;
var gameState = "play";
var score = 0;
var target, targetImg;

function preload(){
hiderImg = loadImage("/assets/hider.png");
seekerImg = loadImage("/assets/seeker.png");
targetImg = loadImage("/assets/target.png")
}

function setup(){
  createCanvas(1100,1000)
   edges = createEdgeSprites();
  hider = createSprite(700,155,10,10)
  hider.addImage(hiderImg);
  hider.scale = 0.25;
  //hider.debug = true;
  hider.setCollider("circle",0,0,120);                   
  seeker = createSprite(700,800,10,10)
  seeker.addImage(seekerImg);
  seeker.scale = 0.25;
  //seeker.debug = true;
  seeker.setCollider("circle",0,0,120);  
  seeker.velocityX = Math.round(random(-1,10));
  seeker.velocityY = Math.round(random(-1,20));

  wall1 = createSprite(50,600,5,1000)
  wall2 = createSprite(570,100,1045,5);
  wall3 = createSprite(450,225,800,5);
  wall4 = createSprite(950,650,5,900);
  wall5 = createSprite(700,295,5,135);
  wall6 = createSprite(450,360,500,5);
  wall7 = createSprite(1090,548,5,900);
  wall8 = createSprite(425,480,750,5);
  wall9 = createSprite(210,630,5,300);
  wall10 = createSprite(798,630,5,300);
  wall11 = createSprite(570,778,450,5);
  wall12 = createSprite(600,850,5,150);

  target = createSprite(130,530,20,20)
  target.addImage(targetImg);
  target.scale = 0.25;
  
  
}

function draw(){
  background("lightgray")
  textSize(20)
  fill("Purple")
  text("Score: "+ score, 500,50);
  //text("x: "+ mouseX, 1000, 120);
 // text("y: "+ mouseY, 1000, 200);
  
  if(gameState === "play"){
    score = score + Math.round(getFrameRate()/30);
    if(keyDown(LEFT_ARROW)){
      hider.x -= 5;
    }
    if(keyDown(RIGHT_ARROW)){
      hider.x += 5;
    }
    if(keyDown(DOWN_ARROW)){
      hider.y += 5;
    }
    if(keyDown(UP_ARROW)){
      hider.y -= 5;
    }  
    if(hider.isTouching(wall1) ||
        hider.isTouching(wall2) ||
        hider.isTouching(wall3) ||
        hider.isTouching(wall4) ||
        hider.isTouching(wall5) ||
        hider.isTouching(wall6) ||
        hider.isTouching(wall7) ||
        hider.isTouching(wall8) ||
        hider.isTouching(wall9) ||
        hider.isTouching(wall10) ||
        hider.isTouching(wall11) ||
        hider.isTouching(wall12 ) 
    ){
        hider.x = 700;
        hider.y = 155;
    } 
    if(hider.isTouching(seeker)){
      gameState = "end";
    }
      }
      if(gameState === "end"){
        gameOver();
      }

      if(hider.isTouching(target)){
       gameState = "end"
         }

  
 

  
 
  seeker.bounceOff(edges);


  drawSprites();
  
}
function gameOver(){
  seeker.velocityX = 0;
  seeker.velocityY = 0;
  fill("Lime")
  text("Press Space To Restart", 545, 580);

  if(hider.isTouching(seeker)){
 
  textSize(40);
  fill("Red");
  text("Game Over!",545, 530);
  
 
  }
  if(hider.isTouching(target)){
    textSize(40);
    fill("green");
    text("You Won!", 545, 530); 
    
  }
  if(keyDown("SPACE")){
    gameState = "play";
    score = 0;
    seeker.x = 700;
    seeker.y = 800;
    seeker.velocityX = Math.round(random(-1,10));
    seeker.velocityY = Math.round(random(-1,20));

    hider.x = 700;
    hider.y = 155;
  }
}