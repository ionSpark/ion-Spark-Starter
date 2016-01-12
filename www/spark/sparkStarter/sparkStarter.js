angular.module('spark.sparkStarter', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('Menu.sparkStarter', {
    url: '/sparkStarter',
    views: {
      'menu': {
        templateUrl: 'spark/sparkStarter/sparkStarter.html',
        controller: 'sparkStarterCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  // you can only need this on one page....
  $urlRouterProvider.otherwise('/menu/sparkStarter');

  })
  .controller('sparkStarterCtrl', function($scope, $window) {
    $scope.installedSparks = [];
      angular.forEach($window.angular.modules, function(value, key) {
        if(value.startsWith("spark")){
          var foo = value.split('.');
          $scope.installedSparks.push(foo[1])
        }
      });
  });
