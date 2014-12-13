angular.module('elfSantaHolidayJs')
  .directive('elf',function($document) {
    return {
      restrict: 'E',
      templateUrl: 'components/elf/elf.html',
      link: function(scope,element,attrs){
      	$document.on('keydown',function(evt){
      		if(evt.which === 38){
      			console.log(element);
      			element[0].style.bottom = element[0].style.bottom + "5px";
      			scope.$digest();
      		}
      	});
      	scope.$destroy($document.off);
      }
    };
  });
