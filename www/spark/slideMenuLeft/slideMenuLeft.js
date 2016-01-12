angular.module('spark.slideMenuLeft', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('Menu', {
      url: '/menu',
      abstract: true,
      templateUrl: 'spark/slideMenuLeft/slideMenuLeft.html'
    })

  })
  .controller('slideMenuLeftCtrl', function($scope) {

  });
