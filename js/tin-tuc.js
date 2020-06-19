
  $(document).ready(function(){
    $(".fa.fa-chevron-up").click(function(){
      $(".social-page").show();
      $(".footer-fixed").hide();
    })
  })


  $(document).ready(function(){
    $(".fa.fa-times").click(function(){
      $(".social-page").hide();
      $(".footer-fixed").show();
    })
  })

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

  