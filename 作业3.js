// 16/09/20
// 作业 3
//
// 作业开始
// 注意, 作业中提到的颜色我们不关心

// 1
// 实现一个矩形函数
// x y 是矩形左上角坐标
// w h 是宽高
// rect(x, y, w, h)
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    for(var i = 0; i < 2; i++){
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}
rect(-100, -100, 30, 50)
// 2
// 实现一个矩形函数
// x y 是矩形中心的坐标
// w h 是宽高
// center_rect(x, y, w, h)
var log = function() {
    console.log.apply(console, arguments)
}
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    for(var i = 0; i < 2; i++){
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}
var center_rect = function(x, y, w, h) {
    var x1 = x - w / 2
    var y1 = y - h / 2
    rect(x1, y1, w, h)
}
center_rect(0, 0, 100, 50)
// 3
// 实现一个圆形函数
// x y 是圆心坐标
// r 是半径
// circle(x, y, r)
#
// 提示, 我们以正 36 边形为圆
var circle = function(x, y, r) {
    jump(x, y - r)
    setHeading(0)
    var n = 36
    len = 3.14159265359 * 2 * r / n
    for(var i = 0; i < n; i++) {
        forward(len)
        right(360 / n)
    }
}
circle(0, 0, 50)
// 4
// 实现一个五角星函数
// x y 是五角星横边左边坐标
// length 是一条线的长度
// wujcxy(x, y, length)
var wujcxy = function(x, y, len) {
    jump(x, y)
    setHeading(0)
    for(var i = 0; i < 5; i++) {
        forward(len)
        right(720 / 5)
    }
}
wujcxy(-100, -100, 50)
// 5
// 实现一个函数画日本国旗
// 调用 2 个函数画日本国旗
// 一个画背景的白色矩形
// 一个画中间的红色圆
// japan()
#
// 注意, 你可以添加 x y w h 参数让国旗画在任意地方, 任意尺寸
// 注意, 以下所有国旗同理
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    for(var i = 0; i < 2; i++){
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}
var center_rect = function(x, y, w, h) {
    var x1 = x - w / 2
    var y1 = y - h / 2
    rect(x1, y1, w, h)
}
var circle = function(x, y, r) {
    jump(x, y - r)
    setHeading(0)
    var n = 36
    len = 3.14159265359 * 2 * r / n
    for(var i = 0; i < n; i++) {
        forward(len)
        right(360 / n)
    }
}
var japan = function(x, y, w, h) {
    center_rect(x, y, w, h)
    circle(x, y, h * 0.25)
}
japan(0, 0, 100, 62)
// 6
// 实现一个函数画中国国旗(以下国旗题目都是如此 不重复了)
// 调用 2 个函数画中国国旗
// 一个画红色背景
// 另一个画五角星（调用 5 次，不要求角度朝向，只要5个五角星即可）
// china()
// 这个五角星是空的
var wujcxy = function(x, y, len, ang) {
    jump(x, y)
    setHeading(ang)
    var length = len * 1.55 / 4
    for (let i = 0; i < 5; i++) {
        forward(length)
        right(270 + 18)
        forward(length)
        right(180 - 36)
    }
}
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    for(var i = 0; i < 2; i++){
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}
//交叉五角星
/*var wujcxy = function(x, y, len, angle) {
    jump(x, y)
    setHeading(angle)
    for(var i = 0; i < 5; i++) {
        forward(len)
        right(720 / 5)
    }
}
*/
var china = function(x, y, w, h) {
    rect(x, y, w, h)
    var x1 = x + w / 15
    var y1 = y + h / 5
    var l1 = h / 3.5
    wujcxy(x1, y1, l1, 0)

    var l2 = l1 / 3
    var ang2 = 36 * 1.2
    var x2 = (x1 - x) * 2 + l1 +x
    var y2 = (y1 - y) / 2 + y
    wujcxy(x2, y2, l2, ang2)

    var ang2 = 36 * 0.6
    var x2 = x2 + l2
    var y2 = y2 + l2
    wujcxy(x2, y2, l2, ang2)

    var ang2 = 0
    var x2 = x2
    var y2 = y2 + l2 * 1.4
    wujcxy(x2, y2, l2, ang2)

    var ang2 = - 36 * 0.6
    var x2 = x2 - l2
    var y2 = y2 + l2
    wujcxy(x2, y2, l2, ang2)
}
china(-150, -100, 300, 200)
// 7
// 实现一个函数画法国国旗
// france()

