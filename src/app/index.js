'use strict';

angular.module('elfSantaHolidayJs', ['ngAnimate', 'ngTouch', 'restangular', 'ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  }).run(function($window){
    var snowStorm = $window.snowStorm;
    snowStorm.snowColor = '#228B22';
    snowStorm.flakes = 96;
    snowStorm.useTwinkleEffect = true;
    snowStorm.freezeOnBlur = true;
    snowStorm.snowStick = true;
    snowStorm.randomizeWind();
  })
;
