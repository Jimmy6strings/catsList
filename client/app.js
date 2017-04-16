angular.module('cats', [ 'ngRoute' ])
  .config(function($routeProvider) {
    $routeProvider
      .when('/borrow-a-cat', {
        templateUrl: 'borrowcats/borrow-a-cat.html',
        controller: 'borrowCatCtrl'
      })
      .when('/lend-a-cat', {
        templateUrl: 'lendcats/lend-a-cat.html',
        controller: 'lendCatCtrl'
      })
      .otherwise({
        redirectTo: '/borrow-a-cat'
      });
  })

  .factory('Borrow', function ($http) {
    var items = {};


  items.getCats = function() {
    return $http({
      method: 'GET',
      url: './data.json',
    }).then(function(data) {
      console.log(data)
      items = data;
      return data;
    })
  };

  items.lendCat = function() {
    return $http({
      method: 'POST',
      url: 'api/borrowcats',
      data: String
    }).then(function(resp) {
      return resp;
    });
  }



  return items;
})

.controller('borrowCatCtrl', function($scope, Borrow) {

     $scope.data = [];

    $scope.call = function () {
      Borrow.getCats().then(function(response) {
        $scope.data.push(response.data);
        console.log($scope.data);
      })
    };
     $scope.call();

})

.controller('lendCatCtrl', function($scope, Borrow) {
  $scope.data = {};

  $scope.lendCats = function() {
    Borrow.lendCat($scope.data).then(function() {
      $location.path('borrowcats/borrow-a-cat.html')
      console.log('cat added')
    })
    .catch(function(error) {
      console.log("did not give cat info" + error);
    })
  }
})