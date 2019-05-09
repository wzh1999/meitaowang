//二级和三级联动菜单
$(function () {
    $("#nav>ul>li").hover(function () {
        $(this).children('ul').stop().slideDown('fast');
    }, function () {
        $(this).children('ul').stop().slideUp('fast');
    });
    $("#nav>ul>li>ul li").hover(function () {
        var naverwidth = $(this).parent().width(); //获取二级菜单ul的宽度
        console.log(naverwidth);
        $(this).children('ul').css({ "width": "100px", "top": "0px", "left": naverwidth })
        .stop()
        .slideDown('fast');
    }, function () {
        $(this).children('ul').stop().slideUp('fast');
    })
}) 