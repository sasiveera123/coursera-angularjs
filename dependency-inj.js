/*(function(){
  angular.module("DIApp",[])
  .controller("DIController",DIController);
  DIController.$inject =  ['$scope','$filter']
  function DIController($scope, $filter){
      $scope.name = "Sasi Veera";
      $scope.upper = function(){
        var upCase =  $filter('uppercase');
        $scope.name = upCase($scope.name);
      };
  }
})();*/

!function(){function e(e,n){e.name="Sasi Veera",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",e])}();
