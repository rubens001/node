angular.module('songs.module', []);

angular.module('songs.module').config(
		['$routeProvider',
function ($routeProvider) {

	$routeProvider.when('/songs', {
		templateUrl: 'html/templates/songs/songs.tpl.html',
	    controller:'SongsCtrl'
	  });
}]);

//Pagina Home (controller tambem usado para revalidacao de login)
angular.module('songs.module').controller('SongsCtrl',
		['$scope', '$location',
function ($scope,  $location) {

	console.log('### SongsCtrl');
	$scope.music={list:[]};
	$scope.music.list.push({date:(new Date()), singer:'singer1', song:'song1'});
	$scope.music.list.push({date:(new Date()), singer:'singer2', song:'song2'});
	$scope.music.list.push({date:(new Date()), singer:'singer3', song:'song3'});

}]);
