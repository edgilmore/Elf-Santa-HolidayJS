angular.module('elfSantaHolidayJs')
  .directive('elf',function($document) {
    return {
      restrict: 'E',
      link: function(scope,element,attrs){
        var keyDownEvent = function(evt){
          if(evt.which === 38){
            element.animate({'bottom': '+=30px'},'fast');
            scope.$digest();
          }
        };
      	$document.on('keydown',keyDownEvent);
      	scope.$destroy($document.off(keyDownEvent));
      }
    };
  });
