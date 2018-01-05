angular.module('blog').controller('PostController', function($scope, $http, $resource){
	$scope.posts = [];
	$scope.bfilter = '';
    $scope.msg = '';
    var url = 'http://elsweb.servehttp.com:3030';
    /*
    Servidor ainda não suporta o uso de apenas uma unica url para as actions,
    porém o blog já vem com suporte para o uso da mesma no futuro. Altere o nome da variavel
    para para fazer uso tem todo o script quando tiver o suporte. Dica aula 10 do Curso.
    */
    
    /*Listar Postagens*/
    var consul  = $resource(url + '/post/consulta');
    consul.query(function(rtn){
        $scope.posts = rtn;
    },function(error){
        console.log(error);
    })
  
    /*Remover Postagem*/
    /*Servidor ainda não da suporte ao DELETE, porém manter estrutura para fins Futuros*/
    $scope.remove = function(post){
        var del  = $resource(url + '/post/remove/:id');
        del.delete({id : post.post_id }, function(){
            var indicePost = $scope.posts.indexOf(post);
            $scope.posts.splice(indicePost, 1);
            $scope.msg = 'Postagem ' + post.post_title + ' removido com sucesso';
        } , function(error){
            $scope.msg = 'Não foi Possivel remover a postagem '+ post.post_title;
        })
    }
});