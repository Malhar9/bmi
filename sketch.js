var fitimg ,fit
function preload(){
fitimg=loadImage("fitness.jpj")
}
function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  fit.createSprite(400,400,50,50)
  fit.addImage(fitimg)
  }


function draw() {
  background("black"); 

   
    drawSprites();


  } 
 
