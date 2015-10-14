/*forecast controller*/
(function () {
    angular.module("app.forecast")
        .controller("Forecast", function ($scope, $routeParams, weatherSvc) {
            
            $scope.forecast = null;
        	
        	//check id first
            if($routeParams.id != undefined){
        		getForecast($routeParams.id);
        	}

        	//handler function
        	function getForecast(id){
        		console.log('in getForecast ', id);
        		//call service
        		weatherSvc.getForecast(id)
        			.then(
        				function(response){
        					console.log('response ', response);
        					//model data-> details under object list array
        					$scope.forecast = response;
        				},
        				function(error){
        					console.log('error loading forecast ', error);
        				}
        			);
        	}
        	
        });
})();