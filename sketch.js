// Melinda Buckner Copyright 2016
var recti = 0;
var bbi = 0;
var bdi = 0;
var bfi = 0;
var fi = 0;
var di = 0;
var bi = 0;
var i = 0
var actualTime;
var loadTime;
var once =1;
var mySound;

function setup(){
  frameRate(60)
  createCanvas(1000,700);
  noCursor()
  mySound = loadSound('sound/15 The Shawl.mp3', playMusic)

}

function playMusic(){
  loadTime = millis();
  mySound.play();
}

var e1r = 1;
var e2r = 1;
var fl = 1000;
var fl2 = 1000;
var fl3 = 1000;
var fl4 = 1000;

function draw(){

  actualTime = millis() - loadTime;
  println(actualTime);

  background(255,240,70);

  noStroke();
  fill(255)
  ellipse(width/2,height/2, 200,200);

  push();
  translate(0,700);
  fill(0,230,200);
  noStroke();
  rect(-1,recti,1000,700)
  recti = recti-0.02;
  pop();

  push();
  translate(0,700);
  fill(0,150,100);
  noStroke();
  rect(-5,bbi,490,8000);
  bbi = bbi-0.15;

  translate(522,0,200,0);
  fill(0,150,100);
  noStroke();
  rect(-5,bbi,490,8000);
  bbi = bbi-0.15;
  pop();

  push();
  translate(0,700);
  fill(0,115,60);
  noStroke();
  rect(-5,bdi,460,8000);
  bdi = bdi-0.3;

  translate(552,0,200,0);
  fill(0,115,60);
  noStroke();
  rect(-5,bdi,460,8000);
  bdi = bdi-0.3;
  pop();

  push();
  translate(0,700);
  fill(0,75,10);
  noStroke();
  rect(-5,bfi,440,8000);
  bfi = bfi-0.6;

  translate(571,0,200,0);
  fill(0,75,10);
  noStroke();
  rect(-5,bfi,440,8000);
  bfi = bfi-0.6;
  pop();

  push();
  translate(0,700);
  fill(75,50,0);
  noStroke();
  rect(-5,fi,425,8000);
  fi = fi-0.8;

  translate(585,0,300,0);
  fill(75,50,0);
  noStroke();
  rect(-5,fi,425,8000);
  fi = fi-0.8;
  pop();

  push();
  translate(0,700);
  fill(220,180,0);
  noStroke();
  rect(-5,di,400,6000);
  di = di-0.5;

  translate(610,0,500,0);
  fill(220,180,0);
  noStroke();
  rect(-5,di,400,6000);
  di = di-0.5;
  pop();

  push();
  translate(0,700);
  fill(255,204,0);
  noStroke();
  rect(-5,bi,350,5000);
  bi = bi-0.2;

  translate(660,0,500,0);
  fill(255,204,0);
  noStroke();
  rect(-5,bi,350,5000);
  bi = bi-0.2;
  pop();

  push();
  translate(0,700);
  fill(255,255,100);
  noStroke();
  rect(-10,i,300,2500);
  i = i-0.1;

  translate(720,0,600,0);
  fill(255,255,100);
  noStroke();
  rect(-10,i,300,2500);
  i = i-0.1;
  pop();

  //transitioning ellipses

  if(actualTime > 50 && actualTime < 10000){
    fill(255);
    noStroke();
    e1r = e1r * 1.1;
    ellipse(e1r, 100, e1r);
  }
  if(actualTime > 70 && actualTime < 10000){
    fill(255,255,255,99);
    noStroke();
    e2r = e2r * 1.08;
    ellipse(e2r, 50, e2r);
  }


  //flute rects
  if(actualTime > 16000 && actualTime < 60000){
    fill(220,255,100,99);
    rect(fl,500,800,120,60);
    fl = fl-1
  }
  if(actualTime > 26000 && actualTime < 60000){
    fill(220,250,50,99);
    rect(fl2,600,600,100,50)
    fl2 = fl2-1
  }

  if(actualTime > 43000 && actualTime < 60000){
    fill(245,255,130,99);
    rect(fl3,450,800,150,75)
    fl3 = fl3-1
  }
  if(actualTime > 33000 && actualTime < 60000){
    fill(230,255,100,99);
    rect(fl4,500,1000,200,100)
    fl4 = fl4-1
  }


  //zither ellipses
      if(actualTime > 3500 && actualTime < 3600){
        fill(200,220,15)
        ellipse(500, 500, 25);
      }
      if(actualTime > 3600 && actualTime < 3700){
        fill(235,255,50)
        ellipse(500, 500, 50);
      }

  if(actualTime > 4000 && actualTime < 4100){
    fill(200,220,15)
    ellipse(500, 600, 25);
  }
  if(actualTime > 4100 && actualTime < 4200){
    fill(235,255,50)
    ellipse(500, 600, 50);
  }
  if(actualTime > 4200 && actualTime < 4400){
    fill(245,255,50,40)
    ellipse(500, 600, 75);
  }
    if(actualTime > 5200 && actualTime < 5300){
      fill(200,220,15)
      ellipse(500, 450, 25);
    }
    if(actualTime > 5300 && actualTime < 5500){
      fill(235,255,50)
      ellipse(500, 450, 50);
    }
  if(actualTime > 6300 && actualTime < 6400){
    fill(200,220,15)
    ellipse(500, 600, 25);
  }
  if(actualTime > 6400 && actualTime < 6600){
    fill(235,255,50)
    ellipse(500, 600, 50);
  }
    if(actualTime > 7000 && actualTime < 7100){
      fill(200,220,15)
      ellipse(500, 400, 25);
    }
    if(actualTime > 7100 && actualTime < 7300){
      fill(235,255,50)
      ellipse(500, 400, 50);
    }
    if(actualTime > 10000 && actualTime < 10100){
      fill(200,220,15)
      ellipse(500, 50, 25);
    }

    if(actualTime > 10100 && actualTime < 10200){
        fill(235,255,50)
        ellipse(500, 50, 50);
      }
    if(actualTime > 10200 && actualTime < 10300){
        fill(245,255,50,20)
        ellipse(500, 50, 75);
      }
  if(actualTime > 11000 && actualTime < 11100){
    fill(200,220,15)
    ellipse(500, 150, 25);
  }
  if(actualTime > 11100 && actualTime < 11200){
    fill(235,255,50)
    ellipse(500, 150, 50);
  }
  if(actualTime > 12500 && actualTime < 12600){
    fill(200,220,15)
    ellipse(500, 200, 25);
  }
  if(actualTime > 12600 && actualTime < 12700){
    fill(235,255,50)
    ellipse(500, 200, 50);
  }
  if(actualTime > 13000 && actualTime < 13100){
    fill(200,220,15)
    ellipse(500, 350, 25);
  }
  if(actualTime > 13100 && actualTime < 13200){
      fill(235,255,50)
      ellipse(500, 350, 50);
    }
    if(actualTime > 13200 && actualTime < 13300){
        fill(245,255,50,40)
        ellipse(500, 350, 75);
      }
    if(actualTime > 13300 && actualTime < 13600){
        fill(255,255,50,20)
        ellipse(500, 350, 100);
      }
  if(actualTime > 16000 && actualTime < 16100){
          fill(200,220,15)
          ellipse(500, 300, 25);
        }
  if(actualTime > 16100 && actualTime < 16200){
          fill(235,255,50)
          ellipse(500, 300, 50);
        }
  if(actualTime > 16200 && actualTime < 16300){
          fill(245,255,50,40)
          ellipse(500, 300, 75);
        }
  if(actualTime > 19400 && actualTime < 19500){
                fill(200,220,15,80)
                ellipse(500, 350, 25);
              }
  if(actualTime > 19500 && actualTime < 19600){
                fill(235,255,50,50)
                ellipse(500, 350, 50);
              }
  if(actualTime > 31200 && actualTime < 31300){
                fill(200,220,15)
                ellipse(500, 350, 25);
              }
  if(actualTime > 31300 && actualTime < 31400){
                fill(235,255,50)
                ellipse(500, 350, 50);
              }
  if(actualTime > 31400 && actualTime < 31600){
                fill(245,255,50,40)
                ellipse(500, 350, 75);
              }
  if(actualTime > 35100 && actualTime < 35200){
          fill(200,220,15)
          ellipse(500, 350, 25);
        }
  if(actualTime > 35200 && actualTime < 35500){
          fill(235,255,50)
          ellipse(500, 350, 50);
          }
  if(actualTime > 36000 && actualTime < 36100){
          fill(200,220,15)
          ellipse(500, 50, 25);
        }
  if(actualTime > 36100 && actualTime < 36200){
          fill(235,255,50)
          ellipse(500, 50, 50);
        }
        if(actualTime > 36200 && actualTime < 36400){
          fill(245,255,50,40)
          ellipse(500, 50, 75);
        }
  if(actualTime > 36900 && actualTime < 37000){
          fill(200,220,15)
          ellipse(500, 300, 25);
        }
  if(actualTime > 37000 && actualTime < 37300){
          fill(235,255,50,80)
          ellipse(500, 300, 50);
        }
}

// var pauseTime = 0;

function mouseReleased(){
  if(once == 1) {
  mySound.pause();
  // actualTime = pauseTime;
  once = 0
  } else {
  mySound.play();
  once = 1
  }
}
