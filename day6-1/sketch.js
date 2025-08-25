// 颜色变量
let redVal=0;
let greenVal=0;

// 太阳位置变量
let sunHeight=600; //初始值在地平线下

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  // 调起函数
  sky();
  sun();
  mountains();
  // 调起两颗树
  // tree(150,320,10)
  // tree(210,320,10)
  // 调起一排树
  trees();
}

// 定义天空函数
function sky() {
  background(redVal, greenVal,0);
  if (sunHeight > 130) {
        redVal += 4;
        greenVal += 1;
    } else {
        redVal -= 4;
        greenVal -= 1;
    }
}

// 定义太阳函数
function sun() {
  fill(255, 135, 5, 60);
  circle(300, sunHeight, 180);
  fill(255, 100, 0, 100);
  circle(300, sunHeight, 140);

  if (sunHeight > 130) {
        sunHeight -= 2;
    } else if (sunHeight < 500) {
        sunHeight += 2;
      } 
}

// 定义山函数
function mountains() {
  fill(110, 50, 18);
  triangle(200,400,520,253,800,400);
  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(100,50,12);
  triangle(-100,400,150,200,0,400);
  fill(120,80,50);
  triangle(200,400,450,250,300,400);
}

//定义树函数
function tree(x,y,size) {
  fill(80,30,20);
  rect(x-size,y,size*2,size*6);
  fill(20,130,5);
  triangle(x-size*3,y,x,y-size*8,x+size*3,y)
}

// 定义树的xy相对位置函数
function treeLine(x) {
  let y=-0.7*x+450;
  return y;
}
function trees() {
  // 第一棵
  x=150;
  y=treeLine(x);
  tree(x,y,5);

  // 第二棵
  x=180;
  y=treeLine(x);
  tree(x,y,5);

  // 第三棵
  x=210;
  y=treeLine(x);
  tree(x,y,5);
}

// function keyPressed() {
//   redVal=0;
//   greenVal = 0;
//   sunHeight = 600;
// }