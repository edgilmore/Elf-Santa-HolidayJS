angular.module('elfSantaHolidayJs')
  .directive('elf',function($document) {
    return {
      restrict: 'E',
      link: function(scope,element,attrs){
        var elementStyle = element[0].style;
        elementStyle.bottom = "0px";

      	$document.on('keydown',function(evt){
      		if(evt.which === 38){
            element.animate({'bottom': '+=30px'},'slow');
      			scope.$digest();
      		}
      	});
      	scope.$destroy($document.off);
      }
    };
  });
