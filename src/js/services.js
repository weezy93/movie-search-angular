app.service('SearchService', ["$http", function ($http) {
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
