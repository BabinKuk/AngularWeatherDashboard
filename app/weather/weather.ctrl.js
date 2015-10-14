/*weather controller*/
(function () {
    angular.module("app.weather")
        .controller("Weather", function ($scope, $routeParams, weatherSvc) {
        	
        	$scope.current = null;
        	
        	//check id first
            if($routeParams.id != undefined){
        		getCurrent($routeParams.id);
        	}

        	//handler function
        	function getCurrent(id){
        		console.log('in getCurrent ', id);
        		//call service
        		weatherSvc.getCurrent(id)
        			.then(
        				function(response){
        					console.log('response ', response);
        					//model data -> details under object list array
        					$scope.current = response;
        				},
        				function(error){
        					console.log('error loading current weather ', error);
        				}
        			);
        	}
        });
})();