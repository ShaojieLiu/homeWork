// 2016/10/14
//
// ============
// 作业 13
//
//
// 本次作业如果做不出来, 可以大家一起讨论一下
// ============
//


// 作业 1
//
// 实现一个 GuaAlert 函数, 如下
var GuaAlert = function (buttClass, title, message){
    console.log('modelJump')
    var jumpPage = `
        <div class="full textcenter">
            <div class="wind textcenter shadow2 Center">
                <h1 class='alertTitt textcenter'>${title}</h1>
                <p>
                    ${message}
                </p>
                <div class="butt textcenter">
                    <button type="button" class="but-cancel shadow2">Cancel</button>
                    <button type="button" class="but-ok shadow2">OK</button>
                </div>
            </div>
        </div>`
    var jumpStyle = `
        <style media="screen">
            .wind{
                width: 300px;    height: auto;
                background-color: rgba(28, 109, 193, 0.6);
                padding-bottom: 10px;
            }
            .shadow2{
                box-shadow: 2px 2px 2px 2px;
            }
            .alertTitt{
                background-color: black;
                color: white;
                padding: 10px;
                margin-top: 0;
            }
            .wind p{
                color: white;
            }
            .but-cancel, .but-ok{
                padding: 10px;
                width: 70px;
            }
            .textcenter{
                text-align: center;
            }
        </style>`
    var bondJump = function (){
        $(`.${buttClass}`).on('click', function(){
            $('.full').toggle('none')
        })
    }
    var bondOK = function (){
        $('.but-ok').on('click', function(){
            $('.full').toggle('none')
        })
    }
    var bondCancel = function (){
        $('.but-cancel').on('click', function(){
            $('.full').toggle('none')
        })
    }

    $('head').append(jumpStyle)
    $('body').append(jumpPage)
    bondJump()
    bondOK()
    bondCancel()

}
GuaAlert('first', 'Title', `Message`)


    /*
    title 是 string
    message 是 string

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮
    点击 OK 按钮关闭弹窗
    */



// 作业 2
//
// Finished
var GuaAlert2 = function(title, message, callback) {
    /*
    title 是 string
    message 是 string
    callback 是一个接受一个 bool 类型参数的函数

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题 和 message 作为信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
}


// 作业 3
//Finished


var GuaPrompt = function(title, callback) {
    /*
    title 是 string
    callback 是一个如下的函数
    function(clickOk, input) {
        // clickOk 是一个 bool 表明点击的是 OK 还是 Cancel
        // input 是 string
    }

    这个函数生成一个上课所说的弹窗插入页面
    弹窗包含 title 作为标题
    包含一个 input 让用户输入信息
    还包含一个 OK 按钮 和一个 Cancel 按钮
    点击 OK 按钮关闭弹窗, 调用 callback(true, 输入的内容)
    点击 Cancel 按钮关闭弹窗, 调用 callback(false)
    */
}


// 作业 4
//Finished
//




var GuaActions = function(title, actions, callback) {
    /*
    title 是 string
    actions 是一个包含 string 的数组
    callback 是一个如下的函数
    function(index) {
        // index 是下标, 具体如下
        // index 如果是 -1 表明用户点击了 cancel
    }

    这个函数生成一个弹窗页面
    弹窗包含 title 作为标题
    actions 里面的 string 作为标题生成按钮
    弹窗还包含一个 Cancel 按钮
    点击按钮的时候, 调用 callback(index)
    */
}
