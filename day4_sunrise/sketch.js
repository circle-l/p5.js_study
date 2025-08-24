//太阳高度变量
let sunHeight=600;//初始值在地平线下

//颜色变量
let redVal=0;
let greenVal=0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background(220);

  //背景rg设置为跟随变量，b设置为0
  background(redVal, greenVal, 0);

  //太阳
  strokeWeight(0);
  fill(255,135,5,60);
  circle(300,sunHeight,100);
  fill(255,100,0,100);
  circle(300,sunHeight,140);

  //mountains
  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110,95,20);
  triangle(200,400,520,253,350,400);  

  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400); 

  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);

// 如果sunHeight小于130，就通过改变它来让太阳移动
if (sunHeight>130) {
  sunHeight-=2;

  //嵌套条件写法
  // if (sunHeight<480){
  //   redVal+=4;
  //   greenVal++;
  // }
}

// 改变颜色变量
// if(sunHeight<480) {
//   redVal+=4;
//   greenVal+=1;
// }

//逻辑与写法
if (sunHeight>130 && sunHeight<480) {
  redVal+=4;
  greenVal++;
}

if(mouseIsPressed == true && sunHeight ===130) {
  background(0);
  sunHeight=600;
}
}
