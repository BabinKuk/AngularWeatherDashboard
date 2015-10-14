/*search controller*/
(function () {
    angular.module("app.search")
        //inject weather service
        .controller("Search", function ($scope, weatherSvc) {
        	$scope.cities = null;

        	//event handler
        	$scope.$on("search", search);

        	//event handler function
        	function search(evt, data){
        		console.log('in search: ', data.str);
        		//call service
        		weatherSvc.find(data.str)
        			.then(
        				function(response){
        					console.log('response ', response);
        					//model data ->under object list array (inside console)
        					$scope.cities = response.list;        					
        				},
        				function(error){
        					console.log('error finding cities ', error);
        				}
        			);
        	}

        });
})();