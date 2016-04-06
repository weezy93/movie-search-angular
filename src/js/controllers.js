app.controller('MovieController', ['$scope', 'SearchService', function($scope, SearchService) {
  $scope.searchWord = '';
  $scope.movie = "movie";
  $scope.result = [];
  $scope.search = function () {
    SearchService.searchMovie($scope.searchWord)
    .then(function (result) {
      $scope.result.push(result);
      console.log($scope.result[0].data);
    });
  };


}])
.service('SearchService', ["$http", function ($http) {
  return {
    searchMovie: function (searchWord) {
      var search = decodeURI(searchWord);
      return $http({
        method: 'GET',
        url: "http://www.omdbapi.com/?t=" + search + "&plot=short$=&r=json"
      });
    }
  };
}]);
