angular.module('blog' , ['mainDirective','ngAnimate','ngRoute','Resource']).config(function($routeProvider , $locationProvider){
	
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

	$routeProvider.when('/post/edit/:id',{
		templateUrl : theme + 'cadastro.html',
		controller : 'addPost'
	});

	$routeProvider.otherwise({redirectTo : '/'});
});