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
    myData[2] = { pc: "./images/521.jpg", mb: "./images/banner_sm_3.png" };

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
