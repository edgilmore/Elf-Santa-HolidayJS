angular.module('elfSantaHolidayJs')
  .directive('elf',function($document) {
    return {
      restrict: 'E',
      templateUrl: 'components/elf/elf.html',
      link: function(scope,element,attrs){
      	console.log("in link");
      	$document.on('keydown',function(evt){
      		if(evt.which === 38){
      			console.log("here");
      			element[0].style.top = element[0].style.top + "5px";
      		}
      	});
      	scope.$destroy($document.off);
      }
    };
  });
