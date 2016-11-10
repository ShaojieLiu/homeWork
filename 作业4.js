//预习
// 16/09/22
//
// 此为第 4 课的上课内容
//
// 今天上课的内容是
// 作业 3 讲解
// debug(调试/除错) 的标准应对流程
// array 和 str
//
// 预习内容是
//
// 内置数据结构 array(列表)
// 字符串和常用字符串操作
//
// 看不懂, 很正常
// 完全看不懂, 有小问题

// 题目, 给定一个只包含数字的 array
// 题目，得到列表中最小的元素
// 题目，得到列表中所有数字的合
// 题目，得到列表中所有数字的平均数
// 提示, array.length 可以得到 array 长度（也就是元素个数），上文有写


// 16/09/22
// 作业 4
//
// 注意, 自行去定义 log 函数(抄)
// 注意, 本次作业会慢慢更新
// 更新 4.11


// 资料 1
// 求数组的和
var sum = function(array) {
    // 先设置一个变量用来存 和
    var s = 0
    // 遍历数组
    for(var i = 0; i < array.length; i++) {
        // 用变量 n 保存元素值
        var n = array[i]
        // 累加到变量 s
        s = s + n
    }
    // 循环结束, 现在 s 里面存的是数组中所有元素的和了
  	return s
}

//************************************************

var log = function() {
    console.log.apply(console, arguments)
}
var sum = function(a) {
    var s = 0
    for(var i = 0; i < a.length; i ++) {
        s = s + a[i]
    }
    return s
}
var a = [1, 2, 3, 4]
log('sum = ', sum(a))


// 作业 1
// 参数是一个只包含数字的 array
// 求 array 的乘积
// 函数定义是
var log = function() {
    console.log.apply(console, arguments)
}
var product = function(array) {
    var p = 1
    for(var i = 0; i < array.length; i ++) {
        p *= array[i]
    }
    return p
}
var a = [2, 3, 4, 5]
log(`product = `, product(a))

// 作业 2
// 返回一个数的绝对值
// 函数定义是
var log = function() {
    console.log.apply(console, arguments)
}
var abs = function(a) {
    if (a > 0) {
        return(a)
    } else {
        return(-a)
    }
}
var a = -76
log(`abs(a) = `, abs(a))

// 作业 3
// 参数是一个只包含数字的 array
// 求 array 中所有数字的平均数
// 函数定义是
var log = function() {
    console.log.apply(console, arguments)
}
var sum = function(a) {
    var s = 0
    for(var i = 0; i < a.length; i ++) {
        s = s + a[i]
    }
    return s
}
var average = function(array) {
    avr = sum(array) / array.length
    return avr
}
var a = [2, 3, 4, 5]
log(`average(a) = `, average(a))


// 作业 4
// 参数是一个只包含数字的 array
// 求 array 中最小的数字
// 函数定义是
var min = function(array) {
    var min = array[0]
    for (var i = 0; i < array.length; i++) {
        if (min > array[i]) {
            min = array[i]
        }
    }
    return min
}
var log = function() {
    console.log.apply(console, arguments)
}
var a = [2, 3, 4, 5]
log(`min(a) = `, min(a))

// 作业 5
/*
参数是一个数字 n
返回以下序列的结果
1 - 2 + 3 - 4 + 5 ... n
*/
var log = function() {
    console.log.apply(console, arguments)
}
var sum1 = function(n) {
    var s1 = 0
    for (var i = 1; i <= n; i++) {
        var temp = i * Math.pow(-1, i + 1)
        s1 += temp
    }
    return s1
}
var a = 5
log(`sum1(a) = `, sum1(a))

// 作业 6
/*
参数是一个数字 n
返回以下序列的结果
1 + 2 - 3 + 4 - ... n
*/
var log = function() {
    console.log.apply(console, arguments)
}
var sum2 = function(n) {
    var s1 = 1
    for (var i = 2; i <= n; i++) {
        var temp = i * Math.pow(-1, i)
        s1 += temp
        log(`num${i} = ${s1}`)
    }
    return s1
}
var a = 6
log(`sum2(a) = `, sum2(a))

// 作业 7
/*
实现 fac 函数
接受一个参数 n
返回 n 的阶乘, 1 * 2 * 3 * ... * n
*/
var fac = function(n) {
    var fac = 1
    for (var i = 0; i < n; i++) {
        fac *= (i + 1)
    }
    return(fac)
}
var log = function() {
    console.log.apply(console, arguments)
}
var a = 6
log(`fac(a) = ${fac(a)}`)


