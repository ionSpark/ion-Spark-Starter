angular.module('spark.homeBasic', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('Menu.homeBasic', {
    url: '/homeBasic',
    views: {
      'menu': {
        templateUrl: 'spark/homeBasic/homeBasic.html',
        controller: 'homeBasicCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  // you can only need this on one page....
  $urlRouterProvider.otherwise('/menu/homeBasic');

  })
  .controller('homeBasicCtrl', function($scope, $window) {
    $scope.installedSparks = [];
      angular.forEach($window.angular.modules, function(value, key) {
        if(value.startsWith("spark")){
          var foo = value.split('.');
          $scope.installedSparks.push(foo[1])
        }
      });
  });
