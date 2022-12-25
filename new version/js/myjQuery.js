// $(document).ready(function(){ 
//    alert("Ready!"); 
// })

// first photo: hide / showe / replaceWith
$(document).ready(function(){
 $("#buttonjqToggle").click(function(){
   $("#buttonjqToggle").hide(1500);
   $("img#jqToggle").hide(1500);
   $("#buttonjqToggle2").show( "<i class='bi bi-arrow-counterclockwise'></i>" );
 });
});
$(document).ready(function(){
    $("#buttonjqToggle2").click(function(){
      $("#buttonjqToggle2").hide(1500);
      $("img#jqToggle").show(1500);
      $("#buttonjqToggle").show( "<i class='bi bi-question'></i>" );
    });
   });



