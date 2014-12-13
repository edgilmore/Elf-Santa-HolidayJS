angular.module('elfSantaHolidayJs')
  .directive('elf',function() {
    return {
      restrict: 'E',
      templateUrl: 'components/elf/elf.html',
      link: function(scope,element,attrs){
      	console.log(element);
      	element.bind("keydown keypress",function(evt){
      		console.log("testing");
      		if(evt.which === 38){
      			console.log("here");
      		}
      	});
      }
    };
  });
