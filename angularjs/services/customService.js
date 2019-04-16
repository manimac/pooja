var app = angular.module('erp');
app.service('customService',function(){
    return {
        getContent : getValue,
        setParam : setParam,
        getParam : getParam
    };

    function getValue(){
        return "Service content";
    }

    function setParam(param){
        this.user = param;
    }

    function getParam(){
        return this.user;
    }
})