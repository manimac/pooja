var app = angular.module('erp');
app.controller('landing1',function($scope,$rootScope,customService){
    $rootScope.name = 'Karthick';
    $scope.serviceContent = customService.getContent();
    customService.setParam('value from landing1 controller');
    $scope.passName = 'Value from landing1 controller using event';
    $scope.passValue = function(){
        $rootScope.$broadcast('test1',{name : $scope.passName});
    }
    $scope.$on('test2',function(ev,args){
        $scope.yname = args.name;
    })
})
app.controller('landing2',function(customService,$scope,$rootScope, customFactory){
    $scope.lan = customService.getParam();
    $scope.$on('test1',function(ev,args){
        $scope.yname = args.name;
    })

    $scope.passName = 'Value from landing2 controller using emit event';
    $scope.passValue2 = function(){
        $rootScope.$broadcast('test2',{name : $scope.passName});
    }
    customFactory.httpMethod("http://localhost/pooja/angularjs/test.txt")
    .then(function(res){
        $scope.students = res.data;
    })
    .catch(function(err){
        console.log(err)
    })
})