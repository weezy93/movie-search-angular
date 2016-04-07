app.controller('searchController', ['$scope', 'SearchService', '$location', function($scope, SearchService, $location) {
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
  console.log($routeParams);
  $scope.singleMovie = 'stuff';
  $scope.searchSingleMovie = function () {
    var id = $routeParams.id;
    SearchService.searchSingleMovie(id)
    .then(function (result) {
      console.log(result);
      $scope.singleMovie = result;
    });
  }

}]);



  // $scope.singleMovie = {};


  // $scope.showSingleMovie = function (movieObj) {
  //   SearchService.searchSingleMovie(movieObj.imdbID)
  //   .then(function (result) {
  //     console.log(result);
  //     $scope.singleMovie = result.data;
  //     console.log('$location.path($location.path(movieObj.id)', function ())
  //     // $location.path($loction.path)' + movieObj.id));
  //   });
  // }
