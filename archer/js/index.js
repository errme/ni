$(function () {
    banner();

});
function banner() {

    // 通过json获取
    // ajax异步获取
    var maData;
    var getData = function (callback) {
        $.ajax({
            url: "js/index.json",
            type: "get",
            data: {},
            dataType: "json",
            success: function (data) {
                myData = data;
                callback && callback(myData);
            }
        })
    }

    // 生成页面代码
    var render = function () {
        var isMobile = false;
        var width = $(window).width();
        if (width <= 768) {
            isMobile = true;
        }
        getData(function (data) {
            var templatePoint = _.template($("#template_point").html());
            var templateImage = _.template($("#template_image").html());
            var htmlPoint = templatePoint({ model: myData });
            var htmlImage = templateImage({ model: myData, isMobile: isMobile });

            $(".carousel-indicators").html(htmlPoint);
            $(".carousel-inner").html(htmlImage);
        });

    }

    render();
    $(window).on("resize", function () {
        banner();
    });

}