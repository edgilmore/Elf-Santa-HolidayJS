$("#right").click(function(){
  $(".block").animate({"left": "+=50px"}, "fast", checkCollisions);
});

$("#left").click(function(){
  $(".block").animate({"left": "-=50px"}, "fast", checkCollisions);
});

$("#up").click(function(){
  $(".block").animate({"top": "-=50px"}, "fast", checkCollisions);
});

$("#down").click(function(){
  $(".block").animate({"top": "+=50px"}, "fast", checkCollisions);
});

function getPositions(box) {
  var $box = $(box);
  var pos = $box.position();
  var width = $box.width();
  var height = $box.height();
  return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
}

function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

jQuery.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2)) + "px");
  //$(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2)) + "px");
  //$(window).scrollLeft()) + "px");
  return this;
}

function checkCollisions(){
  var box = $(".elf")[0];
  var santaBox = $(".santa")[0];
  var pos = getPositions(box);

  var pos2 = getPositions(santaBox);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;

  if (match) {
    //$rootScope.$broadcast('santaCaught');
    $(".santa").attr("src", "../assets/images/elfgun.jpg");
    //$window.clearInterval(angular.element(countdown).scope().)
    var position = $(".santa").position();
    $(".santa").hide();
    $(".countdown").hide();
    $(".elf").hide();
    $(".santaCaught").center();
    $(".santaCaught").css("display", "block");
  }
}
