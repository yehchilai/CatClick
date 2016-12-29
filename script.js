// console.log("javascript");
var clicks = 0;
var catName1 = "Catty";
var catName2 = "Kitty";

jQuery(document).ready(function ($) { //fire on DOM ready

  $('#catName1').text(catName1);
  $('#catName2').text(catName2);

  $('#image1').click(function(){
    clickIncrese();
  });

  $('#image2').click(function(){
    clickIncrese();
  });
})


var clickIncrese = function(){
  clicks++;
  $('#clickNumber').text(clicks);
  // console.log(clicks);
};
