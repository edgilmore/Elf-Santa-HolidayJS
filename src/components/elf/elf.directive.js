angular.module('elfSantaHolidayJs')
  .directive('elf',function() {
    return {
      restrict: 'E',
      templateUrl: 'components/elf/elf.html',
      link: function(scope,element,attrs){
      	console.log(element);
      	element.on("keydown",function(evt){

      		while()
      	});
      }
    };
  });
