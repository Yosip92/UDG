function search(){
    $('.search').slideToggle(200);
    $('header').css("border-bottom", "none");
    return false;
};

function menu(){
    $('.items').slideToggle(200);
    // $('#home').css("background", "url(../images/points.png)")
    return false;
};

(function() {
    var width = window.innerWidth;
    $('.search').css("width", width);    
})();