//代码如诗 , 如痴如醉 !

// 轮播图
$(function () {
    banner();
});

function banner() {
    var isMobile = false;
    var width = $(window).width();
    if (width <= 992) {
        isMobile = true;
    }

    var myData = new Array();
    myData[0] = { pc: "./images/banner_1.png", mb: "./images/banner_sm_1.png" };
    myData[1] = { pc: "./images/banner_2.png", mb: "./images/banner_sm_2.png" };
    myData[2] = { pc: "./images/banner_3.png", mb: "./images/banner_sm_3.png" };

    var templatePoint = _.template($("#template_point").html());
    var templateImage = _.template($("#template_image").html());
    var htmlPoint = templatePoint({ model: myData });
    var htmlImage = templateImage({ model: myData, isMobile: isMobile });

    $(".carousel-indicators").html(htmlPoint);
    $(".carousel-inner").html(htmlImage);

    $(window).on("resize", function () {
        banner();
    });
}

// tashu
(function ($) {
    $(document).ready(function () {
        //typed js
        $(".typed").typed({
            strings: ["TA说", "平安喜乐", "万事如意"],
            typeSpeed: 400,
            backDelay: 1100,
            // loop
            loop: true
        });
    });
})(jQuery);

// console
console.log("%c 如果你来访我 我不在 请和我门外的花坐一会儿 它们很温暖",
    "color: gray; background: rgba(0,0,0,0.1); padding:5px 0;");
console.log("%c Cnager " + "%c http://errr.me http://xgan.me",
    "color: #fff; background-image: linear-gradient(90deg, rgb(47, 172, 178) 0%, rgb(45, 190, 96) 100%); padding:5px 1px;",
    "margin: 1em 0; padding: 5px 0; background: #efefef;");
// console.log("%c Cnager " + "%c https://get233.com/archives/mirages-intro.html",
//     "color: #fff; background-image: linear-gradient(90deg, rgb(47, 172, 178) 0%, rgb(45, 190, 96) 100%); padding:5px 1px;",
//     "background-image: linear-gradient(90deg, rgb(45, 190, 96) 0%, rgb(255, 255, 255) 100%); padding:5px 0;");


// 夜间模式 未完成
function sunMoon() {
    var styleElem = null,
        doc = document,
        ie = doc.all,
        fontColor = 50,
        sel = 'body,body *';
    var styleElem = createCSS(sel, setStyle(fontColor), styleElem);
    // showTip(doc);
    if (ie) {
        doc.attachEvent('onkeydown', onKeyDown);
    } else {
        doc.addEventListener('keydown', onKeyDown);
    };
    function onKeyDown(evt) {
        if (!(evt.keyCode === 87 || evt.keyCode === 81)) return;
        var evt = ie ? window.event : evt;
        if (evt.keyCode === 87) {
            fontColor = (fontColor >= 100) ? 100 : fontColor + 10
        } else if (evt.keyCode === 81) {
            fontColor = (fontColor <= 10) ? 10 : fontColor - 10
        };
        styleElem = createCSS(sel, setStyle(fontColor), styleElem);
    };
    function setStyle(fontColor) {
        var colorArr = [fontColor, fontColor, fontColor];
        // return 'background-color:gray !important;color:RGB(' + colorArr.join('%,') + '%) !important;'
        return 'opacity: .9 !important'
    };
    function createCSS(sel, decl, styleElem) {
        var doc = document,
            h = doc.getElementsByTagName('head')[0],
            styleElem = styleElem;
        if (!styleElem) {
            s = doc.createElement('style');
            s.setAttribute('type', 'text/css');
            styleElem = ie ? doc.styleSheets[doc.styleSheets.length - 1] : h.appendChild(s);
        };
        if (ie) {
            styleElem.addRule(sel, decl);
        } else {
            styleElem.innerHTML = '';
            styleElem.appendChild(doc.createTextNode(sel + ' {' + decl + '}'));
        };
        return styleElem;
    };
    // function showTip() {
    //     var tipElem = doc.createElement('div'),
    //         body = doc.getElementsByTagName('body')[0];
    //     tipElem.innerHTML = '===夜间模式开启，q&w可增减字体亮度===';
    //     tipElem.style.cssText = 'background-color:#3FA9FB !important;color:#fff !important;font-size:14px;height:20px;line-height:20px;position:fixed;left:0;top:0;text-align:center;width:100%;z-index:99999;';
    //     body.appendChild(tipElem);
    //     setTimeout(function () {
    //         body.removeChild(tipElem);
    //     },
    //         3000);
    // }
}