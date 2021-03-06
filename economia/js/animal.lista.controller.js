(function() {
    'use strict';

    angular.module('question-app')
      .controller('AnimalListaController', AnimalListaController);

    AnimalListaController.$inject = ['$scope', 'AnimalFactory'];

    function AnimalListaController($scope, AnimalFactory) {
     $scope.titulo = 'Lista de Animais';
      $scope.listar = function() {
        return AnimalFactory.listar();
      };
    }

})();