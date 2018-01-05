angular.module('blog').controller('PostController', function($scope, $http){
	$scope.posts = [];
	$scope.bfilter = '';
    $scope.msg = '';
	var url = 'http://elsweb.servehttp.com:3030';
    
    /*Listar Postagens*/
    $http.get(url + '/post/consulta')
    .success(function(rtn){
    	$scope.posts = rtn;
    })
    .error(function(erro){
    	console.log(error);
    });
    
    /*Remover Postagem*/
    $scope.remove = function(post){
        /*Servidor ainda não da suporte ao DELETE, porém manter estrutura para fins Futuros*/
        $http.delete(url + '/post/remove/' + post.post_id)
        .success(function(){
            var indicePost = $scope.posts.indexOf(post);
            $scope.posts.splice(indicePost, 1);
            $scope.msg = 'Postagem ' + post.post_title + ' removido com sucesso';
        })
        .error(function(erro){
            $scope.msg = 'Não foi Possivel remover a postagem '+ post.post_title;
        });
    }
});