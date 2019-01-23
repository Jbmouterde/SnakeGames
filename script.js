
// Button 
$("body > button").click(function(){
  location.reload();
  // $("body > div.instructions.cache1").slideToggle(1500);
});

$("body > header > button").click(function(){
    location.reload();
    // $("body > div.instructions.cache1").slideToggle(1500);
  });
  
  // $("body > div.instructions.cache1 > button.btn-default.btn-lg.posititonBtn").click(function(){
  //   location.reload();
    
  // });
  
  // FONCTION CONSTRUCTOR ENNEMY
  function Pipe (pipeImage,myX, myY, myW, myH) {
    this.pipeImage = pipeImage;
    this.x = myX;
    this.y = myY;
    this.width = myW;
    this.height = myH;
  }

  Pipe.prototype.drawMe = function () {
    ctx.drawImage(pipeImage,this.x, this.y += 1, this.width, this.height);
      ctx.strokeRect(pipeImage,0,300,240);

  };
  
  // COLLISION PARTS
  function getTop (obj) {
    return obj.y;
  }
  function getBottom (obj) {
    return obj.y + obj.height;
  }
  function getLeft (obj) {
    return obj.x;
  }
  function getRight (obj) {
    return obj.x + obj.width;
  }
  
  function collision (objA, objB) {
    return getBottom(objA) >= getTop(objB)    &&
           getTop(objA)    <= getBottom(objB) &&
           getRight(objA)  >= getLeft(objB)   &&
           getLeft(objA)   <= getRight(objB);
  }
  // WIN 
  function win(win){
    if(hero.y < 5 && hero.x === 465){
      window.location.href = "index.html"
    }
  }
  // COLLISION WITH THE BLOCKS
  function pipeCollision () {
    var hasCollided = false;
  
    allPipes.forEach(function (onePipe) {
      if (collision(hero, onePipe)){
        hasCollided = true;
        alert("GAME OVER!!! \n"  + " You stay alive for " + sec + "sec");
        window.location.href = "index.html"
        // updateStuff(); 
        // hero.x = 450;
        // hero.y = 530;
        // $("body > div.instructions.cache1 > div.plus > h2 > div:nth-child(1)").hide ();    
        }
    });
    return hasCollided;
  }
  
  // -----------------------------------------------------------------------------
  

