// 2016/09/30
//
// ============
// 作业 7
//
// 本次作业主要是 string 和 object 相关
// 带有一定的 DOM API 练习
// string 题目用到的知识还是
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

/*
交作业手动传送门
http://vip.cocode.cc/topics/346
*/


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
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}


// 作业 1
// 实现函数
// 10分钟做不出来就看提示
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 {', message)
    }
}
var startsWith = function(s1, s2) {
    var start = s1.slice(0, s2.length)
    log(start)
    if (start == s2) {
        return true
    } else {
        return false
    }
}
var test = function () {
    ensure(startsWith('gua-nihk', 'gua-') == true, '测试1')
    ensure(startsWith('gua-nihk', 'ua-') == false, '测试1')
}
test()
    /*
    s1 是一个字符串
    s2 是一个字符串
    检查 s1 是否以 s2 开头, 返回 true 或者 false
    */


// 用法如下, 作为测试参考
// log('starts_with', startsWith('guagua', 'gua'))
// starts_with true
// log('starts_with', startsWith('guagua', 'melon'))
// starts_with false
// log('starts_with', startsWith('melongua', 'gua'))
// starts_with false


// 作业 2
// 实现函数
// 10 分钟做不出就看提示

var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 ', message)
    }
}
var findIn = function(s1, s2) {
    for (var i in s1) {
        // log(s1[i], s2)
        if (s1[i] == s2) {
            return i
        }
    }
    return -1
}
var test = function () {
    ensure(findIn('gua-nihk', 'u') == 1, '测试1')
    ensure(findIn('gua-nihk', 'a') == 2, '测试2')
    log(findIn('gua-nihk', 'h'))
    ensure(findIn('gua-nihk', 'p') == -1, '测试3')
}
test()
    /*
    s1 是一个字符串
    s2 是一个长度为 1 的字符串
    返回参数 s2 在 s1 中第一次出现的下标
    如果 s2 没有在 s1 中出现, 返回 -1
    */



// 作业 3
// 实现函数
// 10 分钟做不出就看提示

var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 ', message)
    }
}
var findAllIn = function(s1, s2) {
    var result = []
    for (var i in s1) {
        // log(s1[i], s2)
        if (s1[i] == s2) {
            result.push(i)
        }
    }
    log(result)
    return result
}
var test = function () {
    ensure(findAllIn('gua-gu', 'u').join('') == ["1", "5"].join(''), '测试1')
    ensure(findAllIn('gua-nihk', 'a') == '2', '测试2')
    ensure(findAllIn('gua-nihk', 'p') == '', '测试3')
}
test()
    /*
    s1 是一个字符串
    s2 是一个长度为 1 的字符串
    返回参数 s2 在 s1 中出现的所有下标组成的 array
    如果 s2 没有在 s1 中出现, 返回空数组 []
    */


// 用法范例, 作为测试参考
// log('find all', findAllIn('10121320', '1'))
// find all [0, 2, 4]
// log('find all', findAllIn('10121320', '0'))
// find all [1, 7]
// log('find all', findAllIn('10121320', '3'))
// find all [5]
// log('find all', findAllIn('10121320', '9'))
// find all []


// 作业 4
// 实现函数
// 10 分钟做不出就看提示

var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 ', message)
    }
}
var findAllString = function(s1, s2) {
    var s = []
    var len2 = s2.length
    for (var i in s1) {
        if (s2 == s1.slice(i, Number(i)+len2)) {
            s.push(i)
        }
    }
    log(s)
    return s
}
var test = function () {
    ensure(findAllString('abcabc', 'ab').join('') == ['0', '3'].join(''), '①' )
    ensure(findAllString('abcabc', 'bc').join('') == ['1', '4'].join(''), '②')
    ensure(findAllString('abcabcscsc', 'c').join('') == ['2', '5', '7', '9'].join(''), '③')
}
test()
    /*
    s1 是一个字符串
    s2 是一个字符串, 长度未知, 不一定为 1
    返回参数 s2 在 s1 中出现的下标组成的 array
    如果 s2 没有在 s1 中出现, 返回 []
    */


// 用法
// log('find all str', findAllString('1012100120', '10'))
// find all [0, 4]
// log('find all str', findAllString('1012100120', '100'))
// find all [4]
// log('find all str', findAllString('1012100120', '3'))
// find all []


// 作业 5
// 实现函数
// 10分钟做不出来就看提示

var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 ', message)
    }
}
var endsWith = function(s1, s2) {
    var len2 = s2.length
    var len1 = s1.length
    var end = s1.slice(len1 - len2)
    if (end == s2) {return true}
    else {return false}
    log(end)
}
log(endsWith('abcde', 'de'))
log(endsWith('abcde', 'cd'))
    /*
    s1 是一个字符串
    s2 是一个字符串
    检查 s1 是否以 s2 结尾, 返回 true 或者 false
    */



// 作业 6
// 实现函数

    /*
    students 是 array
    里面的每个元素都是如下格式的 object
    {
        'name': 'gua',
        'sex': '男',
        'score': 127,
    }
    返回 score 最高的那个元素(object)
    */


