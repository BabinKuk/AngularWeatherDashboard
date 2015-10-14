/*custom directive*/
(function () {
    angular.module("app.component")
        .directive("babinKukSearchBox", function () {
            return {
                templateUrl: "app/component/search-form.html",
                controller: searchBoxCtrlFn
            }
        });

    function searchBoxCtrlFn($scope) {
        $scope.search = function (searchStr) {
            //event handler
            $scope.$emit("search", { str: searchStr });
        }
    }
}());