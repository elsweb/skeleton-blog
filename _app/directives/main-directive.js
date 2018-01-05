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
	ddo.templateUrl = '_app/directives/inc/btn-alert.html';
	return ddo;
});