(function() {
    'use strict';
  
    angular.module('economia-app')
      .config(function($routeProvider) {
        $routeProvider
          .when('/animais', {
            templateUrl: 'lista.html',
            controller: 'AnimalListaController'
          })
          .when('/brasil', {
            templateUrl: 'wiki-brasil.html',
            controller: 'EconomiaBrasilController'
          }).when('/animais/:id', {
            templateUrl: 'detalhe.html',
            controller: 'AnimalDetalheController'
          }).when('/italia', {
            templateUrl: 'wiki-italia.html',
            controller: 'EconomiaItaliaController'
          }).otherwise({
            redirectTo: '/brasil'
          });
      });
  })();