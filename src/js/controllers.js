app.controller('searchController', ['$scope', 'SearchService', '$location', '$routeParams', function($scope, SearchService, $location, $routeParams) {
  $scope.searchWord = '';
  $scope.movie = "movie";
  $scope.result = [];

  $scope.search = function (searchWord) {
    SearchService.searchMovie(searchWord)
    .then(function (result) {
      $scope.result = [];
      var movieID = 0;
      result.data.Search.forEach(function (movieObj) {
        movieObj.id = ++movieID;
        $scope.result.push(movieObj)
      });
      $scope.result = result.data.Search;
      $scope.searchWord = '';
    });
  };

}])
.controller('showController', ['$scope', 'SearchService', '$location', '$routeParams', function ($scope, SearchService, $location, $routeParams) {
  SearchService.imdbID = $routeParams.id;
  SearchService.searchSingleMovie(SearchService.imdbID)
  .then(function (result) {
    $scope.singleMovie = result.data;
  });

}]);
