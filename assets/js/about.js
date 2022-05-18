$(".section-avatar-1").click(function(){
    if($(".section-para-1").hasClass("selected-para")){
        return;
    }else{
        $(".selected-para").fadeOut();
        $(".section-para").removeClass("selected-para");
        $(".section-para-1").addClass("selected-para");
        $(".selected-para").fadeIn(200);
    }
})

$(".section-avatar-2").click(function(){
    if($(".section-para-2").hasClass("selected-para")){
        return;
    }else{
        $(".selected-para").fadeOut();
        $(".section-para").removeClass("selected-para");
        $(".section-para-2").addClass("selected-para");
        $(".selected-para").fadeIn(200);
    }
})

$(".section-avatar-3").click(function(){
    if($(".section-para-3").hasClass("selected-para")){
        return;
    }else{
        $(".selected-para").fadeOut();
        $(".section-para").removeClass("selected-para");
        $(".section-para-3").addClass("selected-para");
        $(".selected-para").fadeIn(200);
    }
})

// $(".section-avatar-4").click(function(){
//     if($(".section-para-4").hasClass("selected-para")){
//         return;
//     }else{
//         $(".selected-para").fadeOut();
//         $(".section-para").removeClass("selected-para");
//         $(".section-para-4").addClass("selected-para");
//         $(".selected-para").fadeIn(200);
//     }
// })