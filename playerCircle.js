/*
-------------------------------
// Circle Game
// Author: Nguyễn Việt Hưng
// Version: 2.8.2
-------------------------------
Copyright 2017 Nguyễn Việt Hưng
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
function Circle(){
  this.d = 25;
  this.x = width / 2;
  this.y = height / 2;
  this.speed = 7;
  this.canMove = true;

  this.show = function(){
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.d, this.d);
  }

  this.move = function(dir){
    if(this.canMove){
      switch (dir) {
        case "left":
          this.x-=this.speed;
          if(this.x < 0){
            this.x = 0;
          }
          //console.log("left");
        break;
        case "right":
          this.x+=this.speed;
          if(this.x > width){
            this.x = width - this.d / 2;
          }
        break;
        case "up":
          this.y-=this.speed;
          if(this.y < 0){
            this.y = 0;
          }
        break;
        case "down":
          this.y+=this.speed;
          if(this.y > height){
            this.y = height - this.d / 2;
          }
        break;
      }
    }
  }
}
