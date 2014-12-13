angular.module('elfSantaHolidayJs')
  .directive('santa',function($rootScope) {
    return {
      restrict: 'E',
      templateUrl: 'components/santa/santa.html',
      link: function(scope, element, attrs){
        var positions = ["text-left","text-center","text-right"];
        scope.position = positions[2];
        $rootScope.$on("timeExpired", function() {
          var newPosition = Math.floor(Math.random() * (positions.length));
          while(scope.position == newPosition) {
            newPosition = Math.floor(Math.random() * (positions.length));
          }
          scope.position = newPosition;
        });
      }
    };
  });
