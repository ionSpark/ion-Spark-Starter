angular.module('spark.slideMenuRight', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('Menu', {
      url: '/menu',
      abstract: true,
      templateUrl: 'spark/slideMenuRight/slideMenuRight.html'
    })

  })
  .controller('slideMenuRightCtrl', function($scope) {

  });
