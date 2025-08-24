//定义太阳高度和地平线自变量
let sunHeight;
let horizon=200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // background(0);
  
  //太阳跟随鼠标Y轴坐标
  sunHeight=mouseY;

  //背景变色条件
  if(sunHeight < horizon) {
    background("lightblue");
  } else {
    background(0)
  }

  //太阳
  fill("yellow");
  circle(200, sunHeight, 160);
  //地平线
  stroke("green");
  line(0,horizon,400,horizon);

  //草坪
  fill("green");
  if(sunHeight < horizon) {
    fill("rgba(81, 248, 125, 1)")
  }
  rect(0,horizon,400,200)
}
