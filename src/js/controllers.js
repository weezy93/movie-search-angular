app.controller('MovieController', ['$scope', 'SearchService', '$location', function($scope, SearchService, $location) {
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

  $scope.singleMovie = {};


  $scope.showSingleMovie = function (movieObj) {
    SearchService.searchSingleMovie(movieObj.imdbID)
    .then(function (result) {
      console.log(result);
      $scope.singleMovie = result.data;
      $location.path(decodeURI('#/movie/' + movieObj.id));
    });
  }

}])
.service('SearchService', ["$http", function ($http) {
  return {
    searchMovie: function (searchWord) {
      var search = decodeURI(searchWord);
      return $http({
        method: 'GET',
        url: "http://www.omdbapi.com/?s=" + search + "&plot=short$=&r=json"
      });
    },
    searchSingleMovie : function (id) {
      return $http({
        method: 'GET',
        url: 'http://www.omdbapi.com/?i=' + id + '&plot=short$=&r=json'
      })
    }
  };
}]);
