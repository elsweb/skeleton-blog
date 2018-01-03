angular.module('mainDirective', []).directive('mainPainel',function(){
	var ddo = {};
	ddo.restrict = "AE";
	ddo.scope = {
		title : '@'
	}
	ddo.transclude = true;
	ddo.templateUrl = '_app/directives/inc/main-painel.html';
	return ddo;
});