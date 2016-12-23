angular.module('lasvalles')
.directive('lasvallesheader',function(Config){
  return{
    restrict : 'E',
    replace : true,
    templateUrl : Config.baseViews + 'header.html',
    controller : function($scope){
      $scope = {}
    }
  };
});
