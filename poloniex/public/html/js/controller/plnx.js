angular.module('plnx.module', []);

angular.module('plnx.module').config(
		['$routeProvider',
function ($routeProvider) {

	$routeProvider.when('/plnx', {
		templateUrl: 'html/templates/plnx/plnx.tpl.html',
	    controller:'PolnxCtrl'
	  });
}]);

//Pagina Home (controller tambem usado para revalidacao de login)
angular.module('plnx.module').controller('PolnxCtrl',
		['$scope', '$location',
function ($scope,  $location) {

	console.log('### PlnxCtrl');

}]);
