// 2016/10/01
//
// ============
// 作业 8
//
// 本次作业主要还是是 string
// string 题目用到的知识仍然是
// 0, 用下标引用字符串
// 2, 循环
// 3, 选择 (也就是 if)
// 1, 字符串切片
//
// 注意, 提示在文件最末尾
// ============
//
// 请以之前上课中 string 相关的内容作为参考
// 请自行编写测试
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}
var log = function() {
    console.log.apply(console, arguments)
}

// 定义一个增强的 ensureEqual
var ensureEqual(a, b, message) {
    if (a != b) {
        log(`*** 测试失败, ${a} 不等于 ${b}, ${message}`)
    }
}


// 作业 1
// 实现函数
// 多看提示多讨论

    /*
    delimiter 是 string
    array 是包含 string 的 array

    把 array 中的元素用 delimiter 连接成一个字符串并返回
    具体请看测试
    */

var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}
var log = function() {
    console.log.apply(console, arguments)
}
var join = function(delimiter, array) {
    var result = ''
    for (let i = 0; i < array.length; i++) {
        result += array[i]
        if (i < array.length - 1) {
            result += delimiter
        }
    }
    log(result)
    return result
}

var test = function() {
    ensure(join('#', ['hello', 'gua']) == 'hello#gua', 'join 测试 1')
    ensure(join(' ', ['hello', 'gua']) == 'hello gua', 'join 测试 2')
    ensure(join('\n', ['multi', 'line', 'string']) == 'multi\nline\nstring', 'join 测试 3')
}
test()


// 作业 2
// 实现函数

    /*
    s 是 string
    delimiter 是 string, 默认为空格 ' '

    以 delimiter 为分隔符号, 返回一个 array
    例如
    split('1 2 3') 返回 ['1', '2', '3']
    split('a=b&c=d', '&') 返回 ['a=b', 'c=d']
    注意, 测试 array 是否相等得自己写一个函数用循环来跑
    */


var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}
var log = function() {
    console.log.apply(console, arguments)
}
var split = function(s, delimiter=' ') {
    var start = s
    var result = []
    var temp = -1
    for (let i = 0; i < s.length; i ++) {
        if (s[i] == delimiter) {
            var sub = s.slice(temp+1, i)
            result.push(sub)
            // log(result, i)
            var temp = i
        }
    }
    // log(start)
    result.push(start.slice(temp+1))
    return(result)
}
split('12*34*567', '*')





// 作业 3
// 实现函数

var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}
var log = function() {
    console.log.apply(console, arguments)
}
var replaceAll = function(s, old, newString) {
    //返回所有old位置
    var result = ''
    var len = old.length
    var index = [0-len]
    for (var i = 0; i < s.length; i++) {
        if (s.slice(i, i+len) == old) {
            index.push(i)
        }
    }
    log (index)
    for (var i = 0; i < index.length; i++) {
        result += s.slice(index[i] + len, index[i + 1]) + newString
    }
    result = result.slice(0, result.length - newString.length)
    return result
    // result =
}
replaceAll('abcqwdefqwghi', 'qw', '$$')

    /*
    s old newString 都是 string
    返回一个「将 s 中出现的所有 old 字符串替换为 new 字符串」的字符串
    */



// 作业 4
// 实现函数



var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}
var log = function() {
    console.log.apply(console, arguments)
}
var str1 = function(n) {
    var result = 0
    for (var i = 0; i < n; i++) {
        result *= 10
        result += 1
    }
    log(result)
    return String(result*result)
}
str1(9)
    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       '1'
    2       '121'
    3       '12321'
    */



// 作业 5
// 实现函数


var str1 = function(n) {
    var result = 0
    for (var i = 0; i < n; i++) {
        result *= 10
        result += 1
    }
    log(s=result*result)
    return String(s)
}
var str2 = function(n) {
    var s = str1(n)
    var tab = '0ABCDEFGHI'
    var result = ''
    for (var i = 0; i < s.length; i++) {
        result += tab[Number(s[i])]
    }
    return result
}
str2(8)

    /*
    n 是 int
    返回这样规律的字符串, 特殊情况不考虑
    n       返回值
    1       'A'
    2       'ABA'
    3       'ABCBA'
    */



