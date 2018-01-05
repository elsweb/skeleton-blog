angular.module('mainDirective', []).directive('mainPainel',function(){
	var ddo = {};
	ddo.restrict = "AE";
	ddo.scope = {
		title : '@'
	}
	ddo.transclude = true;
	ddo.templateUrl = '_app/directives/inc/main-painel.html';
	return ddo;
})
.directive('btnAlert' , function(){
	var ddo = {};
	ddo.restrict = "AE";
	ddo.scope = {
		nome : '@', //Para strings
		acao : '&'  //Para expressões
	};
	ddo.template = '<button ng-click="acao(post)" class="btn btn-danger btn-block">{{nome}}</button>';
	return ddo;
});