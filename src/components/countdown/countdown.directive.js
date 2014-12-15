'use strict';

angular.module('elfSantaHolidayJs')
  .directive('countdown', function ($rootScope, $window) {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'components/countdown/countdown.html',
      link: function (scope) {
        scope.countdownCount = 10;
        scope.countClass = '';

        var countTimer = setInterval(function () {
          if (scope.countdownCount === 0) {
            scope.countdownCount = 10;
            scope.countClass = '';
            $rootScope.$broadcast('timeExpired');
          }
          else {
            scope.countdownCount--;
            if (scope.countdownCount === 10) {
              scope.countClass = 'red';
            }
            scope.$digest();
          }
        }, 350);

        scope.$on('$destroy', function () {
          $window.clearInterval(countTimer);
        });

      }
    };
  });
