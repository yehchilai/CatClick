// console.log("javascript");
var clicks = 0;

jQuery(document).ready(function ($) { //fire on DOM ready
  $('#image').click(function(){
  clicks++;
  $('#clickNumber').text(clicks);
  console.log(clicks);
});
})
