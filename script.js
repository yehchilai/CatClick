
var catNames = ["Catty", "Kitty", "Citty", "Kit", "Cat"];
var catImages = ["cat.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpeg", "cat5.jpeg"];

jQuery(document).ready(function ($){

  $(function(){

    var model = {

      currentCat : null,

      init: function(){
          this.catData = [];
      },
      addCat: function(obj){
        this.catData.push(obj);
      },
      setCurrentCat: function(cat){
        currentCat = cat;
      },
      getAllCats: function(){
        return this.catData;
      }
    };

    var control = {
      init: function(){
        model.init();
        control.addDataSet();
        // console.log(model.catData);
        listView.init();
        view.init();
      },
      addDataSet:function(){
        for(var i = 0; i < catNames.length; i++){
          var obj = {"name" : catNames[i], "count": 0, "url": catImages[i]};
          model.addCat(obj);
        }
      },
      setCurrentCat: function(cat){
        model.currentCat = cat;
      },
      getAllCats: function(){
        return model.getAllCats();
      },
      increaseCount:function(){
        model.currentCat.count++;
      },
      getCurrentCat: function(){
        return model.currentCat;
      }

    };

    // cat list view
    var listView = {
      init: function(){
        this.elemList = $('#list');
        this.render();
      },
      render:function(){
        var cats = control.getAllCats();

        for(var i = 0; i < cats.length; i++){
          var elem = '<li id=\''+cats[i].name+'\'>' + cats[i].name + '</li>';
          this.elemList.append(elem);
          var elemClick = $('#'+cats[i].name);
          elemClick.click((function(currentCat){
            return function(){
              control.setCurrentCat(currentCat);
              view.render();
            };
          })(cats[i]));
        }
      }
    };

    // image and count view
    var view = {
      init: function(){
        // this.imageView = $('#image');
        // this.clickView = $('#click');
        $('#image').click(function(){
          var currentCat = control.getCurrentCat();
          control.increaseCount();
          if(currentCat) $('#click').text(currentCat.count);
        });

      },
      render: function(){
        var currentCat = control.getCurrentCat();
        $('#image').empty();
        $('#image').attr('src', currentCat.url);
        $('#click').text(currentCat.count);
      }
    }
    control.init();
  });
});

