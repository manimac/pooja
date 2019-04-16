var app = angular.module('erp');
app.filter('agePlus',function(){
    return function(item){
        return item + "test content";
    }
})

app.filter('toUppercase',function(){
    return function(item){
        return item.toUpperCase();
    }
})