// 8
// 画德国国旗
// germany()

// 9
// 画 冈比亚国旗
// gambia()

// 10
// 画 瑞士国旗
// switzerland()
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    for(var i = 0; i < 2; i++){
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}
var center_rect = function(x, y, w, h) {
    var x1 = x - w / 2
    var y1 = y - h / 2
    rect(x1, y1, w, h)
}
var men = function(a, b) {
    forward(a * b)
    right(90)
    forward(a)
    right(90)
    forward(a * b)
    right(270)
}
var switzerland = function(x, y, w) {
    a = w / 6
    center_rect(x, y, w, w)
    jump(x + a / 2, y - a / 2)
    for(var i = 0; i < 4; i++) {
        men(a, 1.35)
    }
}
switzerland(0, 0, 250)
// 11
// 画朝鲜国旗
// 分别是 圆 矩形 五角星
// 提示, 使用之前定义的函数
// northkorea()
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    for(var i = 0; i < 2; i++){
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}
var circle = function(x, y, r) {
    jump(x, y)
    setHeading(0)
    var n = 36
    len = 3.14159265359 * 2 * r / n
    for(var i = 0; i < n; i++) {
        forward(len)
        right(360 / n)
    }
}
/*交叉五角星
var wujcxy = function(x, y, len, angle) {
    jump(x, y)
    setHeading(angle)
    for(var i = 0; i < 5; i++) {
        forward(len)
        right(720 / 5)
    }
}
*/
var wujcxy = function(x, y, len, ang) {
    jump(x, y)
    setHeading(ang)
    var length = len * 1.55 / 4
    for (let i = 0; i < 5; i++) {
        forward(length)
        right(270 + 18)
        forward(length)
        right(180 - 36)
    }
}
var northkorea = function(x, y, h) {
    rect(x, y, h * 2, h)
    rect(x, y + 12 / 72 * h, h * 2, h * 2 / 72)
    rect(x, y + h - 12 / 72 * h, h * 2, h * 2 / 72)
    circle(x + h * 48 / 72, y + h * 20 / 72, h * 16 / 72)
    wujcxy(x + 3 + h * 48 / 72, y + h * 20.5 / 72, h * 29 / 72, 270 + 18)
}
northkorea(-150, -100, 150)
//画一个空心的五角星⭐️
var wujcxy = function(x, y, len, ang) {
    jump(x, y)
    setHeading(ang)
    var length = len * 1.55 / 4
    for (let i = 0; i < 5; i++) {
        forward(length)
        right(270 + 18)
        forward(length)
        right(180 - 36)
    }
}
kswujc(0, 0, 100, 0)
//美国国旗


