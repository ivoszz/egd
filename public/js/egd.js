'use strict';


// Declare app level module which depends on filters, and services
angular.module('egd', ['egd.filters', 'egd.services', 'egd.directives'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/data', {templateUrl: 'partials/data.html', controller: DataCtrl});
    $routeProvider.when('/status', {templateUrl: 'partials/status.html', controller: StatusCtrl});
    $routeProvider.otherwise({redirectTo: '/data'});
  }]);
