var app = angular.module('erp');
app.directive('documentHistory',function(){
    return {
        restrict : 'M',
        // template : '<div>This is from directive content...</div>'
        templateUrl : 'views/header.html'
    }
})