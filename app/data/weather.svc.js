/*weather service - encapsulates ineratction with openWeather API*/
(function () {
     //my personal api key
    var config = {params: {APPID:"8c9d14f472eeec839487819cfbe8bf9b"}};
    
    angular.module("app.data")
        .factory("weatherSvc", function ($http, $q, weatherImgUrl, weatherSvcUrl, countryFlagImgUrl) {
            return {
                //find city
                find: findByLocation,
                //get current weather
                getCurrent: getCurrentWeather,
                //get forecast
                getForecast:getForecast,
                //get image
                getWeatherImgUrl: getWeatherImgUrl,
                //get country flag image url
                getCountryFlagImgUrl: getCountryFlagImgUrl,
                //format temperature
                kelvinToDegree: kelvinToDegree,
                //format date time
                getTime: getTime
            }

            //find location
            function findByLocation(location) {
                console.log('in findByLocation ', location);
                //call openweather api
                var url = weatherSvcUrl + "find?q=" + location;
                
                //async function to know when the data has arrived
                var defer = $q.defer();

                $http.get(url, config)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

            //get current weather for the city
            function getCurrentWeather(id){
                //async function to know when the data has arrived
                var defer = $q.defer();

                //call openweather api
                var url = weatherSvcUrl + "weather?id=" + id;
                
                $http.get(url, config)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

            //get forecast for the city
            function getForecast(id){
                 //async function to know when the data has arrived
                var defer = $q.defer();

                //call openweather api
                var url = weatherSvcUrl + "forecast/daily?id=" + id;
                
                $http.get(url, config)
                    .success(function (response) {
                        defer.resolve(response);
                    })
                    .error(function (err) {
                        defer.reject(err);
                    })

                return defer.promise;
            }

            //get image
            function getWeatherImgUrl(imgStr){
                console.log('getWeatherImgUrl ', weatherImgUrl + imgStr + ".png");
                return weatherImgUrl + imgStr + ".png";
            }

            //get country flag image
            function getCountryFlagImgUrl(imgStr){
                return countryFlagImgUrl + imgStr.toLowerCase() + ".png";
            }

            //format temperature
            function kelvinToDegree(temp){
                return temp - 273.15;
            }

            //format date time
            function getTime(dt){
                return new Date(dt * 1000);
            }
            
        });
}());