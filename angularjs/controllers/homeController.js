var app = angular.module('erp');
app.controller('homeController',function($scope){
    $scope.name = 'Dinesh';
    $scope.showClass = false;
    $scope.styleProp = {
        background : 'yellow',
        color : 'green',
        fontSize : '24px'
    }
    $scope.showDiv = false;


    $scope.price =70;

    $scope.students = [
        {
            name : 'Dinesh',
            age : 20
        },
        {
            name : 'Aravind20',
            age : 26
        },
        {
            name : 'Jagan',
            age : 23
        },
        {
            name : 'Raj',
            age : 20
        },
        {
            name : 'Karthick',
            age : 27
        }
    ]
});

app.controller('testController',function(){
    
});
