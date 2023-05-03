//  Effects after pages loads finish

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});


// Make event effects fade in or fade out

$("img").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});

//  Fade direction opacity

$("p").mouseHover(function(){
  $("#div1").fadeTo("slow", 0.15);
  $("#div2").fadeTo("slow", 0.4);
  $("#div3").fadeTo("slow", 0.7);
});

//Adding animation to page
