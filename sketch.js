var bg,bgImg;
var saver,saverImg;
var enemy1,enemy2, enemy3, enemy4;
var enemy1Img,enemy2Img,enemy3Img,enemy4Img
var wall1
var edges;
function preload(){
    enemy1Img = loadImage("enemyBLACK_1.png")
    enemy2Img = loadImage("enemyBLUE4_1.png")
    enemy3Img = loadImage("enemyGREEN2_1.png")
    enemy4Img = loadImage("enemyRED5_1.png")
    bgImg = loadImage("back.png")
    saverImg = loadImage("ship.png")
}

function setup(){
    createCanvas(400,400)
    
    bg = createSprite(0,0,400,400);
    bg.scale = 2;
    saver = createSprite(208,288);
    saver.scale = 0.2;
        enemy1 = createSprite(365,147,10,10);
        enemy1.addImage(enemy1Img)
 enemy2 = createSprite(50,136,10,10);
 enemy2.addImage(enemy2Img)
 enemy3 = createSprite(150,115,10,10);
 enemy3.addImage(enemy3Img)
 enemy4 = createSprite(290,119,10,10);
 enemy4.addImage(enemy4Img)
enemy1.scale = 0.6;
enemy2.scale = 0.6;
enemy3.scale = 0.6;
enemy4.scale = 0.6;
enemy1.debug = true;
wall1 = createSprite(200,396,400,10);
wall1.visible = false;

}
function draw() {
  background("black");
 enemy1.velocityY = 4;
  enemy2.velocityY = 4;
  enemy3.velocityY = 4;
  enemy4.velocityY = 4;
  saver.velocityY = -4;

 enemy1.bounceOff(wall1)
   drawSprites();
}