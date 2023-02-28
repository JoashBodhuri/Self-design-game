var player, form, game, playerTeam;
var character_select, sprite, enemy, enemy2, enemy3,
spriteImg, spriteLeftImg, enemyImg, enemy2Img;
var sword, enemyLife = 3, enemy2Life = 3, enemy3Life= 3;
var gameState=0;
var bgImg;
var life = 200;
var count = 0;


function preload(){
  /*Arrow_selectImg = loadImage("./assets/Arrow_select.png");
  Flash_selectImg = loadImage("./assets/Flash_select.png");
  Supergirl_selectImg = loadImage("./assets/Supergirl_select.png");
  Firestorm_selectImg = loadImage("./assets/Firestorm_select.png");
  Atom_selectImg = loadImage("./assets/Atom_select.png");*/
  bgImg = loadImage("./assets/bg.png");
  spriteImg= loadImage("./assets/sprite.png");
  spriteLeftImg = loadImage("./assets/sprite_left.png")
  enemyImg = loadImage("./assets/enemy.png");
  enemy2Img = loadImage("./assets/enemy2.png");
  lifeImage = loadImage("./assets/life.png")
}

function setup(){
  createCanvas(windowWidth, windowHeight);
 
  enemy2 = createSprite(width/2 + 300, height/2 + 10);
  enemy2.velocity.y = 5;
  enemy2.addImage("enemy", enemy2Img);
  enemy2.scale = 0.6
 
  enemy3 = createSprite(width/2 - 300, height/2+ 10);
  enemy3.velocity.y = -5;
  enemy3.addImage("enemy", enemy2Img);
  enemy3.scale = 0.6

  enemy = createSprite(width/2, height/2, 120, 30);
  enemy.velocity.x = 11;
  enemy.addImage("enemy", enemyImg);
  enemy.scale = 0.2
  
 
  sprite = createSprite(width/2 - 120, height/2+200);
  sprite.addImage ("character", spriteImg);
  sprite.addImage("left", spriteLeftImg)
  sprite.scale = 0.7    
  sprite.debug = true
  sprite.setCollider("rectangle", 205, 0, 90, 400);
  
  sword = createSprite(sprite.position.x - 5, sprite.position.y + 70, 170, 20);
 // sword.debug = true
  
  edges = createEdgeSprites()

  form = new Form()
  form.display() 
  
  game = new Game()
}

function draw(){

  if (gameState == 1) {
    game.start();
  }
  
//console.log(gameState)
}