$(document).ready(function () {
    function date() {
        var y = new Date(),
            m = new Date(),
            d = new Date(),
            h = new Date(),
            tDay = d.getDate();
        tYear = y.getFullYear();
        tMonth = m.getMonth();
        tHours = h.getHours();
        if (tDay < 10) {
            day = '0' + tDay;
        } else {
            day = tDay;
        }

        switch (tMonth) {
            case 0:
                month = "JAN";
                break;
            case 1:
                month = "FEB";
                break;
            case 2:
                month = "MAR";
                break;
            case 3:
                month = "APR";
                break;
            case 4:
                month = "MAY";
                break;
            case 5:
                month = "JUN";
                break;
            case 6:
                month = "JUL";
                break;
            case 7:
                month = "AUG";
                break;
            case 8:
                month = "SEP";
                break;
            case 9:
                month = "OCT";
                break;
            case 10:
                month = "NOV";
                break;
            case 11:
                month = "DEC";
                break;
        }

        if (tHours >= 6 && tHours < 11) {
            $(".hour").html("早上好！");
        } else if (tHours >= 11 && tHours < 14) {
            $(".hour").html("中午好！");
        } else if (tHours >= 14 && tHours < 17) {
            $(".hour").html("下午了！");
        } else if (tHours >= 17 && tHours < 20) {
            $(".hour").html("傍晚了！");
        } else if (tHours >= 20 && tHours < 23) {
            $(".hour").html("晚上了！");
        } else if (tHours >= 23 && tHours < 24) {
            $(".hour").html("晚安！");
        } else if (tHours >= 0 && tHours < 6) {
            $(".hour").html("凌晨了！");
        }
        // alert(tYear + month + day);
        $('#day').html(day);
        $('#month').html(month);
        $('#year').html(tYear);
        
    }
    setInterval(function(){date()},1000);
});