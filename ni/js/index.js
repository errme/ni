// by : canger


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
console.log("\n %c 欢迎来到 http://errr.me 站长：苍耳  %c 如果你来访我 我不在 请和我门外的花坐一会儿 它们很温暖 \n\n",
    "color: white; background: rgba(0,0,0,0.2); padding:5px 0;",
    "color: gray; background: rgba(0,0,0,0.1); padding:5px 0;");
