// 2016/10/07
//
// ============
// 作业 10
//
//
// 注意, 提示在文件最末尾
// ============
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


// 作业 1
//
var isPrime = function(n) {
    if (n > 1) {
        for (var i = 2; i < n; i ++) {
            var factor = n / i
            if (factor == Math.floor(factor)) {
                return false
            } else {
                continue
            }
        }
        return true
    }
}
    /*
    n 是 int
    判断 n 是否是素数(质数)
    */

// 作业 2
//
var primeNumbers = function() {
    var result = []
    for (var i = 2; i < 100; i++) {
        if (isPrime(i)) {result.push(i)}
    }
    // log(result)
    return result
    /*
    返回 100 内的素数列表
    */
}


// 作业 3
//
var capString = function(str) {
    var lowCap = `abcdefghijklmnopqrstuvwxyz`
    var upCap = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    var result = ``
    var nextSp = true
    for (var i = 0; i < str.length; i ++) {
        for (var j = 0; j < upCap.length; j ++) {
            if (str[i] == lowCap[j] || str[i] == upCap[j]) {
                if (nextSp) {
                    result += upCap[j]
                } else {
                    result += lowCap[j]
                }
                nextSp = false
                }
            }
            if (str[i] == ' ') {
                result += ' '
                nextSp = true
        }
    }
    return result
    /*
    给定一个英文句子 str（一个只有字母的字符串）
    返回「将句中所有单词变为有且只有首字母大写的形式」的 string
    */
}


// 作业 4
//
var letterCount = function(str) {
    var obj = {}
    var letter = `abcdefghijklmnopqrstuvwxyz
                ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    for (var i = 0; i < letter.length; i++) {
        for (var j = 0; j < str.length; j ++) {
            if (letter[i] == str[j]) {
                if (obj[`${letter[i]}`] == undefined){
                    obj[`${letter[i]}`] = 1
                } else {obj[`${letter[i]}`] += 1}
            }
        }
    }
    // log(obj)
    var i = 0
    var result = []
    // for (var letterName in obj) {
    //     result[i] = [`${letterName}`, obj[`${letterName}`]]
    //     i++
    // }
    // 不用for in 的方法
    for (var i = 0; i < letter.length; i ++) {
        if (obj[`${letter[i]}`] != undefined) {
            var letterName = letter[i]
            result.push([`${letterName}`, obj[`${letterName}`]])
        }
    }
    // log(result)
    return result
}
    /*
    给定一个只包含字母的字符串，返回单个字母出现的次数
    考察字典的概念和使用
    返回值为包含数组的数组，格式如下（对数组中数组的顺序不做要求）

    // 可以使用 Object.keys 函数
    var obj = {
      foo: 1,
      bar: 2,
    }
    Object.keys(obj)
    ["foo", "bar"]

    参数 "hello"
    返回值 [['h', 1], ['e', 1], ['l', 2], ['o', 1]]
    */


    // 作业 5
    //
    var queryFromObject = function(param) {
        var name = Object.keys(param)
        var value = []
        for (var i = 0; i < name.length; i++) {
            value[i] = param[`${name[i]}`]
        }
        var result = ''
        for (var i = 0; i < name.length; i++) {
            result += `${name[i]}=${value[i]}&`
        }
        result = result.slice(0, result.length - 1)
        // log(result)
        return result
    }
        /*
        param 是一个 object
        例子如下
        param 是 {
            'foo': 1,
            'bar': 'far',
        }
        返回如下 string, 顺序不做要求(foo bar 的顺序)
        foo=1&bar=far

        注意, 使用 Object.keys 函数
        */



    // 作业 6
    //
    var argsFromQuery = function(queryString) {
        var subStr = []
        var j = 0
        var len = queryString.length
        for (var i = 0; i < len; i++) {
            // log(queryString[i])
            if ((queryString[i] == '=') || (queryString[i] == `&`)) {
                subStr[j] = queryString.slice(0, i)
                queryString = queryString.slice(i+1)
                // log(subStr[j], queryString)
                j++
                i = 0
            }
        }
        subStr[j] = queryString
        var objStr = {}
        for (var i = 0; i < subStr.length / 2; i++) {
            objStr[`${subStr[i*2]}`] = `${subStr[i*2 + 1]}`
        }
        // log(objStr)
        return objStr
    }
        /*
        queryString 是一个 string
        例子如下
        queryString 是 foo=1&bar=far
        返回如下 object, 顺序不做要求(foo bar 的顺序)
        {
            'foo': 1,
            'bar': 'far',
        }
        */


    // 作业 7
    //


    var url = '/login'
    var callback = function () {
        console.log('callBack')
    }
    var ajaxGet = function(url, callback) {
        var login = new XMLHttpRequest()
        login.open('POST', url, true)
        login.setRequestHeader('Content-Type', 'application/json')
        login.onreadystatechange = function () {
            var response = JSON.parse(login.response)
            console.log('stateChange', login.readyState, login.status, response)
        }
        login.send('{"password":"ftn","username":"a1992"}')
    }
    ajaxGet(url, callback)



        /*
        利用上课板书, 实现 ajaxGet 函数, 用 GET 方法请求一个 URL
        url 是一个 URL
        callback 是一个函数, 在接受服务器响应后调用并传递参数给它
        本题不会就放弃
        */


    // 作业 8
    //
    var ajax = function(request) {
        var a = new XMLHttpRequest()
        a.open(request.method, request.url, true)
        a.setRequestHeader('Content-Type', 'application/json')
        a.onreadystatechange = function () {
            request.callback()
        }
        a.sent
    }
    
        /*
        request 是一个 object, 有如下属性
        method, 请求的方法, string
        url, 请求的路径, string
        data, 请求发送的数据, 如果是 GET 方法则没这个值, string
        callback, 响应回调, function

        本题不会就放弃, 本题带了一个用法在下方
        */


    var r = {
        method: 'POST',
        url: '/login',
        data: 'username=gua',
        callback: function(response) {
            console.log('响应', response)
        }
    }
    ajax(r)
