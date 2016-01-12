angular.module('spark.slideMenuLeftRight', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('Menu', {
      url: '/menu',
      abstract: true,
      templateUrl: 'spark/slideMenuLeftRight/slideMenuLeftRight.html'
    })

  })
  .controller('slideMenuLeftRightCtrl', function($scope) {

  });
