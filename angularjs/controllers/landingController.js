var app = angular.module('erp');
app.controller('landing1',function($scope,$rootScope,customService){
    $rootScope.name = 'Karthick';
    $scope.serviceContent = customService.getContent();
    customService.setParam('value from landing1 controller');
})
app.controller('landing2',function(customService,$scope){
    $scope.lan = customService.getParam();
})