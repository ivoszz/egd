'use strict';

/* Controllers */

function DataCtrl($scope, $http) {
  $scope.message = '';
  $scope.orderProp = '-Gor';

  $http.get('/EGD/GetPlayerDataByData.php?lastname=&country=cz&club=Brno')
    .success(function(data) {
      (data.players).forEach(function(record) {
        record.Gor = parseInt(record.Gor, 10);
      });
      $scope.players = data.players;
    });
};

DataCtrl.$inject = ['$scope', '$http'];

function StatusCtrl($scope) {
  $scope.message = 'Attention! Feature still not implemented. Sorry. :(';
};

StatusCtrl.$inject = ['$scope'];
