$(document).ready(function () {
    
    $(".button-collapse").sideNav({
        menuWidth:"25%"
    });
    moving_boxes();
    mb_id = setInterval(moving_boxes, 3000);
    mouse_moving_boxes(mb_id);

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
var t_point = [0.6,0.3,0.0,0.3];
var l_point = [0.45, 0.80, 0.45, 0.1];
var active_ = true;
function moving_boxes() {
    if (active_) {
        $(".frame-o").each(function (index) {
            var win_wid = $(".main_").width();
            var win_hei = $(".main_").height();
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
function mouse_moving_boxes(mb_id) {
    
    $(".main_").mouseover(function (e) {
        active_ = false;
        var tgr_off = $(".main_").offset();
        var x_ = Math.round(e.clientX - tgr_off.left);
        var y_ = Math.round(e.clientY);
        $(".frame-o").each(function (index) {
            var win_wid = $(".main_").width();
            var win_hei = $(".main_").height();
            var box_wid = win_wid * 0.1;
            var box_rnd = random(50, box_wid);
            $(this).css({
                "left": x_ + "px",
                "top": y_ + "px",
                "width": box_wid + "px",
                "height": box_wid + "px",
                //"border-width": random(5, 15) + "px",

                //"border-radius": random(5, 45) + "%"
            })

        });
        $(".main_").mouseleave(function () { active_ = true });
        $("#disply_1").text(x_ + "," + y_);
        $("#disply_2").text(tgr_off.left + "," + tgr_off.top);

    });
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
