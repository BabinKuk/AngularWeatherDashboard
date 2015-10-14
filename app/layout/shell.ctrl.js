/*main controller*/
(function () {
    angular.module("app.shell")
        //inject weather service
        .controller("Shell", function ($scope, weatherSvc) {

        	//define service functions
        	//visible in all child controllers
            $scope.getWeatherImgUrl = weatherSvc.getWeatherImgUrl;
            $scope.getCountryFlagImgUrl = weatherSvc.getCountryFlagImgUrl;
            $scope.kelvinToDegree = weatherSvc.kelvinToDegree;
            $scope.getTime = weatherSvc.getTime;

        });
})();