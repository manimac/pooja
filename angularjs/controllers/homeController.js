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

app.controller('headerController',function($scope,$state){
    $scope.currentState = $state.current.name;

    $scope.menus = [{
        name : 'Home',
        state : 'home'
    },{
        name : 'About',
        state : 'about'
    },{
        name : 'Services',
        state : 'services'
    },{
        name : 'Careers',
        state : 'careers'
    }]
});


app.controller('commonController',function($scope,$state,customFactory){
    $scope.currentPage = $state.current.name;
    if($scope.currentPage == 'services'){
        $scope.url = "http://localhost/pooja/angularjs/services.txt";
    }
    else{
        $scope.url = "http://localhost/pooja/angularjs/careers.txt";
    }

    // $scope.url = "http://localhost/pooja/angularjs/"+ $scope.currentPage +".txt";

    customFactory.httpMethod($scope.url)
    .then(function(res){
        $scope.datas = res.data;
    })
    .catch(function(err){
        console.log(err)
    })
})
