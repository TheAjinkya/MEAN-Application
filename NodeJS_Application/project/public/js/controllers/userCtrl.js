app.controller('UserCtrl', function ($route, $scope, $location, $http, $routeParams) {

	var isTrue = false;


	$scope.viewUser = function (id) {
	        $location.path('/users/' + id);
	};

	$scope.editUser = function (id) {
	        $location.path('/users/' + id + '/edit');
	};

	$scope.deleteUser = function (id) {
        	$http.delete("/api/users/" + id).then(function (response) {
        		$route.reload();
		});
	};

	$http.get("/api/users").then(function (response) {
        	$scope.users = response.data;
	});
	
	
	
	$scope.sortByLastName = function(){
		
		isTrue = !isTrue
	
	for (var i=0; i< $scope.users.length -1; i++) {
     
	 
	 
	 for (var j =0; j< $scope.users.length -1-i; j++) {
       
	   var result; 
	   
	   if(isTrue){
		 
		  result = $scope.users[j].lastName < $scope.users[j+1].lastName
		   
		   
	   }
	   
	   else{
		   
		   		 result = $scope.users[j].lastName > $scope.users[j+1].lastName

		   
	   }
	  
	  if(result){
		   
			var temp = $scope.users[j]
			$scope.users[j] = $scope.users[j+1]
			$scope.users[j+1] = temp
			
		   
	   }
	 
    }  
	 
    }
	}
	
	
	
	
	
	$scope.sortByFirstName = function(){
		
		isTrue = !isTrue
	
	for (var i=0; i< $scope.users.length -1; i++) {
     
	 
	 
	 for (var j =0; j< $scope.users.length -1-i; j++) {
       
	   var result; 
	   
	   if(isTrue){
		 
		  result = $scope.users[j].firstName < $scope.users[j+1].firstName
		   
		   
	   }
	   
	   else{
		   
		   		 result = $scope.users[j].firstName > $scope.users[j+1].firstName

		   
	   }
	  
	  if(result){
		   
			var temp = $scope.users[j]
			$scope.users[j] = $scope.users[j+1]
			$scope.users[j+1] = temp
			
		   
	   }
	 
    }  
	 
    }
	}
	
	
	
		$scope.sortByEmailId = function(){
		
		isTrue = !isTrue
	
	for (var i=0; i< $scope.users.length -1; i++) {
     
	 
	 
	 for (var j =0; j< $scope.users.length -1-i; j++) {
       
	   var result; 
	   
	   if(isTrue){
		 
		  result = $scope.users[j].emailId < $scope.users[j+1].emailId
		   
		   
	   }
	   
	   else{
		   
		   		 result = $scope.users[j].emailId > $scope.users[j+1].emailId

		   
	   }
	  
	  if(result){
		   
			var temp = $scope.users[j]
			$scope.users[j] = $scope.users[j+1]
			$scope.users[j+1] = temp
			
		   
	   }
	 
    }  
	 
    }
	}
	
	
	
		$scope.sortByContact = function(){
		
		isTrue = !isTrue
	
	for (var i=0; i< $scope.users.length -1; i++) {
     
	 
	 
	 for (var j =0; j< $scope.users.length -1-i; j++) {
       
	   var result; 
	   
	   if(isTrue){
		 
		  result = $scope.users[j].emailId < $scope.users[j+1].emailId
		   
		   
	   }
	   
	   else{
		   
		   		 result = $scope.users[j].emailId > $scope.users[j+1].emailId

		   
	   }
	  
	  if(result){
		   
			var temp = $scope.users[j]
			$scope.users[j] = $scope.users[j+1]
			$scope.users[j+1] = temp
			
		   
	   }
	 
    }  
	 
    }
	}
	
	
	
	$scope.sortByGender = function(){
		
		isTrue = !isTrue
	
	for (var i=0; i< $scope.users.length -1; i++) {
     
	 
	 
	 for (var j =0; j< $scope.users.length -1-i; j++) {
       
	   var result; 
	   
	   if(isTrue){
		 
		  result = $scope.users[j].gender < $scope.users[j+1].gender
		   
		   
	   }
	   
	   else{
		   
		   		 result = $scope.users[j].gender > $scope.users[j+1].gender

		   
	   }
	  
	  if(result){
		   
			var temp = $scope.users[j]
			$scope.users[j] = $scope.users[j+1]
			$scope.users[j+1] = temp
			
		   
	   }
	 
    }  
	 
    }
	}
	
	
	
	$scope.sortByDesignation = function(){
		
		isTrue = !isTrue
	
	for (var i=0; i< $scope.users.length -1; i++) {
     
	 
	 
	 for (var j =0; j< $scope.users.length -1-i; j++) {
       
	   var result; 
	   
	   if(isTrue){
		 
		  result = $scope.users[j].designation < $scope.users[j+1].designation
		   
		   
	   }
	   
	   else{
		   
		   		 result = $scope.users[j].designation > $scope.users[j+1].designation

		   
	   }
	  
	  if(result){
		   
			var temp = $scope.users[j]
			$scope.users[j] = $scope.users[j+1]
			$scope.users[j+1] = temp
			
		   
	   }
	 
    }  
	 
    }
	}
	
	
	$scope.sortByCity = function(){
		
		isTrue = !isTrue
	
	for (var i=0; i< $scope.users.length -1; i++) {
     
	 
	 
	 for (var j =0; j< $scope.users.length -1-i; j++) {
       
	   var result; 
	   
	   if(isTrue){
		 
		  result = $scope.users[j].city < $scope.users[j+1].city
		   
		   
	   }
	   
	   else{
		   
		   		 result = $scope.users[j].city > $scope.users[j+1].city

		   
	   }
	  
	  if(result){
		   
			var temp = $scope.users[j]
			$scope.users[j] = $scope.users[j+1]
			$scope.users[j+1] = temp
			
		   
	   }
	 
    }  
	 
    }
	}
	
	
	
	
});
	
