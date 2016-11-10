// 2016/09/28
//
// ============
// 作业 6
//
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
        log('*** 测试失败:', message)
    }
}
var log = function() {
    console.log.apply(console, arguments)
}


// 作业 1
// 10 分钟做不出就看提示

    /*
    s1 s2 都是 string
    但 s2 的长度是 1

    返回 s2 在 s1 中的下标, 从 0 开始, 如果不存在则返回 -1
    */
    //
var find = function(s1, s2) {
    for (var i in s1) {
        if (s1[i] == s2) {
            console.log(i)
            return i
        }
    }
        console.log(-1)
        return -1
}
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var test_find = function() {
    ensure(find('1234','2') == 1, '测试1')
    ensure(find('1234','5') == -1, '测试1')
}
test_find()


/*
下面给出一个例子作为后面作业的参考
返回字符串的小写形式的函数
注意, 这里假设了 s 字符串全是大写字母
*/
// 这里是两个字符串, 包含了大写字母和小写字母
var lower = 'abcdefghijklmnopqrstuvwxyz'
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var lowercase = function(s) {
    // 初始化一个空字符串
    var result = ""
    for (var i = 0; i < s.length; i++) {
        // 注意, 这个 find 是你要实现的函数
        var index = find(upper, s[i])
        // 字符串可以用加号拼接, 不明白可以 log 一下
        result += lower[index]
    }
    return result
}


/*
作业 2

定义一个函数
参数是一个字符串 s
返回大写后的字符串
注意, 假设 s 字符串全是小写字母

注意, 自行实现测试函数
*/
var find = function(s1, s2) {
    for (var i in s1) {
        if (s1[i] == s2) {
            console.log(i)
            return i
        }
    }
        console.log(-1)
        return -1
}
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'
var lower = 'qwertyuiopasdfghjklzxcvbnm'
var uppercase = function(s) {
    var result = ''
    for (var x of s) {
        for (var i in lower) {
            if (lower[i] == x) {
                result += upper[i]
            }
        }
    }
    console.log(result)
    return result
}
var test_uppercase = function () {
    ensure(uppercase('abc') == 'ABC', '测试1')
}
test_uppercase()

/*
作业 3

实现 lowercase1
它能正确处理带 小写字母 的字符串
*/
var find = function(s1, s2) {
    for (var i in s1) {
        if (s1[i] == s2) {
            console.log(i)
            return i
        }
    }
        console.log(-1)
        return -1
}
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'
var lower = 'qwertyuiopasdfghjklzxcvbnm'
var lowercase1 = function(s) {
    var result = ''
    for (var x of s) {
        for (var i in upper) {
            if (upper[i] == x) {
                result += lower[i]
                break;
            }
        }
        if (i == 25) {
            result += x
        }
    }
    console.log(result)
    return result
}
var test = function () {
    ensure(lowercase1('ABcde') == 'abcde', '测试1')
}
test()


/*
作业 4

实现 uppercase1
它能正确处理带 大写字母 的字符串
*/
var find = function(s1, s2) {
    for (var i in s1) {
        if (s1[i] == s2) {
            console.log(i)
            return i
        }
    }
        console.log(-1)
        return -1
}
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'
var lower = 'qwertyuiopasdfghjklzxcvbnm'
var uppercase1 = function(s) {
    var result = ''
    for (var x of s) {
        for (var i in upper) {
            if (lower[i] == x) {
                result += upper[i]
                break;
            }
        }
        if (i == 25) {
            result += x
        }
    }
    console.log(result)
    return result
}
var test = function () {
    ensure(uppercase1('ABcde') == 'ABCDE', '测试1')
}
test()

/*
作业 5
实现一个叫 凯撒加密 的加密算法, 描述如下
对于一个字符串, 整体移位, 就是加密
以右移 1 位为例
原始信息 'afz' 会被加密为 'bga'
实现 encode1 函数, 把明文加密成密码并返回
右移 1 位

假设只有小写
*/
var find = function(s1, s2) {
    for (var i in s1) {
        if (s1[i] == s2) {
            console.log(i)
            return i
        }
    }
        console.log(-1)
        return -1
}
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA'
var lower = 'abcdefghijklmnopqrstuvwxyza'
var encode1 = function(s) {
    var result = ''
    for (var x of s) {
        log('for', x)
        for (var i in lower) {
            log(i)
            if (x == lower[i]) {
                result = result + lower[Number(i)+1]
                log(i+1)
                break
            }
        }
    }
    log(result)
    return result
}
var test = function () {
    ensure(encode1('afz') == 'bga', '测试1')
}
test()

/*
作业 6
实现 decode1 函数, 把作业 5 加密的密码解密为明文并返回
*/
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA'
var lower = 'abcdefghijklmnopqrstuvwxyza'
var lower1 = []
for (var i = 0; i < 26; i++) {
    lower1[25 - i] = lower[i]
}
lower1.push('z')
log(lower1)
var test = function () {
    ensure(decode1('bga') == 'afz', '测试1')
}
test()
var decode1 = function(s) {
    var result = ''
    for (var x of s) {
        log('for', x)
        for (var i in lower1) {
            // log(i, lower1[i])
            if (x == lower1[i]) {
                i++
                result += lower1[i]
                log(i, result)
                break
            }
        }
    }
    log(result)
    return result
}


