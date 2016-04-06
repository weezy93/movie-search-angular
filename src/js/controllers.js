app.controller('MovieController', ['$scope', 'SearchService', function($scope, SearchService) {
  $scope.searchWord = '';
  $scope.movie = "movie";
  $scope.result = [];
  $scope.search = function () {
    SearchService.searchMovie($scope.searchWord)
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
.service('SearchService', ["$http", function ($http) {
  return {
    searchMovie: function (searchWord) {
      var search = decodeURI(searchWord);
      return $http({
        method: 'GET',
        url: "http://www.omdbapi.com/?s=" + search + "&plot=short$=&r=json"
      });
    }
  };
}]);
