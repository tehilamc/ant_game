


// var canvas = document.createElement("canvas");
// document.body.appendChild(canvas);
// var ctx = canvas.getContext("2d");
// ctx.font = "150px Arial";
// ctx.fillText("Hello World",10,5);
var canvas = document.getElementById("canvas");
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
ctx.font = "130px Ariel";
ctx.fillStyle = "red";
ctx.textAlign = "center";
ctx.fillText("Hello World", canvas.width/2, canvas.height/2);


var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var w = window;
var requestAnimFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;

//colors
var colors = ["#a8c0fc", "#a8fbfc", "#fceca8", "#ff9b9b", "#d8fca8"];
var colorCounter = 0;

//array of particules
var circles = [];

//object particule
function Shape() {
  this.init = function (x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    if (colorCounter <= 4) {
      colorCounter++;
    } else {
      colorCounter = 0;
    }

    //velocity
    this.vx = Math.random() * 2;
    this.vy = 2 + Math.random() * 20;
  };

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  };
}

for (var i = 0; i < 500; i++) {
  var circle = new Shape();
  circle.init(
    Math.floor(Math.random() * W),
    Math.floor(Math.random() * H),
    5,
    colors[colorCounter]
  );
  circles.push(circle);
}

function main() {
  update();
  render();
  requestAnimFrame(main);
}

function render() {
  for (var i = circles.length - 1; i >= 0; i--) {
    circles[i].draw();
  }
}

function update() {
  ctx.clearRect(0, 0, W, H);

  //reset particules
  for (var i = circles.length - 1; i >= 0; i--) {
    circles[i].x += circles[i].vx;
    circles[i].y += circles[i].vy;

    if (circles[i].x > W + circles[i].radius) {
      circles[i].x = 0 - circles[i].radius;
    } else if (circles[i].y > H + circles[i].radius) {
      circles[i].y = 0 - circles[i].radius;
    } else if (circles[i].y < 0 - circles[i].radius) {
      circles[i].y = H + circles[i].radius;
    } else if (circles[i].x < 0 - circles[i].radius) {
      circles[i].x = W + circles[i].radius;
    }
  }
}
function delay() {window.location= "enter.html";}
main();




// var c = document.getElementById("canv");
// var $ = c.getContext("2d");
// c.width = window.innerWidth;
// c.height = window.innerHeight;

// var px = 0;
// var py = 0;
// var blend = 100;

// function splotch(x, y, r, col) {
//   $.fillStyle = 'rgba(' + col.r + ', ' + col.g + ', ' + col.b + ', ' + col.a + ')';
//   $.beginPath();
//   $.arc(x, y, r, 0, Math.PI * 2, false);
//   $.fill();
// }

// function bleed(px, py, pr, pcol) {
//   var i = 0;
//   var x = px;
//   var y = py;
//   var r = pr;
//   var col = pcol;

//   function inv(){
//     window.requestAnimationFrame(inv);
//     splotch(x, y, r * (i / blend), col);
//     if (i == blend) window.cancelAnimationFrame(inv);
//     i++;
//   }
//   inv();
// }
// function anim() {
//   window.requestAnimationFrame(anim);
//   var px = Math.floor(Math.random() * c.width);
//   var py = Math.floor(Math.random() * c.height);
//   var pr = Math.floor(Math.random() * 50);
//   var pcol = {
//     r: Math.floor(Math.random() * 255),
//     g: Math.floor(Math.random() * 255),
//     b: Math.floor(Math.random() * 255),
//     a: 1 / blend
//   }
//   bleed(px, py, pr, pcol);
// }
// anim();

// /*___
// left click to reload | 
// right click to download image
// ___*/
// window.addEventListener('mousedown',function(e){
//   if(e.button==0)
//   document.location.href = document.location.href;
//   else if(e.button==2){
//      e.preventDefault();
//     var img = c.toDataURL("image/png");
//     var dl = document.createElement('a');
//     dl.href = img;
//     dl.download = "canvas.png";
//     var event = document.createEvent('MouseEvents');
//     event.initEvent( "click", true, false );
//     dl.dispatchEvent(event)
//   }
// },false);

// window.addEventListener('touchstart',function(e){
//   e.preventDefault();
//   document.location.href = document.location.href;
// },false);

// /*___Resize___*/
// window.addEventListener('resize',function(){
//   c.width = window.innerWidth;
//   c.height = window.innerHeight;
// }, false);


