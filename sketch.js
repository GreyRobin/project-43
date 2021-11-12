var iss, spacecraft
var spaceimg1, spaceimg2, spaceimg3, spaceimg4, bgimg, issimg
var hasdocked = false

function preload(){
spaceimg1 = loadImage("spacecraft1.png")
spaceimg2 = loadImage("spacecraft2.png")
spaceimg3 = loadImage("spacecraft3.png")
spaceimg4 = loadImage("spacecraft4.png")
bgimg = loadImage("spacebg.jpg")
issimg = loadImage("iss.png")
}

function setup() {
  createCanvas(800,400);
  spacecraft = createSprite(285, 240);
  iss = createSprite(330, 130)
  spacecraft.addImage(spaceimg1)
  iss.addImage(issimg)
  spacecraft.scale = 0.15
  iss.scale = 0.25

}

function draw() {
  background(bgimg);  
  spacecraft.addImage(spaceimg1)
  if(!hasdocked){
    spacecraft.x = spacecraft.x+random(-1,1)
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spaceimg3)
    spacecraft.x = spacecraft.x-1
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft.addImage(spaceimg4)
    spacecraft.x = spacecraft.x+1
  }
  if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(spaceimg2)
  }
  if(keyDown(UP_ARROW)){
    spacecraft.y = spacecraft.y-2
  }
  
  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    hasdocked = true
    textSize(20)
    stroke("red")
    fill("red")
    text("Docking Successful!",500,200)
  }
  drawSprites();
}