$(document).ready(function () {
    var i = 1;
    var typing_tmp = 'Developer.   Programmer.   Designer.';
    //var typing_tmp = 'I'+"'"+'ve a passion for programming and UI/UX design.';
    var loop = true;
    function typing_D() {
        if (loop) {
            setTimeout(function () {
                $("#typing_D").text(typing_tmp.substring(0, i) );
                i++;
                if (i <= typing_tmp.length) {
                    typing_D();
                } else {
                    setTimeout(function () { loop = false;detyping_D()}, 2000);
                }
            }, 100)
        }
    }
    function detyping_D() {
        if (!loop) {
            setTimeout(function () {
                $("#typing_D").text(typing_tmp.substring(0, i));
                i--;
                if (i >= 0) {
                    detyping_D();
                } else {
                    setTimeout(function () { loop = true;typing_D() }, 2000);
                }
            }, 100)
        }
    }
    function Insert_D() {
        var trg = true;
        setInterval(function () {
            if (trg) {
                $("#insert_D").css('opacity', '0.2');
                trg = false;
            } else {
                $("#insert_D").css('opacity', '1');
                trg = true;
            }
        }, 400);
    }
    
    typing_D();
    Insert_D();
});