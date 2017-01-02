angular.module("valles", ['ui.router','ngRoute'])
.constant('Config',{
  baseViews : '../views/'
})
.config(function(Config,$stateProvider){
  $stateProvider
  //.state('queso',{
    //url : "/quesolasvalles",
    //controller : "quesoCtrl",
    //template : Config.baseViews + "queso.html"
  //})
  //.state('granja',{
    //url : "/granjalasvalles",
    //controller : "granjaCtrl",
    //template : Config.baseViews + "granja.html"
  //})

  .state('home',{
    url : "/",
    //controller : "homeCtrl",
    template : Config.baseViews + "home.html"
  })
   //var home = {
       //name: 'home',
       //url: '/',
    //template : Config.baseViews + "home.html"
     //}

    //$stateProvider.state(home);
  //$urlRouterProvider.otherwise("/home");



})
