const angularApp=angular.module('siddhu',['ngRoute','homeController','editController','ownController','singleController','signupController','loginController','articleController','postServices']);

angularApp.config(['$routeProvider',(a)=>{

a.when('/',{
    templateUrl:'./partials/home.html',
    controller:'homeController as hc',
    title:'Un simple blog'
}).
when('/about',{
    template:'<a href="#"><-</a><p>/p>',
    title:''
}).
when('/login',{ //admin
    templateUrl:'./partials/login.html',
    controller:'loginController as lc',
    title:'Blog Login'
}).
when('/signup',{
    templateUrl:'./partials/signup.html',
    controller:'signupController as sc',
     title:'Blog Registro'
}).
when('/admin',{
    templateUrl:'./partials/newArticle.html',
    controller:'articleController as ac',
    title:'Nuevo articulo'

}).
when('/articles',{
    templateUrl:'./partials/articles.html',
    controller:'ownController as oc',
    title:'Articulos'
}).
when('/:id/:title',{
    templateUrl:'./partials/singlePost.html',
    controller:'singleController as sc',
     title:''
}).
when('/article/edit/:id',{
    templateUrl:'./partials/editArticle.html',
    controller:'editController as ec',
     title:''
});

}]);

angularApp.controller('mainController',function($rootScope){
   var self=this;
    if(localStorage.getItem('isLogin')==1){
         $rootScope.login=true;
         $rootScope.data=JSON.parse(localStorage.getItem('userData'));
    }else{
        $rootScope.login=false;
    }

    this.logout=function(){
            localStorage.clear();
            location.reload();
    };
        
});

angularApp.run(['$rootScope', '$route', function($rootScope, $route) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });
}]);
