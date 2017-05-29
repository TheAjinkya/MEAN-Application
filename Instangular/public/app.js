var app = angular.module("myApp", ['ngRoute', 'ngResource'])

app.config(['$routeProvider', function($routeProvider){
    
    $routeProvider.
    
    when('/', {
        templateUrl: 'views/gallery.view.html',
        controller: 'galleryCtrl'
    })
    
    .otherwise({rediredtTo: '/gallery'});
    
}]);