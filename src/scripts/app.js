angular.module("lasvalles", ['ui.router','ngAnimate'])
.constant('Config',{
  baseViews : '../views'
})

.config(function(Config,$stateProvider,$urlRouterProvider){
  $stateProvider
  .state('queso',{
    url : "/quesolasvalles",
    controller : "quesoCtrl",
    templateUrl : Config.baseViews + "quesolasvalles.html"
  })
  .state('granja',{
    url : "/granjalasvalles",
    controller : "granjaCtrl",
    templateUrl : Config.baseViews + "granjalasvalles.html"
  })

  .state('home',{
    url : "/home",
    controller : "homeCtrl",
    templateUrl : Config.baseViews + "granjalasvalles.html"
  })
  $urlRouterProvider.otherwise('/home');



})
