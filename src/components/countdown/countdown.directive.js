angular.module('elfSantaHolidayJs')
  .directive('countdown',function($rootScope) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'components/countdown/countdown.html',
      link: function(scope,element,attrs){
       	scope.countdownCount = 60;
        console.log(scope.countdownCount);
        var countTimer = setInterval(function(){
            console.log(scope.countdownCount);

           if (scope.countdownCount === 0)
           {
             scope.countdownCount = 60;
             $rootScope.$broadcast("timeExpired");
           }
           else
           {
             scope.countdownCount--;
             scope.$digest();
           }

          }, 1000);


      }
    };
  });
