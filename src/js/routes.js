app.config(function($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'searchController'
    })
    .when('/movie/:id', {
      templateUrl: 'partials/show.html',
      controller: 'searchController'
    })
    .otherwise('/');
});
