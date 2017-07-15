/*
-------------------------------
// MoveAway Game
// Author: Nguyễn Việt Hưng
// Version: 2.8.2
-------------------------------
Copyright 2017 Nguyễn Việt Hưng
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
var player;
var blocks = [];
var maxOfBlocks;
var score;
var beginToPlay = true;
var maxSpeed = 20;
function setup(){
  createCanvas(windowWidth, windowHeight);
  maxOfBlocks = width / 30;
  resetStart();
  //block = new Block();
  blocks.forEach((item)=>{
    item.move = false;
  });
  score.run = false;
  player.canMove = false;
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  maxOfBlocks = width / 30;
}
function resetStart(){
  player = new Circle();
  score = new scoreText();
  var x = 20;
  blocks.length = 0;
  for(var i = 0; i < maxOfBlocks; i++)
  {
    blocks.push(new Block(x));
    x+=50;
  }
}

function draw(){
  background(51);
  player.show();
  score.show();
  if(beginToPlay){
    showMSG("Hit space to begin !");
  }
  if(blocks.length == 0){
    showMSG("you win !");
  }
  for(var i = 0; i < blocks.length; i++)
  {
    blocks[i].fall();
    blocks[i].show();
    var obj = {
      x:player.x,
      y:player.y,
      d:player.d
    };
    if(blocks[i].hit(obj)){
      if(blocks[i].color == "#e74c3c"){
        blocks.forEach((item)=>{
          item.move = false;
        });
        score.run = false;
        showMSG("you lose !");
        player.canMove = false;
      }
      else{
        blocks.splice(i, 1);
        blocks.forEach((item)=>{
          item.speed += (maxSpeed - 8) / maxOfBlocks;
        });
        if(score.run){
          score.score += 1;
        }
      }
    }
  }
  if(keyIsDown(LEFT_ARROW)){
    player.move("left");
  }
  else if(keyIsDown(RIGHT_ARROW)){
    player.move("right");
  }
  else if(keyIsDown(UP_ARROW)){
    player.move("up");
  }
  else if(keyIsDown(DOWN_ARROW)){
    player.move("down");
  }
  else if(keyIsDown(16)){
    player.speed = 20;
  }
  else{
    player.speed = 7;
  }
}

function scoreText(){
  this.score = 0;
  this.run = true;
  this.show = function(){
    textSize(20);
    text("Score:" + floor(this.score), 10, 30);
    text("Balls:" + blocks.length, width - 100, 30);
  }
}

function keyPressed(){
  if(keyCode == 32){
    if(!score.run){
      resetStart();
      beginToPlay = false;
    }
  }
}

function showMSG(texts){
  if(texts == "you win !"){
    fill('#3498db');
    textSize(30);
    rect(0, (height - 80) / 2, width, 80);
    fill(255);
    text(texts, (width - textWidth(texts)) / 2, height / 2);
    textSize(20);
    text("press space to play again !", (width - textWidth("press space to try again !")) / 2, (height + 60) / 2)
  }
  else if(texts == "you lose !"){
    fill('#e74c3c');
    textSize(30);
    rect(0, (height - 80) / 2, width, 80);
    fill(255);
    text(texts, (width - textWidth(texts)) / 2, height / 2);
    textSize(20);
    text("press space to try again !", (width - textWidth("press space to try again !")) / 2, (height + 60) / 2)
  }
  else{
    fill('#3498db');
    textSize(30);
    rect(0, (height - 80) / 2, width, 80);
    fill(255);
    text(texts, (width - textWidth(texts)) / 2, height / 2);
  }
}
