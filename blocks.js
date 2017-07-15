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
function Block(pos_x){
  this.d = 50;
  this.x = pos_x;
  this.y = random(0, -height);
  this.speed = 8;
  this.colorList = ["#2ecc71", "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c", "#e74c3c", "#9b59b6", "#3498db", "#e67e22", "#f1c40f"];
  this.color = random(this.colorList);
  this.move = true;
  //this.angle = random(0, 180);

  this.show = function(){
    fill(this.color);
    noStroke();
    //rotate(this.angle);
    ellipse(this.x,this.y,this.d,this.d);
  }

  this.fall = function(){
    if(this.move){
      this.y += this.speed;
      //this.speed += 0.009;
      //this.d += 0.001;
      if(this.y > height){
        this.y = random(0, -height);
        this.x = random(0, width);
        this.color = random(this.colorList);
      }
    }
  }

  this.hit = function(obj){
    if(dist(obj.x, obj.y, this.x, this.y) < obj.d / 2 + this.d / 2){
      //this.color = 'white';
      return true;
    }
    else{
      return false;
    }
  }
}
