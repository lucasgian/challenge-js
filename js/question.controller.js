(function() {
    'use strict';

    angular.module('question-app')
      .controller('QuestionController', QuestionController);

    QuestionController.$inject = ['$scope', 'AnimalFactory'];

    function QuestionController($scope) {
      $scope.titulo = 'q';
      //$scope.animal = AnimalFactory.recuperar($routeParams.id);
      
    }
})();