(function () {
    'use strict';
  
    angular.module('economia-app')
      .controller('EconomiaItaliaController', EconomiaItaliaController);
  
    EconomiaItaliaController.$inject = ['$scope', 'EconomiaFactory'];
  
    function EconomiaItaliaController($scope) {
      $scope.titulo = 'Italia';
      //$scope.animal = AnimalFactory.recuperar($routeParams.id);
  
    }
  })();