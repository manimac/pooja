var app = angular.module('erp');
app.factory('customFactory',function($http){
    return {
        httpMethod  :httpMethod
    };

    function httpMethod(url){
        return $http.get(url);
    }
})