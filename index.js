//  Effects after pages loads finish

$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});


// Make event effects fade in or fade out

$("button").click(function(){
  $("#div1").fadeToggle();
  $("#div2").fadeToggle("slow");
  $("#div3").fadeToggle(3000);
});
