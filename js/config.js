(function() {
    'use strict';
  
    angular.module('question-app')
      .config(function($routeProvider) {
        $routeProvider
          .when('/animais', {
            templateUrl: 'lista.html',
            controller: 'AnimalListaController'
          })
          .when('/question', {
            templateUrl: '/question.html',
            controller: 'QuestionController'
          }).when('/animais/:id', {
            templateUrl: 'detalhe.html',
            controller: 'AnimalDetalheController'
          }).otherwise({
            redirectTo: '/animais'
          });
      });
  })();