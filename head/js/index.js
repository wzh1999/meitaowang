$(function () {
    $('div#nav ul li.yiji>ul li').hover(function () {
        var SubMenuWidth = $(this).width();
        $(this).children('ul')
        .css({ "width": "100px", "top": "0px", "left": SubMenuWidth }).stop()
        .slideDown('fast');
        console.log(SubMenuWidth);
    },function () {
        $(this).children('ul').stop().slideUp('fast');
    })
   moveBook();
})


//0元抽奖是真的滑()动
function moveBook() {
    var stopScroll = false;//判断是否动画播放
    var marginTop = 0;//图片索引初始值为1
    setInterval(function () {//自动播放函数
        if (stopScroll) return;//判断动画是否为自动播放，如果是自动播放直接跳出
        $(".express").children("li").first().animate({ "margin-Top": marginTop-- }, 0, function () {
            //这个ul中的第一个开始
            var $first = $(this);
            if (!$first.is(":animated")) {
                if ((-marginTop) > $first.height()) {
                    $first.css({ "margin-top": 0 }).appendTo($(".express")); marginTop = 0;
                }
            }
        });
        }, 50);
        $(".express").mouseover(function () {
            stopScroll = true;
        }).mouseout(function () {

            stopScroll = false;
        })
       
}