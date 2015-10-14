/*module for layout */
(function () {
    var name = "app.shell",
        requires = ["ngRoute"];

    angular.module(name, requires)
    	//configuring routes
    	.config(function($routeProvider){
			$routeProvider
				.when("/search",  {
					templateUrl: "app/search/search.html",
					controller: "Search"
				})
				//id is the parameter for city
				.when("/weather/:id",  {
					templateUrl: "app/weather/weather.html",
					controller: "Weather"
				})
				.when("/forecast/:id",  {
					templateUrl: "app/forecast/forecast.html",
					controller: "Forecast"
				})
			.otherwise({
				redirectTo: "/search"
			})
    	});
})();