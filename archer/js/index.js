$(function () {
    banner();
    
});
function banner() {
    
    var isMobile = false;
    var width = $(window).width();
    if (width <= 768) {
        isMobile = true;
    }

    // 通过json获取
    // ajax异步获取
    var myData = new Array();
    myData[0] = { pc: "./images/slide_01_2000x410.jpg", mb: "./images/slide_01_640x340.jpg" };
    myData[1] = { pc: "./images/slide_02_2000x410.jpg", mb: "./images/slide_02_640x340.jpg" };
    myData[2] = { pc: "./images/slide_03_2000x410.jpg", mb: "./images/slide_03_640x340.jpg" };
    myData[3] = { pc: "./images/slide_04_2000x410.jpg", mb: "./images/slide_04_640x340.jpg" };
    
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