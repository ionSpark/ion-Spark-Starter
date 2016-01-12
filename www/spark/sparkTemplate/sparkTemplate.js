angular.module('spark.sparkTemplate', [])
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('Menu.sparkTemplate', {
    url: '/sparkTemplate',
    views: {
      'menu': {
        templateUrl: 'spark/sparkTemplate/sparkTemplate.html',
        controller: 'sparkTemplateCtrl'
      }
    }
  })

  })
  .controller('sparkTemplateCtrl', function($scope) {

  });