// 作业 6
// 实现加法口诀表

var addTable = function() {
    var s = ''
    var result = []
    for (var a = 1; a < 10; a++) {
        result[a-1] = s
        for (var b = 1; b < a + 1; b++) {
            result[a-1] += `${a} + ${b} = ${a + b} `
        }
        result[a-1] += `
`
    }
    log(result)
    return(result)
}
addTable()

    /*
    返回这样格式的加法口诀表(没写全, 但是要返回完整的)
    注意, 这只是我输入的内容
    实际上你普通 log 出来是不会有回车的
    [
        '1 + 1 = 2',
        '2 + 1 = 3  2 + 2 = 4',
        '3 + 1 = 4  3 + 2 = 5  3 + 3 = 6',
    ]
    */



// 作业 7
// 实现函数
var range1 = function(start, end) {
    var result = []
    var index = 0
    for (var i = start; i < end; i++) {
        result[index] = i
        index++
    }
    return result
}
range1(5,11)

    /*
    start end 都是 int

    返回一个 array, 假设 start 为 1, end 为 5, 返回数据如下
    [1, 2, 3, 4]
    */



// 作业 8
// 实现函数
var range2 = function(start, end, step=1) {
    var result = []
    var index = 0
    for (var i = start; i < end; i += step) {
        result[index] = i
        index++
    }
    return result
}
range2(-3, 12, 3)
    /*
    start end step 都是数字
    step 是大于 0 的正整数

    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=0, end=6, step=2 返回数据如下
    [0, 2, 4]
    */



// 作业 9
// 实现函数
//



var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}
var log = function() {
    console.log.apply(console, arguments)
}
var range3 = function(start, end, step=1) {

        var result = []
        var index = 0
        if (step > 0) {
            for (var i = start; i < end; i += step) {
                result[index] = i
                index++
            }
        }   else
        {
            for (var i = start; i > end; i += step) {
                result[index] = i
                index++
                // log(i)
            }
        }
        return result
}
range3(36, 12, -3)
range3(10, 33, 4)


    /*
    start end step 都是数字

    和 range2 一样, 但是要求支持负数 step
    使用 while 循环
    返回一个 array
    假设 start=1, end=5, step=1 返回数据如下
    [1, 2, 3, 4]
    假设 start=6, end=0, step=-1 返回数据如下
    [6, 5, 4, 3, 2, 1]

    */



// 作业 10
// 实现函数
var random01 = function() {
    return Math.round(Math.random())
}
random01()
    /*
    js 标准数学库有一个随机数函数
    Math.random()
    它返回 0 - 1 之间的小数

    用它实现本函数, 返回 0 或 1
    */



// 作业 11
// 实现函数



var random01 = function() {
    return Math.round(Math.random())
}
var randomLine01 = function(n) {
    var result = []
    for ( var i = 0; i < n; i++) {
        result[i] = random01()
    }
    return result
}
randomLine01(6)



    /*
    返回一个只包含了 0 1 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 1, 0, 1]
    */



// 作业 12

var log = function () {
    console.log.apply(console,arguments)
}
var random01 = function() {
    return Math.round(Math.random())
}
var randomLine01 = function(n) {
    var result = []
    for ( var i = 0; i < n; i++) {
        result[i] = random01()
    }
    return result
}
var randomSquare01 = function(n) {
    var result = []
    for ( var i = 0; i < n; i++) {
        result[i] = randomLine01(n)
    }
    log(`
${result[0]}
${result[1]}
${result[2]}
${result[3]}
`)
    return result
}
randomSquare01(4)
    /*
    返回以下格式的数据
    假设 n 为 3, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    注意, 这只是一个 array, 并不是它显示的样子
    注意, 这是一个 array 不是 string
    [
        [0, 0, 1],
        [1, 0, 1],
        [0, 0, 0],
    ]
    返回, 包含了 n 个『只包含 n 个「随机 0 1」的 array』的 array
    */
}


