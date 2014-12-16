'use strict';

angular.module('elfSantaHolidayJs')
  .directive('elf', function ($document) {
    return {
      restrict: 'E',
      link: function (scope, element) {
        var keyDownEvent = function (evt) {
          if (evt.which === 38) {
            element.animate({'bottom': '+=30px'}, 100);
            scope.elfClass = 'up';
            scope.$digest();
            checkCollisions();
          }
          if (evt.which === 37) {
            element.animate({'left': '-=30px'}, 100);
            scope.elfClass = 'right';
            scope.$digest();
            checkCollisions();
          }
          if (evt.which === 39) {
            scope.elfClass = 'left';
            element.animate({'left': '+=30px'}, 100);
            scope.$digest();
            checkCollisions();
          }
          if (evt.which === 40) {
            scope.elfClass = 'bottom';
            element.animate({'bottom': '-=30px'}, 100);
            scope.$digest();
            checkCollisions();
          }
        };
        $document.on('keydown', keyDownEvent);

        scope.$on('$destroy', function () {
          $document.off(keyDownEvent);
        });

      }
    };
  });
