angular.module('elfSantaHolidayJs')
  .directive('elf',function($document) {
    return {
      restrict: 'E',
      link: function(scope,element,attrs){
        var keyDownEvent = function(evt){
          if(evt.which === 38){
            element.animate({'bottom': '+=30px'},'fast');
            scope.elfClass = 'up';
            scope.$digest();
          }
          if(evt.which === 37){
            element.animate({'left': '-=30px'},'fast');
            scope.elfClass = 'right';
            scope.$digest();
          }
          if(evt.which === 39){
          	scope.elfClass = 'left';
            element.animate({'left': '+=30px'},'fast');
            scope.$digest();
          }
          if(evt.which === 40){
          	scope.elfClass = 'bottom';
            element.animate({'bottom': '-=30px'},'fast');
            scope.$digest();
          }
        };
      	$document.on('keydown',keyDownEvent);
        /*
      	scope.$destroy(function(){
          $document.off(keyDownEvent)
        });
        */
      }
    };
  });
