//定义log
var log=function(x) {
  //console.log(x,console,arguments)
  console.log(x)
}
var i=1
while(i<5){
  log(i)
  i++
}
//练习1
//
var square=function(x,y,l){
  jump(x,y)
  for(i=0;i<4;i++){
  forward(l)
  right(90)
  }
}
square(-100,-100,50)

//练习2
//
var rect=function(x,y,w,h){
  jump(x,y)
  for(i=0;i<2;i++){
    forward(w)
    right(90)
    forward(h)
    right(90)
  }
}
rect(-100,-100,50,120)

//练习3
//
var rect=function(w,h){
//  jump(x,y)
  for(i=0;i<2;i++){
    forward(w)
    right(90)
    forward(h)
    right(90)
  }
}
var square5=function(x,y,w,h){
  jump(0,0)
  for(j=0;j<5;j++){
  rect(w,h)
  forward(w)
  }
}
square5(0,0,30,30)

//练习4
//
var rect=function(w,h){
//  jump(x,y)
  for(i=0;i<2;i++){
    forward(w)
    right(90)
    forward(h)
    right(90)
  }
}
var square5=function(x,y,w,h){
  jump(0,0)
  for(j=0;j<5;j++){
  rect(w,h)
  penup()
  forward(w+10)
  pendown()
  }
}
square5(0,0,30,30)

//练习5
//
var rect=function(w,h){
//  jump(x,y)
  for(i=0;i<2;i++){
    forward(w)
    right(90)
    forward(h)
    right(90)
  }
}
var square_line=function(x,y,n,space,l){
  jump(x,y)
  for(j=0;j<n;j++){
  rect(l,l)
  penup()
  forward(l+space)
  pendown()
  }
}
var x=-120
var y=-120
var n=3
var space=10
var l=50
square_line(x,y,n,space,l)

//练习6
//
var rect=function(w,h){
//  jump(x,y)
  for(i=0;i<2;i++){
    forward(w)
    right(90)
    forward(h)
    right(90)
  }
}
var square_line=function(x,y,n,space,l){
  jump(x,y)
  for(j=0;j<n;j++){
  rect(l,l)
  penup()
  forward(l+space)
  pendown()
  }
}
var square_sqr=function(x,y,space,l,n,m){
  var line_y=0
  for(k=0;k<m;k++){
    line_y=y+k*(l+space)
    square_line(x,line_y,n,space,l)
  }
}
var x=-120
var y=-120
var space=5
var l=30
var n=3
var m=4
square_sqr(x,y,space,l,n,m)

//练习7
//
var rect=function(w,h){
//  jump(x,y)
  for(i=0;i<2;i++){
    forward(w)
    right(90)
    forward(h)
    right(90)
  }
}
var rect_line=function(x,y,w,h,n,space){
  jump(x,y)
  for(j=0;j<n;j++){
  rect(w,h)
  penup()
  forward(w+space)
  pendown()
  }
}
var x=-120
var y=-120
var n=3
var space=10
var w=20
var h=35
rect_line(x,y,w,h,n,space)

//练习8
//
var rect=function(w,h){
//  jump(x,y)
  for(i=0;i<2;i++){
    forward(w)
    right(90)
    forward(h)
    right(90)
  }
}
var square_line=function(x,y,n,space,w,h){
  jump(x,y)
  for(j=0;j<n;j++){
  rect(w,h)
  penup()
  forward(w+space)
  pendown()
  }
}
var rect_sqr=function(x,y,space,w,h,n,m){
  var line_y=0
  for(k=0;k<m;k++){
    line_y=y+k*(h+space)
    square_line(x,line_y,n,space,w,h)
  }
}
var x=-120
var y=-120
var space=5
var n=3
var m=5
var w=25
var h=15
rect_sqr(x,y,space,w,h,n,m)

//练习9
//
var polygon=function(x,y,n,l){
  jump(x,y)
  for(i=0;i<n;i++){
  forward(l)
  right(360/n)
  }
}
polygon(-100,-100,5,50)

//练习10
//
var circle=function(x,y,r,n){
  var side=6.28*r/n
  jump(x-side/2,y-r)
  for(i=0;i<n;i++){
  forward(side)
  right(360/n)
  }
}
circle(-50,-50,50,36)
