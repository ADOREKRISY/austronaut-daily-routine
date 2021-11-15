var austronaut
var bgimg
var moveimg
var sleepimg
var gymimg
var eatimg
var drinkimg
var brushimg
var bathimg

var edges


function preload (){
bgimg = loadImage("images/iss.png")
sleepimg = loadImage("images/sleep.png")
moveimg = loadAnimation("images/move1.png","images/move2.png")
gymimg = loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
eatimg = loadAnimation("images/eat1.png","images/eat2.png")
drinkimg = loadAnimation("images/drink1.png","images/drink2.png")
brushimg = loadImage("images/brush.png")
bathimg = loadAnimation("images/bath1.png","images/bath2.png")
}



function setup (){
createCanvas(600,500)
austronaut = createSprite(300,230)
austronaut.addAnimation("sleeping",sleepimg)
austronaut.scale=0.1
}



function draw(){
background(bgimg)
drawSprites()
textSize(20)
fill("white")
text("intructions;",20,35)
textSize(15)
text("down arrow=gyming",20,70)
text("left arrow=eating",20,85)
text("right arrow=bathing",20,100)
text("q key=moving",20,115)
text("w key=drinking",20,130)
text("up arrow=brushing",20,55)

edges=createEdgeSprites()
austronaut.bounceOff(edges)

if (keyDown("UP_ARROW")){
austronaut.addAnimation("brushing",brushimg)
austronaut.changeAnimation("brushing")
austronaut.y=350
austronaut.velocityX=0
austronaut.velocityY=0
}


if (keyDown("DOWN_ARROW")){
  austronaut.addAnimation("gyming",gymimg)
  austronaut.changeAnimation("gyming")
  austronaut.y=350
  austronaut.velocityX=0
  austronaut.velocityY=0
  }

  if (keyDown("LEFT_ARROW")){
    austronaut.addAnimation("eating",eatimg)
    austronaut.changeAnimation("eating")
    austronaut.y=350
    austronaut.x=150
    austronaut.velocityX=0.5
    austronaut.velocityY=0.5
    }

    if (keyDown("RIGHT_ARROW")){
      austronaut.addAnimation("bathing",bathimg)
      austronaut.changeAnimation("bathing")
      austronaut.y=300
      austronaut.velocityX=0
      austronaut.velocityY=0
      }

      if (keyDown("q")){
        austronaut.addAnimation("moving",moveimg)
        austronaut.changeAnimation("moving")
        austronaut.velocityX=1
        austronaut.velocityY=1
        }

        if (keyDown("w")){
          austronaut.addAnimation("drinking",drinkimg)
          austronaut.changeAnimation("drinking")
          austronaut.y=350
          austronaut.velocityX=0
          austronaut.velocityY=0
          }
}
