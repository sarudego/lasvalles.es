angular.module("valles", ['ui.router','ngRoute'])
.constant('Config',{
  baseViews : '../views/',
})
//.controller("TestCtrl",function($scope){
  //$scope.urlHeader : Config.baseViews + 'header.html'
//})
.config(function(Config,$stateProvider,$urlRouterProvider,$locationProvider){
  $stateProvider
  .state('home',{
    url : "/",
    controller : "homeCtrl",
    templateUrl : Config.baseViews + 'home.html',
  })
  .state('queso',{
    url : "/queso",
    controller : "quesoCtrl",
    templateUrl : Config.baseViews + 'queso.html',
  })
  .state('granja',{
    url : "/granja",
    controller : "granjaCtrl",
    templateUrl : Config.baseViews + "granja.html",
  })
  .state('premios',{
    url : "/premios",
    controller : "premiosCtrl",
    templateUrl : Config.baseViews + "premios.html",
  })
  .state('beneficios',{
    url : "/beneficios",
    controller : "beneficiosCtrl",
    templateUrl : Config.baseViews + "beneficios.html",
  })
  .state('contacto',{
    url : "/contacto",
    controller : "contactoCtrl",
    templateUrl : Config.baseViews + "contacto.html",
  })
  .state('fotos',{
    url : "/fotos",
    controller : "fotosCtrl",
    templateUrl : Config.baseViews + "fotos.html",
  });
  //.state('granja',{
    //url : "/granja",
    //controller : "granjaCtrl",
    //templateUrl : Config.baseViews + "granja.html"
  //});
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

});
