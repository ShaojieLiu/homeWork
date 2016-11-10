//
// 在 vip.cocode.cc:3000/ 可以写代码, 实现一个用 ajax 和后端交互数据的 todo
//
//
// todo 后端程序提供了 4 个 API, 说明如下
//
//
// 1, 获得所有的 todo, 返回的是一个数组
//
// GET
// http://vip.cocode.cc:3000/todo/<你的qq号>/all
//
//
// 2, 发送 JSON 格式字符串来创建一个 todo
// 要求设置 Content-Type 为 application/json
//
// POST
// {"task": "study"}
// http://vip.cocode.cc:3000/todo/<你的qq号>/add
//
//
// 3, 发送 JSON 格式字符串来更新一个 todo
// 要求设置 Content-Type 为 application/json
//
// POST
// {"task": "study"}
// http://vip.cocode.cc:3000/todo/<你的qq号>/update/<todo_id>
//
//
// 4, 删除一个 todo
// GET
// http://vip.cocode.cc:3000/todo/<你的qq号>/delete/<todo_id>
//

    var head = document.querySelector('head')
    head.insertAdjacentHTML(`beforeend`, `<style media="screen">
        *{
            margin: 2px;
            /*border-style: dotted;
            border-width: thin;*/
        }
        .main {
            /*background-color: rgba(139, 237, 115, 0.4);*/
            /*border-radius: 5px;
            box-shadow: 2px 2px 2px 2px;*/
            width: 520px;
            /*height: auto;
            display: block;*/
        }
        .typeArea input {
            display: inline-block;
            border-radius: 5px;
            position: absolute;
            width: 400px;
            margin-left: 10px;
        }

        .listTxt {
            color: inherit;
            /*border-color: blue;
            border-style: dotted;
            border-width: thin;*/
            /*background-color: rgb(150, 195, 242);*/
            /*display: inline-block;*/
            /*position: absolute;*/
            /*min-width: 500px;*/
        }

        .listArea {
            display: block;
            position: absolute;
            min-width: 700px;
            background-color: rgba(81, 113, 249, 0.8);
            border-radius: 5px;
            box-shadow: 2px 2px 2px 2px;
            /*min-width: 500px;*/
        }
        .listCell {
            width: auto;
            display: block;
            color: white;
            padding:2px;
            border-width: 0 0 1px 0;
            border-style:dotted;
        }
        button {
            background-color: rgba(210, 247, 200, 0.68);
            color: black;
            border-radius: 5px;
            box-shadow: 1px 1px 1px 1px lightgray;
        }
        .comp {
            text-decoration: line-through;;
            color: rgba(0, 0, 0, 0.4);
            background-color: gray;
        }
    </style>`)
    var main = document.querySelector('body')
    main.insertAdjacentHTML(`afterbegin`, `<div class="main">
        <div class="typeArea">
            <button type="button" name="tmjw">添加</button>
            <input type="text" name="uuru" value="输入待办事件">
        </div>
        <div class="listArea" id="listArea">
            <!-- <div class="listCell">
                <button type="button" name="wjig">完成</button>
                <button type="button" name="ujiu">删除</button>
                <span class="listTxt" contenteditable='true'>点击我也可进行编辑</span>
            </div> -->
        </div>
    </div>`)
    var log = function() {console.log.apply(console, arguments)}
    var typeArea = document.querySelector('.typeArea')
    var typeInput = document.querySelector('.typeArea input')
    var listArea = document.querySelector('.listArea')
    var list = []
    // log(typeInput)
    // 按钮 '添加' '文本框'
    var bindClkType = function() {
        typeArea.addEventListener('click', function() {
        if (event.target.name == 'tmjw') {
        // log('点击添加')
            tmjw()
        // log(list)
        } else if (event.target.name == 'uuru') {
            event.target.select()
        }
        // saveList()
        })
    }
    // 回车
    var bindEntType = function () {
        typeInput.addEventListener('keydown', function() {
        if (event.key == 'Enter') {
            tmjw()
        }
        })
    }
    var bl = function() {
        log('blur')
        var self = event.target
        event.preventDefault()
        //以前时间没有分开显示的时候
        // var str = self.innerHTML.slice(24)
        var id = self.parentElement.id
        var str = self.innerHTML
        log(id, str)
        updList(id, str)
        // list[indexOfEle(self)].task = str
        // saveList()
        self.contentEditable='false'
        typeInput.focus()
    }
    var enter = function() {
        if (event.key == 'Enter') {
            bl(event)
        }
    }
    var bindEntList = function() {
        listArea.addEventListener('keydown', enter)
    }
    // listArea.addEventListener('blur', enter)
    // 按钮 '完成' '删除' '编辑'
    var bindClkList = function() {
        listArea.addEventListener('click', function() {
        var self = event.target
        var index = indexOfEle(self)
        if (self.name == 'wjig') {
            self.parentElement.classList.toggle('comp')
            list[index].stat *= -1
            log('状态-1为完成', list[index].stat)
        } else if (self.name == 'ujiu') {
            log('已删除', self.parentElement.children[4].innerHTML)
            var id = self.parentElement.id
            delList(id)
            // list.splice(index, 1)
            // self.parentElement.remove()
        } else if (self.name == 'bmji') {
            log('bmji',self.parentElement.children[4])
            self.parentElement.children[4].contentEditable='true'
            self.parentElement.children[4].focus()
        }
        // saveList()
        })
    }
    //事件单元的模板
    var tmjw = function () {
        var txt = typeInput.value
        // var todo = {task: typeInput.value}
        // var s = JSON.stringify(todo)
        addList(txt)
        // listArea.insertAdjacentHTML('afterbegin', templateTodo(time, txt))
        // var txts = document.querySelectorAll('.listCell span')
        // var tt = txts[0]
        // tt.addEventListener('blur', bl)
    }
    var templateTodo = function (time, txt, id, stat = 1) {
        var isComp = ''
        if (stat == -1) {isComp = 'comp'}
        var text = `
        <div class="listCell ${isComp}" id="${id}">
            <button type="button" name="wjig">完成</button>
            <button type="button" name="ujiu">删除</button>
            <button type="button" name="bmji">编辑</button>
            <span class="listTxt" contenteditable='false'>${time} ~~~ </span>
            <span class="listTxt" contenteditable='false'>${txt}</span>

        </div>`
        saveList()
        return text
    }
    var indexOfEle = function (self) {
        var p = self.parentElement
        var c = p.parentElement.children
        for (var i = 0; i < c.length; i++) {
            if (c[i] == p) {
                return c.length - 1 - i
            }
        }
    }
    var loadList = function () {
        console.log('load')
        var loadAll = function () {
            var get = new XMLHttpRequest()
            get.open('GET', 'http://vip.cocode.cc:3000/todo/439655668/all', true)
            get.setRequestHeader('Content-Type', 'application/json')
            get.onreadystatechange = function () {
                console.log('getting')
                if (get.readyState == 4) {
                    while(listArea.hasChildNodes()) {
                        listArea.removeChild(listArea.firstChild);
                    }
                    var list = JSON.parse(get.response)
                    console.log('loading', list)
                    for (var x of list) {
                        var txt = x.task
                        var t = new Date(x.created_time)
                        var time = `${t.getMonth()+1}月${t.getDate()}日${t.getHours()}时${t.getMinutes()}分${t.getSeconds()}秒`
                        var stat = 1
                        var id = x.id
                        listArea.insertAdjacentHTML('afterbegin', templateTodo(time, txt, id, stat))
                    }
                    var txts = document.querySelectorAll('.listCell span')
                    for (let x of txts) {
                        x.addEventListener('blur', bl)
                    }
                }
            }
            get.send()
        }
        loadAll()
    }
    var saveList = function () {
        // var s = JSON.stringify(list)
        // localStorage.list = s
        // console.log('list',list)
        // var test = JSON.stringify({"task": `${list.task}`})
        // addList(test)
    }
    var getAll = function () {
        var getList = new XMLHttpRequest()
        getList.open('GET', 'http://vip.cocode.cc:3000/todo/439655668/all', true)
        getList.setRequestHeader('Content-Type', 'application/json')
        getList.onreadystatechange = function () {
            if (getList.readyState == 4) {
                var list = JSON.parse(getList.response)
                console.log('getting', list)
                return list
            }
        }
        getList.send()
    }
    var delList = function (id) {
        var delList = new XMLHttpRequest ()
        delList.open('GET', `http://vip.cocode.cc:3000/todo/439655668/delete/${id}`, true)
        delList.setRequestHeader('Content-Type', 'application/json')
        delList.onreadystatechange = function () {
            if (delList.readyState == 4) {
                console.log('del', delList)
                loadList()
            }
        }
        delList.send()
    }
    var updList = function (id, task) {
        var updList = new XMLHttpRequest ()
        updList.open('POST', `http://vip.cocode.cc:3000/todo/439655668/update/${id}`, true)
        updList.setRequestHeader('Content-Type', 'application/json')
        updList.onreadystatechange = function () {
            if (updList.readyState == 4) {
                console.log('updating', updList)
                loadList()
            }
        }
        updList.send(`{"task": "${task}"}`)
    }
    var addList = function (task) {
        var postList = new XMLHttpRequest ()
        postList.open('POST', 'http://vip.cocode.cc:3000/todo/439655668/add', true)
        postList.setRequestHeader('Content-Type', 'application/json')
        postList.onreadystatechange = function () {
            if (postList.readyState == 4) {
                console.log('adding', postList)
                loadList()
            }
        }
        postList.send(`{"task": "${task}"}`)
    }
    var delMany = function (begin, end) {
        for (var i = begin; i < end+1; i++) {
            delList(i)
        }
        }
        // addList('写作业')
        // getAll()
        // updList(5, 'clear')
        // getAll()
        // delMany(4, 31)
    var __main = function () {
        bindClkType()
        bindEntType()
        bindClkList()
        bindEntList()
        loadList()
        typeInput.focus()
        typeInput.select()
    }
    __main()
