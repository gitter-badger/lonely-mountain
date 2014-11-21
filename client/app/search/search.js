'use strict';

angular.module('lmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/search', {
        templateUrl: 'app/search/search.html',
        controller: 'SearchCtrl'
      });
  });
