class Game {
    constructor(){
    }

    hide(){
        form.startButton.hide();
        form.input.hide();
    }


    start(){
        this.hide()
        // this.characterSelect()
        background(bgImg);
        this.character();
        this.controls(); 
        this.enemies();
    }

  /*  characterSelect() {
        if (gameState == 1) {
            character_select = createSprite(width/2 + 300, height/2)
            character_select.addImage("ArrowSelect", Arrow_selectImg);    
            character_select.addImage("FlashSelect", Flash_selectImg);        
            character_select.addImage("SupergirlSelect", Supergirl_selectImg);
            character_select.addImage("FirestormSelect", Firestorm_selectImg);
            character_select.addImage("AtomSelect", Atom_selectImg);
            character_select.scale = 2;
        }
        drawSprites();
    }    */

character() {
    
sprite.collide (edges);
sword.collide(edges);
 
if (enemy && enemy2 && enemy3){
if(enemy.collide(sprite) || enemy2.collide(sprite) || enemy3.collide(sprite)) {
  
if (life>0) {
  life = life/1.5;
  sprite.position.x = width/2 - 120;
  sprite.position.y = height/2 + 200;
  count++
  }
}
}
this.showLife();

//console.log(life)

if (life <1)  {
  this.gameOver();
console.log("game over")
}

if (sword.isTouching(enemy)){
  enemy.position.x = width-40
  enemy.position.y = height/2
  enemyLife -= 1;
//  enemy.velocity.y =0 
  //enemy.velocity.x =random(-1,1)
console.log(enemyLife)
  if(enemyLife <= 0) {
    enemy.remove();
  }
}


drawSprites();

}

controls() {
    if(keyDown("UP_ARROW")) {
      sprite.changeImage ("character", spriteImg);
      sprite.scale = 0.7    
      sprite.setCollider("rectangle", 205, 0, 90, 400);
    
      sword.position.x = sprite.position.x;
      sword.position.y = sprite.position.y + 20;
      sprite.velocity.y -= 4;

    }
    sprite.velocity.y += 0.5;
    sword.position.x = sprite.position.x;
    sword.position.y = sprite.position.y + 20;

    if(keyDown("RIGHT_ARROW")) {

        sprite.position.x += 9;
        sword.position.x = sprite.position.x + 50;
        sword.position.y = sprite.position.y + 20;


    }

    if(keyDown("LEFT_ARROW")) {
        sprite.setCollider("rectangle", 0, 0, 90, 340);
        sprite.changeImage("left", spriteLeftImg);
        sprite.scale = 0.9
        sprite.position.x -= 9;
        sword.position.x = sprite.position.x - 10;
        sword.position.y = sprite.position.y + 20;


    }

}

    enemies () {
      if(enemy.position.x > width-30 || enemy.position.x < 20 ){
        enemy.velocity.x *= -1
        console.log(enemy.position.y)
      }
      
      if(enemy.position.y > height-30 || enemy.position.y < 20){
        enemy.position.y = height/2
      }

      if(enemy2.position.y > height-30 || enemy2.position.y < 20){
        enemy2.velocity.y *= -1
      }
    
      if(enemy3.position.y > height-30 || enemy3.position.y < 20){
        enemy3.velocity.y *= -1
      }
        
      
    }

    showLife() {
        push();
        image(lifeImage, width / 2 - 130, 400, 20, 20);
        fill("white");
        rect(width / 2 - 150,  150, 200, 20);
        fill("#f50057");
        rect(width / 2 - 150,  150, life, 20);
        noStroke();
        pop();
    }

    gameOver() {
      swal({
        title: `Game Over`,
        text: "You Died",
        imageUrl:
          "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
        imageSize: "100x100",
        confirmButtonText: "Thanks For Playing"
      });
    }
}