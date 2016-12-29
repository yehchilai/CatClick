// console.log("javascript");
var clicks = [0,0,0,0,0];
var catNames = ["Catty", "Kitty", "Citty", "Kit", "Cat"];
var catImages = ["cat.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpeg", "cat5.jpeg"];

jQuery(document).ready(function ($) { //fire on DOM ready

  var list = $('#list');
  // main.after('<div class="col-md-3">');
  for(var i = 0; i < catNames.length; i++){
    var name = catNames[i];
    var cNumber = clicks[i];
    var cImage = catImages[i];
    var elem = '<li id=\''+name+'\'>' + name + '</li>';
    list.append(elem);
    var elemClick = $('#'+name);
    elemClick.click((function(catName, clickNumber, catImage, index){

      return function(){
        // current number of the image
        $('#click').empty();
        $('#click').text(clicks[index]);
        // console.log(test);
        $('#image').empty();
        $('#image').append('<img id="Click'+catName+'" src="'+catImage+'">');
        $('#Click'+catName).click((function(imgageIndex){
          return function(){
            console.log(imgageIndex);
            clicks[imgageIndex]++;
            $('#click').empty();
            $('#click').text(clicks[index]);
          }
        })(index));
      };

    })(name, cNumber, cImage, i));
  }
  // main.after('</div>');
  // main.after('<div class="col-md-4"><h3>Click Number:</h3><h2 id="click"><h2></div>');
  // main.after('<div id="image" class="col-md-5"></div>');
})


var clickIncrese = function(){
  clicks++;
  $('#clickNumber').text(clicks);
  // console.log(clicks);
};
