// 功能设计思路：
//(3)点赞效果：点击♥后数量+1，表示已点赞；再次点击♥后数量-1，表示取消点赞。【×】
// 正确逻辑：点赞，前端发送请求，后台控制相应数据+1，返回后台计算过的数据给前端，前端接收，显示新数据
//(4)显示10条评论，默认显示前3条，不需要输入功能
//正确的做法：touch事件
$(function(){
    // 点赞功能
    var optWrap = $(".po-hd").children(".js-opt");
    optWrap.each(function(index,domEle){
        var optFir = $(domEle).find("li").first().children("img");
        var count = 0;
        optFir.click(function(){
            var supportNum = Number($(this).next('.support_Num').text());
            $(this).toggleClass("add",count++ % 2 == 0);
            if($(this).hasClass("add")){
                $(this).next('.support_Num').text(supportNum+1);
            }
            else{
                $(this).next('.support_Num').text(supportNum-1);
            }
        });
    });
    // 评论区效果
    var cmtWrap = $(".po-hd").children(".js-cmt");
    cmtWrap.each(function (index, domEle){
        var cmtNum = $(domEle).find("p").length;
        if(cmtNum > 3){
            $(domEle).find("p").slice(3).hide();
            $(domEle).append('<div class="font12 mtop8 showCmt"><span>查看全部评论</span><img class="mleft4" src="images\\comment-downarrow.svg" alt=""></div><div class="font12 mtop8 hideCmt"><span>收起</span><img class="mleft4" src="images\\comment-uparrow.svg" alt=""></div>');
            $(domEle).children(".showCmt").show().siblings(".hideCmt").hide();
            $(domEle).children(".showCmt").click(function(){
                $(domEle).find("p").slice(3).show();
                $(this).hide().siblings(".hideCmt").show();
            });
            $(domEle).children(".hideCmt").click(function(){
                $(domEle).find("p").slice(3).hide();
                $(this).hide().siblings(".showCmt").show();
            });
        }
    });
});
