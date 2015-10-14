/*main module*/
(function () {
    var name = "app",
        //dependencies
        requires = [
        	"app.shell",
        	"app.search",
        	"app.weather",
        	"app.forecast",
        	"app.component",
        	"app.data"
        ];

    angular.module(name, requires)
    	.run(['$route', function($route){
    		//refresh route
    		$route.reload();
    	}]);
})();