$(function () {
    banner();
});

function banner() {
    var isMobile = false;
    var width = $(window).width();
    if (width <= 768) {
        isMobile = true;
    }

    var myData = new Array();
    myData[0] = { pc: "./images/521.jpg", mb: "./images/640.png" };
    myData[1] = { pc: "./images/521.jpg", mb: "./images/640.png" };
    myData[2] = { pc: "./images/521.jpg", mb: "./images/640.png" };
    myData[3] = { pc: "./images/521.jpg", mb: "./images/640.png" };

        var templatePoint = _.template($("#template_point").html());
        var templateImage = _.template($("#template_image").html());
        var htmlPoint = templatePoint({ model: myData });
        var htmlImage = templateImage({ model: myData, isMobile: isMobile });

        $(".carousel-indicators").html(htmlPoint);
        $(".carousel-inner").html(htmlImage);

        $(window).on("resize",function(){
            banner();
        });
}