//background 
  // var bg = new Image();
  // bg.src = "./images/back.png";
  // function initCanvas(){
  //   var ctx = document.getElementById('.gameCanvas').getContext('2d');
  //   var cW = ctx.canvas.width, cH = ctx.canvas.height;
  // function Background(){
  //   this.x = 0 , this.y = 0, this.w = bg.width , this.h = bg.height;
  //   this.render = function(){
  //     ctx.drawImage(bg, this.x-=3, 0);
  //     if(this.x <= 0){
  //       this.x = 0; 
  //     }
  //   }
  // }
  // var background = new Background();

  //   ctx.save();
  //   background.render();
  // }


  var canvas = document.querySelector(".gameCanvas");
  var ctx = canvas.getContext("2d");
  

  // hero 
  var heroImage = new Image();
  heroImage.src = "./images/d.png";
  var hero = {
    x: 200,
    y: 200,
    width: 60.40,
    height: 80.95,
    drawMe: function () {
      if (this.x <= 0) {
        this.x = 0;
      } else if (this.x >= innerWidth - this.width) {
        this.x = innerWidth - this.width;
      }
      if (this.x >= 960) {
        this.x = 960;
      } else if (this.x >= innerWidth - this.width) {
        this.x = innerWidth - this.width;
      }

      if (this.y >=519) {
        this.y = 519;
      } else if (this.y >= innerHeight - this.height) {
        this.y = innerHeight - this.height;
      }
      if (this.y <= 0) {
        this.y = 0;
      } else if (this.y >= innerHeight - this.height) {
        this.y = innerHeight - this.height;
      }
 
     
      ctx.drawImage(heroImage, this.x , this.y += 2 , this.width, this.height);
    }
  };


  // WIN IMAGE ; 

  // SCORE 
  var score = 0; 
  
  // Bonus 
  var bonusImage = new Image();
  bonusImage.src = "./images/z.png";
  var bonus = {
    x: 1000,
    y: 0,
    width: canvas.width ,
    height: canvas.height,
    drawMe: function () {
      ctx.drawImage(bonusImage, this.x -=1, this.y, this.width, this.height);
    },
    clearMe: function() {
      ctx.clearRect(bonusImage);
     }
  };
  
  
  var bonus2Image = new Image();
  bonus2Image.src = "./images/z.png";
  var bonus2 = {
    x: 0,
    y: 0,
    width: canvas.width ,
    height: canvas.height,
    drawMe: function () {
      ctx.drawImage(bonus2Image, this.x -=1, this.y, this.width, this.height);
    },
    clearMe: function() {
      ctx.clearRect(bonus2Image);
     }
  };
  
  ///////////////////////
  var pipeImage = new Image();
  pipeImage.src = "./images/dd.png";
  
  // ligne obstacle
  var allPipes = [
    //ligne 1
    new Pipe(pipeImage,100, 80, 30, 30),
    new Pipe(pipeImage,50, 80, 30, 30),
    new Pipe(pipeImage,200, 80, 30, 30),

    new Pipe(pipeImage,100, 200, 30, 30),
    new Pipe(pipeImage,50, 200, 30, 30),
    new Pipe(pipeImage,200, 200, 30, 30),

    new Pipe(pipeImage,10, 560, 30, 30),
    new Pipe(pipeImage,150, 560, 30, 30),
    new Pipe(pipeImage,100, 560, 30, 30),


    new Pipe(pipeImage,90, 80, 30, 30),
    new Pipe(pipeImage,40, 80, 30, 30),
    new Pipe(pipeImage,10, 80, 30, 30),

    new Pipe(pipeImage,10, 50, 30, 30),
    new Pipe(pipeImage,50, 50, 30, 30),
    new Pipe(pipeImage,20, 50, 30, 30),

    new Pipe(pipeImage,500, 150, 30, 30),
    new Pipe(pipeImage,500, 150, 30, 30),
    new Pipe(pipeImage,500, 150, 30, 30),

    new Pipe(pipeImage,0, 800, 30, 30),
    new Pipe(pipeImage,0, 800, 30, 30),
    new Pipe(pipeImage,0, 800, 30, 30),

    new Pipe(pipeImage,10, 560, 30, 30),
    new Pipe(pipeImage,150, 560, 30, 30),
    new Pipe(pipeImage,100, 560, 30, 30),
    // new Pipe(pipeImage,300, 80, 30, 30),


  
  ];
  
  function createStuff () {
    
    // clear old drawings from the entire canvas before drawing again
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.clearRect(0, 0, cW, cH);

  // CALL FONCTION WIN
   win(win);
    // DRAW BONUS
    bonus.drawMe();
    if (bonus.x <= -bonus.width) {
      bonus.x = canvas.width;
    }
    bonus2.drawMe();
    if (bonus2.x <= -bonus2.width) {
      bonus2.x = canvas.width;
    }
  // DRAW HERO
    hero.drawMe()

  // DRAW THE ENNEMIES
  allPipes.forEach(function (onePipe) {
    onePipe.x -= Math.floor(Math.random()* 5)
    onePipe.y -= Math.floor(Math.random()*3)

    // 
    onePipe.drawMe();
    if (onePipe.x <= -onePipe.width) {
      onePipe.x = canvas.width;
    }
    if (onePipe.y <= -onePipe.width) {
      onePipe.y = canvas.width;
    }
    // if (onePipe.y >= -onePipe.width) {
    //   onePipe.y = canvas.width;
    // }
  }); 
  
  
    // 
    requestAnimationFrame(function () {
      createStuff();
    });
  }
  
  
  function updateStuff () {
  //   // clear old drawings from the entire canvas before drawing again
  //  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // // CALL FONCTION WIN
  //  win(win);
  // // DRAW HERO
  //   hero.drawMe();
    
  //   // DRAW BONUS
  //   bonus.drawMe();
  //   bonus2.drawMe();
  //   bonus3.drawMe();
  // // DRAW THE ENNEMIES
  //   allPipes.forEach(function (onePipe) {
      
  //     onePipe.x -= Math.floor(Math.random()*3.5);
  //     onePipe.drawMe();
  //     if (onePipe.x <= -onePipe.width) {
  //       onePipe.x = canvas.width;
  //     }
  //   });
  
    // COLLISION ENNEMY
  
    // pipeCollision()
   // COLLISION BONUS 
  //  if (collision(hero,bonus3) === true){
  //   bonus3.clearMe()
  // }
  //  if (collision(hero,bonus3) === false){
  //   bonus3.drawMe()
  // }
   
//   if (collision(hero,bonus2) === true){
//     bonus2.clearMe()
//     score += 50;
//     $("#compteur").text(score + "PTS" )
//   }
//    if (collision(hero,bonus2) === false){
//     bonus2.drawMe()
//   }
  // if (collision(hero,bonus3) === true){
  //   bonus3.clearMe()
  //   score += 50;
  //   $("#compteur").text(score + "PTS" )
  // }
  //  if (collision(hero,bonus3) === false){
  //   bonus3.drawMe()
  // }
  // if (collision(hero,bonus) === true){
  //   bonus.clearMe()
  // }
  //  if (collision(hero,bonus) === false){
  //   bonus.drawMe()
  // }
  
    requestAnimationFrame(function () {
      updateStuff()
    });
  }
  
  // start the drawing loop
  createStuff();
  updateStuff();
  
  
  // -----------------------------------------------------------------------------
  
  var body = document.querySelector("body");
  body.onkeydown = function () {
    // IF COLLISION ENNEMY
    if (pipeCollision()) {
      return;
    }
    // IF COLLISION BONUS 
  // if (collision(hero.x,bonus.x) && collision(hero.y, bonus.y)){
  //   bonus.clearMe()
  // }
  // if (collision(hero.x,bonus2.x) && collision(hero.y, bonus2.y)){
  //   bonus2.clearMe()
  //   score += 50;
  //   $("#compteur").text(score + "PTS" )
  // }
  // if (collision(hero,bonus3)){
  //   bonus3.clearMe()
  //   score += 50;
  //     $("#compteur").text(score + "PTS" )
      
  // }
  // COMMANDS  

  
    switch (event.keyCode) {
      // case 38: // up arrow
      //   hero.y -= 15;
      //   break;
        
      case 32: // space
        hero.y -= 50;
        break;

      // case 37: // left arrow
      //   hero.x -= 15;
      //   break;
     
      // case 40: // down arrow
      //   hero.y += 15;
      //   break;
      
      // case 39: // right arrow
      //   hero.x += 15;
      //   break;
    }
 //update hero's position on the screen 
 console.log( hero.x ,hero.y)
  };

  var sec = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  setInterval( function(){
      document.getElementById("seconds").innerHTML=pad(++sec%60);
      document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
  }, 1000);