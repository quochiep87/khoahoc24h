function openTab(evt, contents) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(contents).style.display = "block";
    evt.currentTarget.className += " active";
  }

  function watchMore(){
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("watch-more");

    if(dots.style.display === "none"){
      dots.style.display = "inline";
      btnText.innerHTML = "Xem thêm";
      moreText.style.display = "none";
    } 
    else{
      dots.style.display = "none";
      moreText.style.display = "inline";
    }
  }

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


  