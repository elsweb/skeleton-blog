angular.module('blog' , ['mainDirective','ngAnimate','ngRoute']).config(function($routeProvider , $locationProvider){
	
	var theme = 'themes/blog/';
	$locationProvider.html5Mode(true);
	$routeProvider.when('/',{
		templateUrl : theme + 'index.html',
		controller : 'PostController'
	});

	$routeProvider.when('/post/add',{
		templateUrl : theme + 'cadastro.html',
		controller : 'addPost'
	});

	$routeProvider.otherwise({redirectTo : '/'});
});