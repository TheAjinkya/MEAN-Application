angular.module('myApp')

.controller('galleryCtrl', ['$scope', 'instagram', function($scope, instagram){
    
    $scope.images = [];
    
  instagram.fetchPopular(function(data){
      console.log(data)
      $scope.images = data
  })
    
}])