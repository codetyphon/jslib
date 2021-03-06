//事件绑定
var bind = function (object, type, fn) {
    if (object.attachEvent) {//IE浏览器
        object.attachEvent("on" + type, (function () {
            return function (event) {
                window.event.cancelBubble = true;//停止时间冒泡
                object.attachEvent = [fn.apply(object)];//----这里我要讲的是这里
            }
        })(object), false);
    } else if (object.addEventListener) {//其他浏览器
        object.addEventListener(type, function (event) {
            event.stopPropagation();//停止时间冒泡
            fn.apply(this)
        });
    }
};


//创建script标签
function loadScript(sUrl) {
    var _script = document.createElement('script');
    _script.setAttribute('type', 'text/javascript');
    _script.setAttribute('src', sUrl);
    document.getElementsByTagName('head')[0].appendChild(_script);
}
/**
 * 获取鼠标在页面上的位置
 * @param ev 触发的事件
 * @return    x:鼠标在页面上的横向位置, y:鼠标在页面上的纵向位置
 */
function getMousePoint(ev) {
    var point = {
        x: 0,
        y: 0
    };

    if (typeof window.pageYOffset != 'undefined') {
        point.x = window.pageXOffset;
        point.y = window.pageYOffset;
    }
    else if (typeof document.compatMode != 'undefined' && document.compatMode != 'BackCompat') {
        point.x = document.documentElement.scrollLeft;
        point.y = document.documentElement.scrollTop;
    }
    else if (typeof document.body != 'undefined') {
        point.x = document.body.scrollLeft;
        point.y = document.body.scrollTop;
    }

    point.x += ev.clientX;
    point.y += ev.clientY;

    return point;
};
/**
 * 鼠标划过
 * 注意浏览器兼容问题
 * @cursorPos 获取鼠标位置
 */
var _COLLECT_TEXT;
var _COLLECT_TEXT_len = '';
function GetSelectedText (cursorPos){

    var text,len;
    // all browsers, except IE before version 9
    if (window.getSelection){
        var range = window.getSelection();
        text = range.toString();
        text=text.slice(0,117)+'...';
        len = text.length;

    } else {
        // Internet Explorer
        if (document.selection){
            var range = document.selection.createRange();
            text = range.text;
            text=text.slice(0,117)+'...';
            len = text.length;

        }
    }
    //console.log(text);
    if('' != text){
        _COLLECT_TEXT = text;
    }

    if(_COLLECT_TEXT_len != len){
        collectModule(len,cursorPos);
    }

    _COLLECT_TEXT_len = len;

};
/**
 * 添加事件
 * @param node		监听对象
 * @param type		监听类型
 * @param listener	触发事件
 * @return			事件是否添加成功
 */
function addEvent(node, type, listener){
    if(node.addEventListener){
        node.addEventListener(type, listener, false);
        return true;
    } else if(node.attachEvent){
        node['e' + type + listener] = listener;
        node[type + listener] = function(){
            node['e' + type + listener](window.event);
        };
        node.attachEvent('on' + type, node[type + listener]);
        return true;
    }
    return false;
};


//var cnt_Main_Article = document.getElementById('Cnt-Main-Article-QQ');
addEvent(cnt_Main_Article, 'mouseup', function(ev){
    var cursorPos = getMousePoint(ev), d;
    GetSelectedText(cursorPos);
    scTools.style.background = '#fff';
}); 


/*绑定事件以后的用法*/

document.body.onclick = function(e){
var e = e || window.event;
var target = e.target || e.srcElement;
if(target.id == 's_ewm'){
    //
}else{
    //
 	}
}
