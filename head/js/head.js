$(function () {
    $("#menu>ul>li").hover(function () {
        $(this).children('ul').stop().slideDown('fast');
    }, function () {
        $(this).children('ul').stop().slideUp('fast');
    }
    )
})