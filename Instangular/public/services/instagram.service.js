angular.module('myApp')

.factory('instagram', function($resource){
    
    return
    {
        fetchPopuler : function(callback){
        
        var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK', {
            client_id: '3c40f09ff1c34941a08337539b9c8621'
        },{
           fetch: {method : 'JSONP'} 
        });
        
        api.fetch(function(response)){
            callback(response.data);          
        }
        
        
    }
    }
})