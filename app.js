(function(){
    'use strict';
    angular.module('MyFirstApp',[])
    .controller('MyFirstController', function($scope){
        //$scope.name="Sasi Veera";
        $scope.sayHello = function(){
          return "Hello Coursera";
        };
    });

})();
