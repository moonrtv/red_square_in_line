$("#moveit").mouseenter(function(){
    $("#box").animate({left: "480px"}, 500);

    $(this).mouseleave(function(){
           $("#box").animate({left: "0px"}, 500);
    });
});
