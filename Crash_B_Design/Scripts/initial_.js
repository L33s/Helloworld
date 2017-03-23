$(document).ready(function () {
    
    $(".button-collapse").sideNav({
        menuWidth:"25%"
    });
    $('.parallax').parallax();
    moving_boxes();
    mb_id = setInterval(moving_boxes, 3000);
    alertSize()
})
var resize_id,scroll_id=true;
$(window).resize(function () {
    clearTimeout(resize_id);
    resize_id = setTimeout(alertSize(), 500);
});
$(window).scroll(function () {
    if (scroll_id==true) {
        scroll_id = false;
        scroll_page();
        setTimeout(function () {scroll_id=true}, 500);
    }
    
    
})
function random_moving_boxes() {
    $(".frame-o").each(function (index) {
        var win_wid = $(".main_").width();
        var win_hei = $(".main_").height();
        var box_wid = win_wid * 0.4;
        var box_rnd = random(50, box_wid);
        $(this).css({
            "left": random(30, win_wid - box_wid - 30) + "px",
            "top": random(30, win_hei - box_wid) + "px",
            "width": box_rnd + "px",
            "height": box_rnd + "px",
            //"border-width": random(5, 15) + "px",
            "transform": "rotate(" + random(0, 360) + "deg)",
            //"border-radius": random(5, 45) + "%"
        })
    });

}
//var t_point = [0.8,0.0,0.0,0.8];
//var l_point = [0.1, 0.1, 0.8, 0.8]; //4 angle
var t_point = [0.8, 0.0, 0.8, 0.0];
var l_point = [0.1, 0.1, 0.8, 0.8];
var active_ = true;
function moving_boxes() {
    if (active_) {
        $(".frame-o").each(function (index) {
            var win_wid = $(".main_").width();
            var win_hei = $(".parallax-container").height();
            var box_wid = win_wid * 0.1;
            var box_rnd = random(50, box_wid);
            $(this).css({
                "left": (win_wid * l_point[index]) + "px",
                "top": (win_hei * t_point[index]) + "px",
                "width": box_wid + "px",
                "height": box_wid + "px",
                //"border-width": random(5, 15) + "px",
                "transform": "rotate(" + random(0, 360) + "deg)"
                //"border-radius": random(5, 45) + "%"
            })

        });
        var tmp = l_point[0];
        var tmp_ = t_point[0];
        for (i = 0; i < $(".frame-o").length; i++) {
            l_point[i] = l_point[i + 1];
            t_point[i] = t_point[i + 1];
        }
        l_point[$(".frame-o").length - 1] = tmp;
        t_point[$(".frame-o").length - 1] = tmp_;
    }
    
}
var pre_position=0,counter=0;
function scroll_page(){
    var myHeight = 0;
    var cur_position = $(window).scrollTop();
    if( typeof( window.innerWidth ) == 'number' ) {
        //Non-IE
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        myHeight = document.body.clientHeight;
    }
    if (cur_position < pre_position) { counter -= 1; } else { counter += 1; }
    $('html,body').animate({ scrollTop: myHeight * counter }, 300);
    pre_position = myHeight * counter;
}
function alertSize() {
    var myHeight = 0;
    if( typeof( window.innerWidth ) == 'number' ) {
        //Non-IE
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        myHeight = document.body.clientHeight;
    }
    $(".parallax-container").css({
        "height": myHeight + "px"
    })
    $(".resizeable").css({
        "height":  myHeight+ "px",
       
    })
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
