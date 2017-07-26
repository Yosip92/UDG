function search(){
    $('.search').slideToggle(200);
    $('header').css("border-bottom", "none");
    return false;
};

function menu(){
    $('.items').slideToggle(200);
    if ($('.items').css('display') == "block") {
        $('.items').css('display', 'flex');
        $('#home').css({"background": "url(images/points.png)"});
    } else {
        $('#home').css({"background": "url(images/back.png)", });
        // console.log('hello')
    }
    return false;
};

var width = window.innerWidth;
$('.search').css("width", width);

window.addEventListener("resize", searchFunction);
function searchFunction() {
    var width = window.innerWidth;
    $('.search').css("width", width);
};