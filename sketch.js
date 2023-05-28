var space,spaceImg
var spaceship,spaceshipImg

function preload(){
 spaceImg=loadImage("space.jpg")
spaceshipImg=loadImage("spaceship.png")
}

function setup() {
  createCanvas(700,650);
spaceship=createSprite(300,600)
spaceship.addImage(spaceshipImg)
spaceship.scale=0.6

}

function draw() {
  background(0);
  image(spaceImg,0,0,700,650);

  spaceship.x=World.mouseX
  if(spaceship.x<60){
    spaceship.x=60
  }

  if(spaceship.x > 650){
    spaceship.x=650
  }







  drawSprites();

}
















