(function(){
'use strict';

angular.module('NameCalculator',[])
.controller('NameCalculatorController', function($scope){
  $scope.name = "";
  $scope.totalVal = 0;
  $scope.displayNumeric = function(){
    var totalNumericVal = calculateNumericForString($scope.name);
    $scope.totalVal = totalNumericVal;
  };

  function calculateNumericForString(string){
    var totalStringVal = 0;
    for(var i=0;i<string.length;i++){
      totalStringVal += string.charCodeAt(i);
    }
    return totalStringVal;
  }
});


})();
