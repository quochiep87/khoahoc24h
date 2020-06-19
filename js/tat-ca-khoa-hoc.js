$(document).ready(function(){
    $(".signIn").click(function(){
        $(".modal").css("transition","0.6s");
        $(".modal").show();
    })
})

$(document).ready(function(){
    $(".form-close").click(function(){
        $(".modal").hide();
    })
})

$(document).ready(function(){
    $(".modal_overlay").click(function(){
        $(".modal").hide();
    })
})