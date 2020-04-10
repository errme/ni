$(document).ready(function () {
    var Wtime, Htime,C_time;
    // 网络检测
    let a = {
        b: 0,
    };
    a.b = parseInt(Math.random() * (111 - 1 + 1) + 1, 10); //随机图片下第一张图片随机 111为图片数量max 1为min

    // 模拟值(浏览器调试用参数)
    // Hitokoto=true;
    // Hitokoto_font_color="1 1 1";
    // HitokotoTime=1;
    // Hitokoto_location="0";
    // clock_location="0";
    // Hitokoto_textshadow=true;
    // Clock=true;
    // Sakura=false;
    // Particles=true;
    // userimge="";
    // CarouselTime=1;
    // CarouselStop=false;
    // UserMeans="3";
    // LinKing(Hitokoto, HitokotoTime, Hitokoto_font_color, Hitokoto_textshadow); //一言判断函数
    // getClock(Clock);
    // SUKURA(Sakura);
    // particles(Particles);
    // location(Hitokoto_location, clock_location);
    // bgSelect(UserMeans, CarouselTime, userimge, CarouselStop);
    //监听函数
    window.wallpaperPropertyListener = {
        applyUserProperties: function (properties) {
            if (properties.Hitokoto) { //一言开关
                Hitokoto = properties.Hitokoto.value;
            }
            if (properties.Hitokoto_font_color) { //一言和时间模块更改颜色
                Hitokoto_font_color = properties.Hitokoto_font_color.value;
            }
            if (properties.getHitokoto) { //一言切换时间
                HitokotoTime = properties.getHitokoto.value;
            }
            if (properties.Hitokoto_location) { //一言位置
                Hitokoto_location = properties.Hitokoto_location.value;
            }
            if (properties.clock_location) { //时间模组位置
                clock_location = properties.clock_location.value;
            }
            if (properties.Hitokoto_textshadow) { //一言文字阴影
                Hitokoto_textshadow = properties.Hitokoto_textshadow.value;
            }
            if (properties.clock) { //时钟组件
                Clock = properties.clock.value;
            }
            if (properties.sakura) { //樱花特效
                Sakura = properties.sakura.value;
            }
            if (properties.particles) { //粒子特效
                Particles = properties.particles.value;
            }
            if (properties.imge) { //本地图片
                userimge = properties.imge.value;
            }
            // if (properties.openCarousel) { //开启轮播
            //     OpenCarousel = properties.openCarousel.value;
            // }
            if (properties.carouselTime) { //轮播时间
                CarouselTime = properties.carouselTime.value;
            }
            if (properties.CarouselStop) { //轮播计时器IO
                CarouselStop = properties.CarouselStop.value;
            }
            if (properties.userMeans) { //显示方法
                UserMeans = properties.userMeans.value;
            }
            LinKing(Hitokoto, HitokotoTime, Hitokoto_font_color, Hitokoto_textshadow); //一言判断函数

            getClock(Clock);
            SUKURA(Sakura);
            particles(Particles);
            location(Hitokoto_location, clock_location);
            bgSelect(UserMeans, CarouselTime, userimge, CarouselStop);
        }
    }

    //调整一言 时钟位置的函数
    function location(Hitokoto_location, clock_location) {
        let HL = Hitokoto_location.split(","); //转换为字符串数组
        let CL = clock_location.split(",");
        CL = CL.map(Number); //转换为数字数组
        HL = HL.map(Number);
        $(".LinKing").css("top", HL[0]);
        $(".LinKing").css("left", HL[1]);
        $(".date").css("top", CL[0]);
        $(".date").css("left", CL[1]);
    }

    //一言
    function LinKing(hitokoto, hitokotoTime, Hitokoto_font_color, Hitokoto_textshadow) {
        if (hitokoto) {
            clearInterval(Htime);
            LinKingTime(hitokotoTime);
        } else if (hitokoto !== true) {
            clearInterval(Htime);
        }
        //一言字体颜色更改
        let color = Hitokoto_font_color;
        let font_color = color.split(" "); //转换为字符数组
        for (i = 0; i < 3; i++) {
            font_color[i] = font_color[i] * 255; //将值转化为可以使用的rgb值
        }
        let HFC = font_color.join(); //转换为字符串
        cssColor = "rgb(" + HFC + ")";
        $(".main").css("color", cssColor);


        if (Hitokoto_textshadow) { //控制文字阴影选项
            $('.main').css('text-shadow', 'black 0.05em 0.05em 0.1em');
        } else {
            $('.main').css('text-shadow', '');
        }
    }

    function LinKingTime(hitokotoTime) {
        Htime = setInterval(function () {
            update();
        }, hitokotoTime * 60000);
    }

    //时钟
    function getClock(clock, clock_size) {
        if (clock) {
            $("#clock").show();
        } else if (clock !== true) {
            $("#clock").hide();
        }
    }

    //樱花
    function SUKURA(Sakura) {
        if (Sakura) {
            $("#sakura").html('<script src="js/sakura.js"></script>');
        }
    }
    //粒子特效
    function particles(particle) {
        if (particle) {
            $("#particles-js").show();
        } else if (particle !== true) {
            $("#particles-js").hide();
        }
    }



    // 一言组件
    update(); //调用函数
    function update() {

        $.ajax({
            type: "GET",
            url: "https://v1.hitokoto.cn/?c=a",
            dataType: "json",
            success: function (data) {
                var Hi = data;
                // $(".hitokoto").html(Hi.hitokoto);
                // $(".hitokoto").html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-baojiaquotation2"></use></svg>' + Hi.hitokoto + '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-baojiaquotation"></use></svg>');
                $(".hitokoto").html(Hi.hitokoto);
                $(".from").html("——<b>&nbsp&nbsp" + Hi.from + "</b>"); //可自定义输出格式
            }
        });



    }
    //--------------------------------------------------------------------------------------------------------------------------------------------------
    //壁纸显示模式
    function bgSelect(UserMeans, CarouselTime, userimge, CarouselStop) { //壁纸选择

        switch (UserMeans) {
            case "1":
                clearTimeout(C_time);
                deFault();
                break;

            case "2":
                clearTimeout(C_time);
                if (userimge.length == 0) {
                    // alert("判断了图片不存在");
                    deFault();
                } else {
                    // alert("判断了图片存在");
                    UserBgImg(userimge);
                }
                break;

            case "3":
                $("body").css("background", 'url("images/76.png") no-repeat fixed');
                clearTimeout(C_time);
                imgCarousel(CarouselTime, CarouselStop);
                break;

            default:
                alert("错误")
        }
    }


    //本地壁纸
    function UserBgImg(userimge) {
        //未完成本地图片模块(只从文件夹添加一张图片)
       $("body").css("background", 'url('+"'"+ 'file:///' + userimge +"'"+') no-repeat fixed');
        // $("body").css("background", 'url('+userimge+') no-repeat fixed');
    }

    function deFault() { //默认图片
        $("body").css("background", 'url("image/testBg.png") no-repeat fixed');
    }


    // 本地图片轮播
    function imgCarousel(CarouselTime, CarouselStop) {
        k = -1;
        function Imageswitching() {
            //建立数组
            var team = new Array();
            for (var i = 1; i < 112; i++) { //数字比真实图片数多1
                team.push(i);
            }
            //随机排列数组
            var res = [];
            for (var i = 0, len = team.length; i < len; i++) {
                // 随机叫个
                var randomIndex = Math.floor(Math.random() * team.length);
                // 出列到新队伍
                res[i] = team[randomIndex];
                // 原来的队伍人越来越少，因此上面的 randomIndex 需要实时获取 team.length
                team.splice(randomIndex, 1);
            }
            res[0] = a.b;
            // alert(res[i]);
            k++;
            // a.i=i;
            if (k > 112) { //74为图片数量
                k = 0;
            }      
            a.b = res[k];
            $("body").css("background", 'url(' + 'images/' + res[k] + ".png" + ') no-repeat fixed');
        }
        var timeout = CarouselStop;
        var Ctime = CarouselTime * 60000; //启动及关闭按钮
        function time() {
            if (timeout) {
                $("body").css("background", 'url(' + 'images/' + a.b + ".png" + ') no-repeat fixed');
                // Imageswitching();
                clearTimeout(C_time);
                return;
            }
            Imageswitching();
            C_time = setTimeout(time, Ctime); //time是指本身,延时递归调用自己,100为间隔调用时间,单位毫秒
        }
        time(); //执行time函数
    }

});