/*
注意 下面几题中的参数 op 是 operator(操作符) 的缩写

作业 8
实现 apply 函数
参数如下
op 是 string 类型, 值是 '+' '-' '*' '/' 其中之一
a b 分别是 2 个数字
根据 op 对 a b 运算并返回结果(加减乘除)
*/
var log = function() {
    console.log.apply(console, arguments)
}
var apply = function(op, a, b) {
    if(op == '+') {
        return a + b
    }
    if(op == '-') {
        return a - b
    }
    if(op == '*') {
        return a * b
    }
    if(op == '/') {
        return a / b
    }
}
var a = 3
var b = 4
log(
`    a+b = ${apply('+', a, b)}
    a-b = ${apply('-', a, b)}
    a*b = ${apply('*', a, b)}
    a/b = ${apply('/', a, b)}`)


/*
作业 9
实现 applyList 函数
op 是 '+' '-' '*' '/' 其中之一
oprands 是一个只包含数字的 list
根据 op 对 oprands 中的元素进行运算并返回结果
例如, 下面的调用返回 -4
var n = applyList('-', [3, 4, 2, 1])
log(n)
// 结果是 4, 用第一个数字减去所有的数字
*/
var log = function() {
    console.log.apply(console, arguments)
}
var apply = function(op, a, b) {
    if(op == '+') {
        return a + b
    }
    if(op == '-') {
        return a - b
    }
    if(op == '*') {
        return a * b
    }
    if(op == '/') {
        return a / b
    }
}
var applyList = function(op, oprands) {
    var result = oprands[0]
    for (var i = 1; i < oprands.length; i ++) {
        result = apply(op, result, oprands[i])
    }
    return result
}
var oprands = [5, 3, 2]
log(
`+ = ${applyList('+', oprands)}
- = ${applyList('-', oprands)}
* = ${applyList('*', oprands)}
/ = ${applyList('/', oprands)}`)


/*
作业 10
实现 applyCompare 函数
参数如下
expression 是一个 array(数组), 包含了 3 个元素
第一个元素是 op, 值是 '>' '<' '==' 其中之一
剩下两个元素分别是 2 个数字
根据 op 对数字运算并返回结果(结果是 true 或者 false)
*/
var log = function() {
    console.log.apply(console, arguments)
}
var applyCompare = function(expression) {
    var a = expression[0]
    var op = expression[1]
    var b = expression[2]
    if(op === `>`) {
        return (a > b)
    }
    if(op === '<') {
        return a < b
    }
    if(op === '==') {
        return a == b
    }
    if(op === '===') {
        return a === b
    }
}

var a = [5, `>`, 4]
log(`${a} is ${applyCompare(a)}`)
var a = [5, `<`, 4]
log(`${a} is ${applyCompare(a)}`)
var a = [5, `==`, 4]
log(`${a} is ${applyCompare(a)}`)
var a = [5, `===`, 4]
log(`${a} is ${applyCompare(a)}`)



/*
注意
下面这题做不出来没关系

作业 11
实现 applyOps 函数
参数如下
expression 是一个 array
expression 中第一个元素是上面几题的 op, 剩下的元素是和 op 对应的值
根据 expression 运算并返回结果
*/
var log = function() {
    console.log.apply(console, arguments)
}
//+-*/
var apply = function(op, a, b) {
    if(op == '+') {
        return a + b
    }
    if(op == '-') {
        return a - b
    }
    if(op == '*') {
        return a * b
    }
    if(op == '/') {
        return a / b
    }
}
//+-*/转换参数
var applyCalculate = function(expression) {
    var a = expression[0]
    var op = expression[1]
    var b = expression[2]
    return apply(op, a, b)
}
//比较
var applyCompare = function(expression) {
    var a = expression[0]
    var op = expression[1]
    var b = expression[2]
    if(op === `>`) {
        return (a > b)
    }
    if(op === '<') {
        return a < b
    }
    if(op === '==') {
        return a == b
    }
    if(op === '===') {
        return a === b
    }
}
//判断符号
var applyOps = function(expression) {
    var ops = ['+', '-', '*', '/', '>', '<', '==', '===']
    for(var i = 0; i < 8; i++) {
        if (expression[1] == ops[i]) {
            if (i < 4) {
                return applyCalculate(expression)
            } else {
                return applyCompare(expression)
            }
        }
    }
    return 'Error'
}
var ops = ['+', '-', '*', '/', '>', '<', '==', '===']
for (var i = 0; i < 8; i++) {
    var e = [7, '+', 6]
    e[1] = ops[i]
    log(`${e} is ${applyOps(e)}`)
}

// 注意
// 下次作业起, 会用更标准简练的方式来表示参数类型和说明
// 另外, 下次开始会引入测试这个概念
