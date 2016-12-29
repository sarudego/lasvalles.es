angular.module('valles')
.directive('foote',function(Config){
  return{
    restrict : 'E',
    replace : true,
    templateUrl : Config.baseViews + 'footer.html',
    //controller : function($scope){}
  };
});