var usa = function(x, y, h) {
    rect(x, y, b, h)
    rect(x, y, d, c)
    x1 = x + d
    for(var i = 0; i < 4; i++) {
        y1 = y + i * l * 2
        rect(x1, y1, b - d, l)
    }
    x2 = x
    for(var i = 0; i < 3; i++) {
        y2 = y + c + l + i * l * 2
        rect(x2, y2, b, l)
    }
    for(var j = 0; j < 6; j++) {
        x3 = x + g - k / 2 + 2 * g * j
        for(var i = 0; i < 5; i++) {
            y3 = y + e - p + i * 2 * e
            wujcxy(x3, y3, k, 0)
        }
    }
    for(var j = 0; j < 5; j++) {
        x4 = x + 2 * g - k / 2 + 2 * g * j
        for(var i = 0; i < 4; i++) {
            y4 = y + 2 * e - p + 2 * e * i
            wujcxy(x4, y4, k, 0)
        }
    }
}
var wujcxy = function(x, y, len, ang) {
    jump(x, y)
    setHeading(ang)
    var length = len * 1.55 / 4
    for (let i = 0; i < 5; i++) {
        forward(length)
        right(270 + 18)
        forward(length)
        right(180 - 36)
    }
}
var rect = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    for(var i = 0; i < 2; i++){
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}
setDelay(0)
setPenSize(1)
h = 150
b = 2 * h
c = 0.54 * h
d = 0.76 * h
e = 0.0538 * h
g = 0.0633 * h
k = 0.0616 * h
l = 0.0769 * h
p = 0.1 * k
usa(-150, -100, h)
hide()
//涂色三角***************************************
var fill = function(x1, y1, x2, y2, x3, y3) {
    setDelay(0)
    jump(x1, y1)
    goto(x2, y2)
    goto(x3, y3)
    var n = 0.5*Math.sqrt((x2 - x1)*(x2 - x1) + (y2-y1)*(y2-y1))
    console.log(n)
    for(var i = 0; i < n; i++) {
        var x4 = (x2 - x1) * i / n + x1
        var y4 = (y2 - y1) * i / n + y1
        goto(x4, y4)
        goto(x3, y3)
    }
}
fill(-150, -100, 200, 0, 0, 200, 'red')
//色五角星***************************************
var fill = function(x1, y1, x2, y2, x3, y3) {
    setDelay(0)
    jump(x1, y1)
    goto(x2, y2)
    goto(x3, y3)
    var n = 0.5 * Math.sqrt((x2 - x1)*(x2 - x1) + (y2-y1)*(y2-y1))
    console.log(n)
    for(var i = 0; i < n; i++) {
        var x4 = (x2 - x1) * i / n + x1
        var y4 = (y2 - y1) * i / n + y1
        goto(x4, y4)
        goto(x3, y3)
    }
}
var sewujcxy = function(x, y, len, color) {
    setPenColor(color)
    var x1 = x - 0.5 * len
    var y1 = y - 0.162 * len
    var x2 = x
    var y2 = y - 0.526 * len
    var x3 = x + 0.5 * len
    var y3 = y1
    var x4 = x + 0.309 * len
    var y4 = y + 0.431 * len
    var x5 = x - 0.309 * len
    var y5 = y4
    fill(x1, y1, x3, y3, x, y)
    fill(x1, y1, x4, y4, x, y)
    fill(x2, y2, x4, y4, x, y)
    fill(x2, y2, x5, y5, x, y)
    fill(x5, y5, x3, y3, x, y)
}
sewujcxy(-50, -50, 100, 'red')
//色矩形***************************************
var fill = function(x1, y1, x2, y2, x3, y3) {
    setDelay(0)
    jump(x1, y1)
    goto(x2, y2)
    goto(x3, y3)
    var n = 0.5 * Math.sqrt((x2 - x1)*(x2 - x1) + (y2-y1)*(y2-y1))
    console.log(n)
    for(var i = 0; i < n; i++) {
        var x4 = (x2 - x1) * i / n + x1
        var y4 = (y2 - y1) * i / n + y1
        goto(x4, y4)
        goto(x3, y3)
    }
}
var rect = function(x, y, w, h) {
    fill(x + w, y, x, y + h, x, y)
    fill(x + w, y, x, y + h, x + w, y + h)
}
rect(-150, -100, 50, 30)
//有色美国国旗***************************************
var rec = function(x, y, w, h) {
    jump(x, y)
    setHeading(0)
    for(var i = 0; i < 2; i++){
        forward(w)
        right(90)
        forward(h)
        right(90)
    }
}
var rect = function(x, y, w, h) {
    fill(x + w, y, x, y + h, x, y)
    fill(x + w, y, x, y + h, x + w, y + h)
}
var fill = function(x1, y1, x2, y2, x3, y3) {
    setDelay(0)
    jump(x1, y1)
    goto(x2, y2)
    goto(x3, y3)
    var n = con * Math.sqrt((x2 - x1)*(x2 - x1) + (y2-y1)*(y2-y1))
    console.log(n)
    for(var i = 0; i < n; i++) {
        var x4 = (x2 - x1) * i / n + x1
        var y4 = (y2 - y1) * i / n + y1
        goto(x4, y4)
        goto(x3, y3)
    }
}
var sewujcxy = function(x, y, len, color) {
    setPenColor(color)
    var x1 = x - 0.5 * len
    var y1 = y - 0.162 * len
    var x2 = x
    var y2 = y - 0.526 * len
    var x3 = x + 0.5 * len
    var y3 = y1
    var x4 = x + 0.309 * len
    var y4 = y + 0.431 * len
    var x5 = x - 0.309 * len
    var y5 = y4
    fill(x1, y1, x3, y3, x, y)
    fill(x1, y1, x4, y4, x, y)
    fill(x2, y2, x4, y4, x, y)
    fill(x2, y2, x5, y5, x, y)
    fill(x5, y5, x3, y3, x, y)
}
//颜色接口
var wujcxy = function(x, y, len, ang) {
    x0 = x + 0.5 * len
    y0 = y + 0.162 * len
    sewujcxy(x0, y0, len, 'white')
}
var usa = function(x, y, h) {
    setPenColor('red')
    x1 = x + d
    for(var i = 0; i < 4; i++) {
        y1 = y + i * l * 2
        rect(x1, y1, b - d, l)
    }
    x2 = x
    for(var i = 0; i < 3; i++) {
        y2 = y + c + l + i * l * 2
        rect(x2, y2, b, l)
    }
    setPenColor('blue')
    con = 1
    rect(x, y, d, c)
    con = 0.5
    for(var j = 0; j < 6; j++) {
        x3 = x + g - k / 2 + 2 * g * j
        for(var i = 0; i < 5; i++) {
            y3 = y + e - p + i * 2 * e
            wujcxy(x3, y3, k, 0)
        }
    }
    for(var j = 0; j < 5; j++) {
        x4 = x + 2 * g - k / 2 + 2 * g * j
        for(var i = 0; i < 4; i++) {
            y4 = y + 2 * e - p + 2 * e * i
            wujcxy(x4, y4, k, 0)
        }
    }
    setPenColor('black')
    rec(x, y, b, h)
}
con = 0.5
setDelay(0)
setPenSize(1)
h = 150
b = 2 * h
c = 0.54 * h
d = 0.76 * h
e = 0.0538 * h
g = 0.0633 * h
k = 0.060 * h
l = 0.0769 * h
p = 0.1 * k
usa(-150, -100, h)
hide()
///青天白日旗************************************
var blri = function(x, y, side) {
    setHeading(0)
    y1 = y - side * 0.5176
    x1 = x
    jump(x1, y1)
    right(90 - 15)
    for(var i = 0; i < 12; i++) {
        forward(side)
        right(180 - 30)
    }
}
var fill_blri = function(x, y, side) {
    for(var i = side; i > 0; i = i - 4) {
      blri(x, y, i)
    }
}
var rect = function(x, y, w, h) {
    fill(x + w, y, x, y + h, x, y)
    fill(x + w, y, x, y + h, x + w, y + h)
}
var fill = function(x1, y1, x2, y2, x3, y3) {
    setDelay(0)
    jump(x1, y1)
    goto(x2, y2)
    goto(x3, y3)
    var n = con * Math.sqrt((x2 - x1)*(x2 - x1) + (y2-y1)*(y2-y1))
    console.log(n)
    for(var i = 0; i < n; i++) {
        var x4 = (x2 - x1) * i / n + x1
        var y4 = (y2 - y1) * i / n + y1
        goto(x4, y4)
        goto(x3, y3)
    }
}
var circle = function(x, y, r) {
    jump(x, y - r)
    setHeading(0)
    var n = 36
    len = 3.14159265359 * 2 * r / n
    for(var i = 0; i < n; i++) {
        forward(len)
        right(360 / n)
    }
}
var qtbrmdh = function(x, y, h) {
    var w = h * 1.5
    setPenColor('red')
    rect(x, y, w, h)
    setPenColor('blue')
    rect(x, y, 0.75 * h, 0.5 * h)
    setPenColor('white')
    x1 = x + h * 3 / 8
    y1 = y + h / 4
    fill_blri(x1, y1, h * 29 / 80)
    setPenSize(4)
    setPenColor('blue')
    circle(x1, y1, h / 10)
}
setDelay(0)
con = 1
qtbrmdh(-150, -100, 200)
hide()
