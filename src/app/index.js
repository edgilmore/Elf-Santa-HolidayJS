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
    $window.snowColor = '#228B22';
    $window.freezeOnBlur = true;
    $window.snowCharacter = '•';
    $window.snowStick = true;
    $window.randomizeWind();
    $window.useTwinkleEffect = true;
    $window.useMeltEffect = true;
    $window.flakesMaxActive = 96;
  })
;
