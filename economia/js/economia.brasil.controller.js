(function () {
  'use strict';

  angular.module('economia-app')
    .controller('EconomiaBrasilController', EconomiaBrasilController);

  EconomiaBrasilController.$inject = ['$scope', 'EconomiaFactory'];

  function EconomiaBrasilController($scope) {
    $scope.titulo = 'Brasil';
    //$scope.animal = AnimalFactory.recuperar($routeParams.id);

  }
})();