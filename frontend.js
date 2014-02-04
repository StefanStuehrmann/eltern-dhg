var klapla = angular.module('klapla', ['ui.router']).run(
  [ '$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }]);

klapla.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/index");

  $stateProvider
    .state('index', {
      url: "/index",
      templateUrl: "partials/index.html"
    })
    .state('pinnwand', {
      url: "/pinnwand",
      templateUrl: "partials/pinnwand.html",
      controller: "PinnwandCtrl"
    })
    .state('schueler', {
      url: "/schueler",
      templateUrl: "partials/schueler.html",
      controller: "SchuelerCtrl"
    })
    .state('bilder', {
      url: "/bilder",
      templateUrl: "partials/bilder.html",
      controller: "BilderCtrl"
    })
    .state('downloads', {
      url: "/downloads",
      templateUrl: "partials/downloads.html"
    })
});

klapla.config(['$httpProvider', function($httpProvider) {
  //initialize get if not there
  if (!$httpProvider.defaults.headers.get) {
    $httpProvider.defaults.headers.get = {};
  }
  //disable IE ajax request caching
  $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';
}]);

