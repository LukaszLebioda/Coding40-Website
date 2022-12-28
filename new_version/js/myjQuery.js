// $(document).ready(function(){ 
//    alert("Ready!"); 
// })

// first photo: hide / showe / replaceWith
$(document).ready(function(){
 $("#jqButton1").click(function(){
   $("#jqButton1").hide(1500);
   $("img#jqImage1").hide(1500);
   $("span#jqSpan1").hide(1500);
   $("#jqButton2").show(1500);
   $("span#jqSpan2").show(1500);
 });
});
$(document).ready(function(){
    $("#jqButton2").click(function(){
      $("#jqButton2").hide(1500);
      $("span#jqSpan2").hide(1500);
      $("span#jqSpan1").show(1500);
      $("img#jqImage1").show(1500);
      $("#jqButton1").show(1500);
    });
   });

// second photo: css property (image darkness, text change)
$(document).ready(function(){

  let dark = 1;

     $("#jqButton3").click(function(){
      dark -= 0.1;
      $("img#jqImage2").css({"-webkit-filter" : "brightness("+dark+")"})
      $("span#jqSpan4").show();
      $("#jqButton4").show();
      $("span#jqSpan3").hide();
    });

    $("#jqButton4").click(function(){
      dark = 1;
      $("span#jqSpan3").show();
      $("span#jqSpan4").hide();
      $("img#jqImage2").css("-webkit-filter", "brightness(1)")
      $("#jqButton4").hide();
    });

});

// third photo: replace images left right
$(document).ready(function(){
  $("#jqButton5").click(function(){
    $("img#jqImage3").hide();
    $("img#jqImage4").show();
    $("span#jqSpan6").show();
    $("span#jqSpan5").hide();
    $("#jqButton5").hide();
    $("#jqButton6").show();
  });
$("#jqButton6").click(function(){
    $("img#jqImage4").hide();
    $("img#jqImage3").show();
    $("span#jqSpan5").show();
    $("span#jqSpan6").hide();
    $("#jqButton6").hide();
    $("#jqButton5").show();
  });
 });




// fourth photo = figcaption change (3 versions)