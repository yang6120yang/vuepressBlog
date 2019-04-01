# 常用方法一

## 1. PC - js

- 返回指定范围的随机数(m-n 之间)的公式

```javascript
Math.random() * (n - m) + m;
```

- [return false](http://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false)
- [return false](http://www.75team.com/archives/201)

```javascript
// event.preventDefault()会阻挡预设要发生的事件.
// event.stopPropagation()会阻挡发生冒泡事件.
// 而return false则是前面两者的事情他都会做：
// 他会做event.preventDefault();
// 他会做event.stopPropagation();
// 停止callback function的执行并且立即return回来
```

- 复制文本到剪切板

```javascript
function copyToClipboard(data) {
  const _tempInput = document.createElement("input");
  _tempInput.value = data.value;
  document.body.appendChild(_tempInput);
  _tempInput.select();
  document.execCommand("Copy");
  document.body.removeChild(_tempInput);
}
```

- 前端生成文件并下载

```javascript
function createAndDownloadFile(fileName, content) {
  const aTag = document.createElement("a");
  const blob = new Blob([content]);
  aTag.download = `${fileName}.json`;
  aTag.href = URL.createObjectURL(blob);
  aTag.click();
  URL.revokeObjectURL(blob);
}
```

- 高亮文本

```javascript
function highlight(text, words, tag = "span") {
  let i,
    len = words.length,
    re;
  for (i = 0; i < len; i++) {
    re = new RegExp(words[i], "g");
    if (re.test(text)) {
      text = text.replace(
        re,
        "<" + tag + ' class="highlight">$&</' + tag + ">"
      );
    }
  }
  return text;
}
```

- 限制文本字数

```javascript
function excerpt(str, nwords) {
  let words = str.split(" ");
  words.splice(nwords, words.length - 1);
  return words.join(" ") + (words.length !== str.split(" ").length ? "…" : "");
}
```

- 简单创建动态菜单下拉列表

```javascript
function createMenu(items, tags = ["ul", "li"]) {
  const parent = tags[0];
  const child = tags[1];
  let item,
    value = "";
  for (let i = 0, l = items.length; i < l; i++) {
    item = items[i];
    if (/:/.test(item)) {
      item = items[i].split(":")[0];
      value = items[i].split(":")[1];
    }
    items[i] =
      "<" +
      child +
      " " +
      (value && 'value="' + value + '"') +
      ">" +
      item +
      "</" +
      child +
      ">";
  }
  return "<" + parent + ">" + items.join("") + "</" + parent + ">";
}
```

- 防止被 Iframe 嵌套

```javascript
if(top != self){
    location.href = ”about:blank”;
}
```

- 两种图片 lazy 加载的方式
  第一个 By JS 中级交流群 成都-猎巫 第二个 By 上海-zenki

```javascript
// @description 准备为图片预加载使用的插件
// 使用的图片容器css类名为lazy-load-wrap
// 图片真实地址为data-lazy-src
// 当lazy-load-wrap容器进入视口，则开始替换容器内所有需要延迟加载的图片路径，并更改容器的加载状态
//第一种方法
$.fn.compassLazyLoad=function(){
    var _HEIGHT=window.innerHeight,
    _lazyLoadWrap=$('.lazy-load-wrap');
    var methods={
        setOffsetTop:function(){
            $.each(_lazyLoadWrap,function(i,n){
                $(n).attr({
                    'top':n.offsetTop-_HEIGHT,
                    'status':'wait'
                });
            })
        },
        isShow:function(){
            var _scrollTop=$(window).scrollTop;
            //利用image容器判断是否进入视口，而非image本身
            $.each(_lazyLoadWrap,function(){
                var _that=$(this);
                if (_that.attr('status')==='done') {
                    return;
                };
                if (_that.attr('top')<=_scrollTop) {
                    _that.find('img[data-lazy-src]').each(function(i,n){
                        n.src=$(n).data('lazy-src');
                    });
                    _that.attr('status','done');
                };
            })
        },
        scroll:function(){
            $(window).on('scroll',function(){
                methods.isShow();
            });
        },
        init:function(){
            methods.setOffsetTop();
            methods.isShow();
            methods.scroll();
        }
    };
    methods.init();
}


//第二种方法

var exist=(function($){
    var timer=null,
    temp=[].slice.call($('.container'));
    ret={};

    for(var i=0,len=temp.length-1;i<=len;i++){
        ret[i]=temp[i];
    }
    var isExist=function(winTop,winEnd){
        for(var i in ret){
            console.log(ret);
            var item=ret[i],
            eleTop=item.offsetTop,
            eleEnd=eleTop+item.offsetHeight;

            if((eleTop>winTop&&eleTop<=winEnd)||(eleEnd>winTop&&eleEnd<=winEnd)){
                $(item).css('background','none');
                new Tab($(item).attr('id'),data).init;
                delete ret[i];
            }
        }
    }
    return {
        timer:timer;
        isExist:isExist;
    };
})($);

//第三种方法
Zepto(function ($) {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        loop: true,
        autoplayDisableOnInteraction: false
    });
    (function lazyLoad() {
        var imgs = $(".lazyLoad");
        var src = '';
        $.each(imgs, function (index, item) {
            src = $(item).attr('data-src');
            $(item).attr('src', src);
        });
    })();
});
$(function () {
    var lazyLoadTimerId = null;
    /// 智能加载事件
    $(window).bind("scroll", function () {
        clearTimeout(lazyLoadTimerId);
        lazyLoadTimerId = setTimeout(function () {
            // 延迟加载所有图片
            var isHttp = (location.protocol === "http:");
            $("#ym_images img").each(function () {
                var self = $(this);
                if (self.filter(":above-the-fold").length > 0) {
                    var originUrl = self.attr("data-original");
                    self.attr("src", originUrl);
                }
            });
        }, 500);
    });
});

```

- 某年某月的 1 号为星期几

```javascript
var weekday = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
];
weekday[new Date(2015, 9, 1).getDay()]; //2015年10月1号
```

## 2. Mobile - js

- [js 判断 IOS, 安卓](http://caibaojian.com/browser-ios-or-android.html)

```javascript
var u = navigator.userAgent,
  app = navigator.appVersion;
var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Linux") > -1; //android终端或者uc浏览器
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
alert("是否是Android：" + isAndroid);
alert("是否是iOS：" + isiOS);
```

## 3. [微信 weixin](http://loo2k.com/blog/detecting-wechat-client/)

- UserAgent 判断微信客户端

```javascript
// Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12F70 MicroMessenger/6.1.5 NetType/WIFI
function isWechat() {
  var ua = navigator.userAgent.toLowerCase();
  return /micromessenger/i.test(ua) || /windows phone/i.test(ua);
}
```

- 获取单个 dom 元素

```js
function $(selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelector(selector);
}
```

- 获取多个 dom 元素

```js
function $$(selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelectorAll(selector);
  // Note: the returned object is a NodeList.
  // If you'd like to convert it to a Array for convenience, use this instead:
  // return Array.prototype.slice.call(el.querySelectorAll(selector));
}
```

- 将 nodeList 集合转换为数组

```js
function convertToArray(nodeList) {
  var array = null;
  try {
    // IE8-NodeList是COM对象
    array = Array.prototype.slice.call(nodeList, 0);
  } catch (err) {
    array = [];
    for (var i = 0, len = nodeList.length; i < len; i++) {
      array.push(nodeList[i]);
    }
  }
  return array;
}
```

- ajax 函数

```js
function ajax(setting) {
  //设置参数的初始值
  var opts = {
    method: (setting.method || "GET").toUpperCase(), //请求方式
    url: setting.url || "", // 请求地址
    async: setting.async || true, // 是否异步
    dataType: setting.dataType || "json", // 解析方式
    data: setting.data || "", // 参数
    success: setting.success || function() {}, // 请求成功回调
    error: setting.error || function() {} // 请求失败回调
  };

  // 参数格式化
  function params_format(obj) {
    var str = "";
    for (var i in obj) {
      str += i + "=" + obj[i] + "&";
    }
    return str
      .split("")
      .slice(0, -1)
      .join("");
  }

  // 创建ajax对象
  var xhr = new XMLHttpRequest();

  // 连接服务器open(方法GET/POST，请求地址， 异步传输)
  if (opts.method == "GET") {
    xhr.open(
      opts.method,
      opts.url + "?" + params_format(opts.data),
      opts.async
    );
    xhr.send();
  } else {
    xhr.open(opts.method, opts.url, opts.async);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(opts.data);
  }

  /*
   ** 每当readyState改变时，就会触发onreadystatechange事件
   ** readyState属性存储有XMLHttpRequest的状态信息
   ** 0 ：请求未初始化
   ** 1 ：服务器连接已建立
   ** 2 ：请求已接受
   ** 3 : 请求处理中
   ** 4 ：请求已完成，且相应就绪
   */
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) {
      switch (opts.dataType) {
        case "json":
          var json = JSON.parse(xhr.responseText);
          opts.success(json);
          break;
        case "xml":
          opts.success(xhr.responseXML);
          break;
        default:
          opts.success(xhr.responseText);
          break;
      }
    }
  };

  xhr.onerror = function(err) {
    opts.error(err);
  };
}
```

- JS 接口安全域名不填写，分享 onMenuShareAppMessage 直接会取默认值。

```javascript
// 分享onMenuShareAppMessage直接会取默认值
```

- 关闭当前页面

```javascript
WeixinJSBridge.call("closeWindow");
```

- [支付接口方法调用必须在 addevent 里边调用](http://www.cnblogs.com/true_to_me/p/3565039.html)

```javascript
document.addEventListener(
  "WeixinJSBridgeReady",
  function onBridgeReady() {
    that.initOrder();
  },
  false
);
```

- 支付接口方法调用必须在

```javascript
WeixinJSBridge.invoke("getBrandWCPayRequest", d, function(res) {
  if (res.err_msg == "get_brand_wcpay_request:ok") {
    // alert("支付成功");
    // union.release(d.orderId);
    resetUrl();
    paySuccess("home", d.orderId);
  } else {
    cancelOrder(d.orderId);
    // alert(res.err_msg);
  }
  loading.hide();
});
```

- 瀑布流无限加载实例

```javascript
// be dependent on jquery & jquery.infinitescroll.min.js
// insert this '<div id="more"><a href="api?page="></a></div>' to your page.html
(function($) {
  $(function() {
    var $container = $(".list-wrap-gd");
    function layOutCallBack() {
      $container.imagesLoaded(function() {
        $container.masonry({
          itemSelector: ".item-bar",
          gutter: 10
        });
      });
      $container.imagesLoaded().progress(function() {
        $container.masonry("layout");
      });
    }

    layOutCallBack();

    $container.infinitescroll(
      {
        navSelector: "#more",
        nextSelector: "#more a",
        itemSelector: ".item-bar",
        pixelsFromNavToBottom: 300,
        loading: {
          img: "/images/masonry_loading.gif",
          msgText: " ",
          finishedMsg: "<em>已经到最后一页</em>",
          finished: function() {
            $("#more").remove();
            $("#infscr-loading").hide();
          }
        },
        errorCallback: function() {
          $(window).unbind(".infscr");
        },
        pathParse: function(path, nextPage) {
          var query = "";
          var keyword = $("#search_keyword").val();
          var cat_id = $("#cat_id").val();
          var brand_id = $("#brand_id").val();
          var country_id = $("#country_id").val();
          query = query + "&namekeyword=" + keyword;
          query = query + "&cat_id=" + cat_id;
          query = query + "&brand_id=" + brand_id;
          query = query + "&country_id=" + country_id;
          path = [path, query];
          return path;
        }
      },

      function(newElements) {
        var $newElems = $(newElements).css({ opacity: 0 });
        $newElems.imagesLoaded(function() {
          $newElems.animate({ opacity: 1 });
          $container.masonry("appended", $newElems, true);
          layOutCallBack();
        });
      }
    );
  });
})(jQuery);
```

- [iOS，Safari 浏览器，input 等表单 focus 后 fixed 元素错位问题](https://www.snip2code.com/Snippet/176582/--iOS-Safari----input---focus-fixed-----)

```javascript
if (/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
  $(document).on("focus", "input, textarea", function() {
    $("header").css("position", "absolute");
    $("footer").css("position", "absolute");
  });

  $(document).on("blur", "input, textarea", function() {
    $("header").css("position", "fixed");
    $("footer").css("position", "fixed");
  });
}
```

- 得到地理位置

```javascript
function getLocation(callback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(p) {
        callback(p.coords.latitude, p.coords.longitude);
      },
      function(e) {
        var msg = e.code + "\n" + e.message;
      }
    );
  }
}
```

- [rem 计算适配](http://isux.tencent.com/web-app-rem.html)

```javascript
(function(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 20 * (clientWidth / 320) + "px";
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
```

- [另外一种 rem 方案](http://www.html-js.com/article/3041)

```javascript
var dpr, rem, scale;
var docEl = document.documentElement;
var fontEl = document.createElement("style");
var metaEl = document.querySelector('meta[name="viewport"]');

dpr = window.devicePixelRatio || 1;
rem = (docEl.clientWidth * 2) / 10;
scale = 1 / dpr;

// 设置viewport，进行缩放，达到高清效果
metaEl.setAttribute(
  "content",
  "width=" +
    dpr * docEl.clientWidth +
    ",initial-scale=" +
    scale +
    ",maximum-scale=" +
    scale +
    ", minimum-scale=" +
    scale +
    ",user-scalable=no"
);

// 设置data-dpr属性，留作的css hack之用
docEl.setAttribute("data-dpr", dpr);

// 动态写入样式
docEl.firstElementChild.appendChild(fontEl);
fontEl.innerHTML = "html{font-size:" + rem + "px!important;}";

// 给js调用的，某一dpr下rem和px之间的转换函数
window.rem2px = function(v) {
  v = parseFloat(v);
  return v * rem;
};
window.px2rem = function(v) {
  v = parseFloat(v);
  return v / rem;
};

window.dpr = dpr;
window.rem = rem;
```

- 获取 js 所在路径

```js
function getJsDir(src) {
  var script = null;

  if (src) {
    script = [].filter.call(document.scripts, function(v) {
      return v.src.indexOf(src) !== -1;
    })[0];
  } else {
    script = document.scripts[document.scripts.length - 1];
  }

  return script ? script.src.substr(0, script.src.lastIndexOf("/")) : script;
}
```

- 页面加载自执行函数

```js
function addload(func) {
  var old = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function() {
      old();
      func();
    };
  }
}
```

- 从全局捕获错误

```js
window.onerror = function(
  errMsg,
  scriptURI,
  lineNumber,
  columnNumber,
  errorObj
) {
  setTimeout(function() {
    var rst = {
      "错误信息：": errMsg,
      "出错文件：": scriptURI,
      "出错行号：": lineNumber,
      "出错列号：": columnNumber,
      "错误详情：": errorObj
    };

    alert(JSON.stringify(rst, null, 10));
  });
};
```

- [如何通过 js 修改微信浏览器的 title?](https://www.zhihu.com/question/26228251/answer/32405529)

```javascript
var $body = $("body");
document.title = "title"; // hack在微信等webview中无法修改document.title的情况
var $iframe = $('<iframe src="/favicon.ico"></iframe>')
  .on("load", function() {
    setTimeout(function() {
      $iframe.off("load").remove();
    }, 0);
  })
  .appendTo($body);
```
