$(document).ready(function() {
  $("img").click(function() {
    $("img").fadeOut();
  });

  $("#BluthsName").click(function() {
    $("#BluthsImg").fadeIn();
  });

  $("#LucilleName").click(function() {
    $("#LucilleImg").fadeIn();
  });

  $("#BarryName").click(function(){
    $("#BarryImg").fadeTo(1000, 0.5);
  });

  $("#GeneName").click(function(){
    $("#GeneImg").slideDown();
  });

});