// 作业 13



var random01 = function() {
    return Math.round(Math.random())
}
var randomLine09 = function(n) {
    var result = []
    for ( var i = 0; i < n; i++) {
        result[i] = random01()*9
    }
    return result
}
randomLine09(5)
    /*
    返回一个只包含了 0 9 的随机 array, 长度为 n
    假设 n 为 5, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    [0, 0, 9, 0, 9]
    */



// 作业 14
var markedLine = function(array) {
    var s
    s = array.slice(0)
    var result = []
    for (var i = 1; i < s.length - 1; i ++) {
        if (array[i] == 9) {
            s[i - 1] += 1
            s[i + 1] += 1
        }
    }
    if (array[0] == 9) {s[1] += 1}
    if (array[array.length - 1] == 9) {s[s.length - 2] += 1}
    for ( var i = 0; i < s.length; i ++) {
        if (s[i] > 9) {
            s[i] = 9
        }
    }
    return s
}
markedLine([9,0,0,0,9,0,9])
    /*
    array 是一个只包含了 0 9 的 array
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组
    复制数组用 array.slice(0) 实现

    标记规则如下
    对于下面这样的 array
    [0, 0, 9, 0, 9]
    标记后是这样
    [0, 1, 9, 2, 9]

    规则是, 0 会被设置为左右两边 9 的数量
    */



// 作业 15



先制造一个大的矩阵,外面一圈0包围住小的,mark之后再把中间的小的拿出来
这样可以避开讨论边边角角的判断





var sqr0 = function (n) {
    var result = []
    for (var i = 0; i < n; i++) {
        var row = []
        for (var j = 0; j < n; j++) {
            row[j] = 0
        }
        result[i] = row
    }
    return result
}
var log = function() {
    console.log.apply(console, arguments)
}
// log('sqr', sqr)
var mark = function (sqr) {
    var n = sqr[0].length
    var big = sqr0(n + 2)
    for (var i = 1; i < n + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            if (sqr[i - 1][j - 1] == 9) {
                big[i][j] = 9
                big[i - 1][j - 1] += 1
                big[i - 1][j] += 1
                big[i - 1][j + 1] += 1
                big[i][j - 1] += 1
                big[i][j + 1] += 1
                big[i + 1][j - 1] += 1
                big[i + 1][j] += 1
                big[i + 1][j + 1] += 1
            }
        }
    }
    var small = sqr0(n)
    for (var i = 1; i < n + 1; i++) {
        for (var j = 1; j < n + 1; j++) {
            small[i - 1][j - 1] = big[i][j]
            if (big[i][j] > 9) {small[i - 1][j - 1] = 9}
        }
    }
    log('marked', `
${small[0]}
${small[1]}
${small[2]}
${small[3]}`)
    return small
}
var sqr = [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 9, 0],
        [0, 9, 0, 0],
    ]
mark(sqr)

    // for (let i = 0; i < n; i++) {
    //     for (let j = 0; j < n-1; j++) {
    //         log(sqr[i][j])
    //         if (sqr[i][j] == 9) {
    //             c[i][j+1] = 1
    //             // log('找到一个9')
    //         }
    //     }
    // }
    // str.right = c; log('向右+1', c)



//
// var sqr = [
//         [0, 9, 0, 0],
//         [0, 0, 9, 0],
//         [9, 0, 9, 0],
//         [0, 9, 0, 0],
//     ]
// log('sqr', sqr)
// var test = function(sqr) {
//     log('sqrsqr', sqr)
// }
// test(sqr)

    /*
    array 是一个「包含了『只包含了 0 9 的 array』的 array」
    返回一个标记过的 array
    ** 注意, 使用一个新数组来存储结果, 不要直接修改老数组

    范例如下, 这是 array
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 9, 0],
        [0, 9, 0, 0],
    ]

    这是标记后的结果
    [
        [1, 9, 2, 1],
        [2, 4, 9, 2],
        [9, 4, 9, 2],
        [2, 9, 2, 1],
    ]

    规则是, 0 会被设置为四周 8 个元素中 9 的数量
    */