/*
作业 7
实现 encode2
多了一个参数 shift 表示移的位数
*/
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA'
var lower = 'abcdefghijklmnopqrstuvwxyza'
var encode2 = function(s, shift) {
    var result = ''
    for (var x of s) {
        log('for', x)
        for (var i in lower) {
            log(i)
            if (x == lower[i]) {
                i = (Number(i) + shift) % 26
                result = result + lower[i]
                log(i, result)
                break
            }
        }
    }
    log(result)
    return result
}
var test = function () {
    ensure((encode2('afz', 1) == 'bga'), '测试1')
    ensure((encode2('afz', 28) == 'chb'), '测试1')
}
test()

/*
作业 8
实现 decode2
多了一个参数 shift 表示移的位数
*/
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA'
var lower = 'abcdefghijklmnopqrstuvwxyza'
var decode2 = function(s, shift) {
    var result = ''
    for (var x of s) {
        log('for', x)
        for (var i in lower) {
            log(i)
            if (x == lower[i]) {
                i = (Number(i) + 26*99 - shift) % 26
                result = result + lower[i]
                log(i, result)
                break
            }
        }
    }
    log(result)
    return result
}
var test = function () {
    ensure((decode2('bga', 1) == 'afz'), '测试1')
    ensure((decode2('chb', 28) == 'afz'), '测试2')
}
test()

/*
作业 9
实现 encode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA'
var lower = 'abcdefghijklmnopqrstuvwxyza'
var encode3 = function(s, shift) {
    var result = ''
    for (var x of s) {
        log('for', x)
        for (var i in lower) {
            // log(i)
            if (x == lower[i]) {
                i = (Number(i) + shift) % 26
                result = result + lower[i]

                break
            }
        }
        if (Number(i) == 26) {
            result += x
        }
        log(i, result)
    }
    log(result)
    return result
}
var test = function () {
    ensure((encode3('bga', 1) == 'chb'), '测试1')
    ensure((encode3('chb?43', 28) == 'ejd?43'), '测试2')
    ensure((encode3('chb,99', 28) == 'ejd,99'), '测试2')
}
test()



/*
作业 10
实现 decode3
多了一个参数 shift 表示移的位数
如果 s 中包含了不是字母的字符, 比如空格或者其他符号, 则对这个字符不做处理保留原样
*/
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA'
var lower = 'abcdefghijklmnopqrstuvwxyza'
var decode3 = function(s, shift) {
    var result = ''
    for (var x of s) {
        log('for', x)
        for (var i in lower) {
            // log(i)
            if (x == lower[i]) {
                i = (Number(i) + 26*99 - shift) % 26
                result = result + lower[i]

                break
            }
        }
        if (Number(i) == 26) {
            result += x
        }
        log(i, result)
    }
    log(result)
    return result
}
var test = function () {
    ensure((decode3('chb', 1) == 'bga'), '测试1')
    ensure((decode3('ejd?43', 28) == 'chb?43'), '测试2')
    ensure((decode3('ejd 99', 28) == 'chb 99'), '测试2')
}
test()

/*
作业 11
知乎有一个求助题, 破译密码的
链接在此
https://www.zhihu.com/question/28324597
这一看就是凯撒加密...
如果没思路, 可看本文件最后的提示
我把密码放在下面, 请解出原文
可以帮忙破译一个密码吗？VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW修改
密码正文：

VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX

谢谢唉。。。。真的不是秀恩爱额。
*/
var code = 'VRPHWLPHV L ZDQW WR FKDW ZLWK BRX,EXW L KDYH QR UHDVRQ WR FKDW ZLWK BRX'
var log = function() {
    console.log.apply(console, arguments)
}
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA'
var lower = 'abcdefghijklmnopqrstuvwxyza'
var decode3 = function(s, shift) {
    var result = ''
    for (var x of s) {
        // log('for', x)
        for (var i in upper) {
            // log(i)
            if (x == upper[i]) {
                i = (Number(i) + 26*99 - shift) % 26
                result = result + lower[i]

                break
            }
        }
        if (Number(i) == 26) {
            result += x
        }
        // log(i, result)
    }
    // log(result)
    return result
}
var decode4 = function(s) {
    for (var shift = 1; shift < 26; shift++) {
        var result = decode3(code, shift)
        log(result)
    }
}
decode4()



// =======
// 提示
// =======
/*

1, find
循环比较, 如果发现就返回
注意处理不存在的情况


2, uppercase
参考例子实现, 这个简单, 最好 log 一下搞清程序执行的流程和逻辑


3, lowercase1
因为可能字符串中带小写字符, 那么就要判断一下才能处理


4, uppercase1
同作业 3 一样


11, decode4
因为不知道加密的位移, 所以考虑把所有加密的可能都打印出来人肉挑选
*/




// =======
// 提示
// =======
/*

1, find
循环比较, 如果发现就返回
注意处理不存在的情况



*/