var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 ', message)
    }
}
var top1 = function(student_list) {
    var result = student_list[0]
    for (var x of student_list) {
        if (x.score > result.score) {
            result = x
        }
    }
    return result
}
// 目前只有两个数据, 自行扩充到 5 个
var student_list = [
    {
        'name': 'gua1',
        'sex': '男',
        'score': 627,
    },
    {
        'name': 'gua2',
        'sex': '男',
        'score': 99,
    },
    {
        'name': 'gua3',
        'sex': '男',
        'score': 199,
    },
    {
        'name': 'gua4',
        'sex': '男',
        'score': 299,
    },
    {
        'name': 'gua5',
        'sex': '男',
        'score': 499,
    },
]
log(top1(student_list))



// 作业 7
// 做不出尽早看提示或者到群里讨论或者发帖
//

var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 ', message)
    }
}
var formated_weekday = function(day) {
    var wfzi = ['','一','二','三','四','五','六','七']
    return ('星期' + wfzi[day])
}
log(formated_weekday(2))
log(formated_weekday(4))
    /*
    day 是代表星期的数字, 从周一到周日分别是 1 2 3 4 5 6 7
    返回 '星期一' '星期二' 这样的描述字符串
    */



// 作业 8
// 做不出尽早看提示或者到群里讨论或者发帖
//

var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 ', message)
    }
}
var discount = function(price, grade) {
    var dis = [10,5,6,7,8,9]
    var gra = [undefined,'小学生','初中生','高中生','大学生','研究生']
    var result = price
    for(var i in gra) {
        // i = Number(i)
        // log(gra[i],dis[i])
        if(gra[i] == grade) {
            result = price*dis[i]/10
            log(result)
            return result
        }
    }
}
discount(100, '小学生')
discount(100, '初中生')
discount(100)
    /*
    price 是一个 int
    grade 合法情况下一共 6 种取值, 还可能没有给出这个参数
        '小学生'
        '初中生'
        '高中生'
        '大学生'
        '研究生'
    对应的折扣分别是 5 6 7 8 9

    注意, 如果调用者没有给出 grade 参数, 没有折扣

    返回折扣后的价格
    */



// 作业 9
// 做不出尽早看提示或者到群里讨论或者发帖

var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败 ', message)
    }
}
var repeat = function (char, num) {
    var result = ''
    for (var i = 0; i < num; i++) {
        result += char
    }
    return result
}
var prettyLog = function(array) {
    var s = []
    var len = []
    for (var i in array) {
        s[i] = array[i]
        len[i] = array[i].length
        log(i)
    }
    log(s, len)
    var maxL = len[0]
    for (x of len) {
        if (x > maxL) {maxL = x}
    }
    var start = repeat('+', maxL+4)
    var front = '+ '
    var after = ' +'
    var result = []
    result[0] = `${start}
`
    for (i in s) {
        i = Number(i)
        var space = repeat(' ', maxL - len[i])
        result[i + 1] = `${front}${s[i]}${space}${after}
`
    }
    result[i + 2] = start
    log(result)
    return result
}
prettyLog([ 'objective-c', 'python', 'js'])


    /*
    array 是 array 类型, 里面的元素都是字符串

    按如下的格式返回这个 array
    假设 array 是 ['python', 'js', 'objective-c']
    那么返回的数据是一个数组, 多了首尾两个元素
    [
        '+++++++++++++++',
        '+ python      +',
        '+ js          +',
        '+ objective-c +',
        '+++++++++++++++',
    ]
    返回包含了 string 的 array
    */

    var log = function() {
        console.log.apply(console, arguments)
    }
    var ensure = function(condition, message) {
        // 在条件不成立的时候, 输出 message
        if(!condition) {
            log('*** 测试失败 ', message)
        }
    }
    var repeat = function (char, num) {
        var result = ''
        for (var i = 0; i < num; i++) {
            result += char
        }
        return result
    }
    var prettyLog = function(array) {
        var s = []
        var len = []
        for (var i in array) {
            s[i] = array[i]
            len[i] = array[i].length
            log(i)
        }
        log(s, len)
        var maxL = len[0]
        for (x of len) {
            if (x > maxL) {maxL = x}
        }
        var start = repeat('+', maxL+4)
        var front = '+ '
        var after = ' +'
        var result
        result = `[
        "${start}",
    `
        for (i in s) {
            i = Number(i)
            var space = repeat(' ', maxL - len[i])
            result += `    "${front}${s[i]}${space}${after}",
    `
        }
        result += `    "${start}"
]`
        // log(result)
        return result
    }
    prettyLog([ 'objective-c', 'python', 'js'])


// =======
// 提示
// =======
/*
注意要多 log 数据, 模拟执行流程, 发现问题所在

1, startsWith
简单的办法是 slice s1 后与 s2 比较


2, findIn
初始化下标为 -1
用 while 循环去遍历 s1 来比较
如果找到则设置下标并 break 循环


3, findAllIn
和 findIn 类似
只不过是用一个 array 去保存下标


4, findAllString
循环遍历 s1
每次循环 slice 一个字符串出来用 startsWith 检查


5, endsWith
切片 s1 然后和 s2 比较
切片下标可以用长度算出


6, top
参考前几次作业的 min max 函数


7, formated_weekday
无


8, discount
无


9, prettyLog
先求出最长的那个字符串的长度
这样就可以算出每行的长度
这样就很简单了
*/