// 作业 16

var sqr0 = function (n) {
    var result = []
    for (var i = 0; i < n; i++) {
        var row = []
        for (var j = 0; j < n; j++) {
            row[j] = 0
        }
        result[i] = row
    }
    return result
}
var range = function (n) {
    var result = []
    for (var i = 0; i < n; i ++) {
        result[i] = i
    }
    return result
}
var log = function () {
    console.log.apply(console, arguments)
}

var randomSquare09 = function(n, limit=3) {
    var ran = []
    var index = range(n*n)
    for (var i = 0; i < limit; i ++) {
        ran[i] = Math.floor(Math.random() * index.length)
        index.splice(ran[i])
    }
    log('ran', ran)
    var sqr = sqr0(n)
    for (var i = 0; i < ran.length; i ++) {
        var row = Math.floor(ran[i] / n)
        var cul = ran[i] % n
        sqr[row][cul] = 9
    }
    log('sqr', `
${sqr[0]}
${sqr[1]}
${sqr[2]}
${sqr[3]}
`)
    return sqr
}
randomSquare09(4,2)


    /*
    返回以下格式的数据
    只包含 0 和 9
    limit 是 9 的个数
    假设 n 为 4, 返回的数据格式如下(这是格式范例, 真实数据是随机的)
    注意, 这只是一个 array, 并不是它显示的样子
    注意, 这是一个 array 不是 string
    [
        [0, 9, 0, 0],
        [0, 0, 9, 0],
        [9, 0, 0, 0],
        [0, 0, 0, 0],
    ]
    返回, 包含了 n 个『只包含 n 个「随机 0 9」的 array』的 array, 9 的个数是 limit
    */
}



// 下面开始都是 DOM API 相关练习
// ====
//
// 作业 17
//
//
'完成'
/*
实现一个登录页, 有 2 个标签分别是用户名输入框和登录按钮
给登录按钮绑定一个 click 事件
检查用户名是否符合如下规则
1，第一位是字母
2，只能包含字母、数字、下划线
3，只能字母或数字结尾
4，最小长度2
5，最大长度10

如果符合规则, log '检查合格'
如果不符合, 在登录按钮后插入一个红色 h1 标签
内容是 '用户名错误'

需要补全的代码自行解决
*/


// 作业 18
/*
给上课写的 todo 程序加一个功能
在编辑的时候输入框失去焦掉后保存 todo
失去焦点的事件名是 blur
*/
'完成'

// 作业 19
'完成'
/*
给上课写的 todo 加一个功能
增加一个 编辑 按钮
task 默认是不能编辑的
在你点了编辑按钮后它才能编辑(设置属性)
并且拥有焦点(element.focus() 实现)
编辑完成后(失去焦点后), 让 task 不可编辑

如果不懂, 看提示
*/

// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, join
循环相加


2, split
用循环找到 delimiter
记录两个变量 start 和 end 来 slice 出子字符串


3, replaceAll
split 再 join


4, str1
用 2 个辅助函数
一个生成前半部分
一个生成后半部分
辅助函数用循环


5, str2
同上


6, addTable
用一个辅助函数生成行
用循环 push


7, range1
使用 while 循环


8, range2
循环加判断


9, range3
循环加判断


10, random01
用余数来实现


11, randomLine01
循环加 random01


12, randomSquare01
循环加 randomLine01


13, randomLine09
可以生成 01 之后把 1 替换为 9


14, markedLine
把 9 左右加一
注意判断 9 是否在两边


15, markedSquare
循环调用 markedLine


16, randomSquare09
把 randomSquare01 里的 1 替换成 9


17, 用户名检查
红色是 css 预先写好的


18, 保存 todo
给编辑框绑定一个 blur 事件就好
用事件委托


19, 动态编辑
用之前讲过的 DOM API 设置属性即可
*/
